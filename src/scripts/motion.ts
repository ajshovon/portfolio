import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { TextPlugin } from 'gsap/TextPlugin';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

declare global {
  interface Window {
    /** Set once animations have started, so the inline script in Layout.astro knows not to reveal everything itself. */
    motionReady?: boolean;
  }
}

gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let context: gsap.Context | undefined;
let lenis: Lenis | undefined;

const tick = (time: number) => lenis?.raf(time * 1000);

function smoothScroll() {
  lenis = new Lenis({ autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
}

// [data-intro] elements enter in document order as the page opens
function intro() {
  const timeline = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } });

  gsap.utils.toArray<HTMLElement>('[data-intro]').forEach((element, index) => {
    const at = index * 0.09;

    if (element.dataset.intro === 'title') {
      // Lines rise from behind a mask. autoSplit re-runs this when the web font loads or the width changes.
      gsap.set(element, { autoAlpha: 1 });
      SplitText.create(element, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'split-line',
        autoSplit: true,
        onSplit: (split) => gsap.from(split.lines, { yPercent: 110, duration: 0.9, ease: 'power4.out', stagger: 0.09, delay: at }),
      });
    } else {
      timeline.fromTo(element, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0 }, at);
    }
  });
}

// An element near the end of the page may never scroll far enough to cross its trigger line.
// Anything registered here runs when the end of the page is reached, so nothing can stay hidden.
function atPageEnd(runs: (() => void)[]) {
  ScrollTrigger.create({
    start: () => ScrollTrigger.maxScroll(window) - 1,
    once: true,
    onEnter: () => runs.forEach((run) => run()),
  });
}

// [data-scroll] elements rise in as they reach the viewport
function scrollReveals() {
  const waiting = new Set(gsap.utils.toArray<HTMLElement>('[data-scroll]'));
  const reveal = (batch: Element[]) => {
    batch.forEach((element) => waiting.delete(element as HTMLElement));
    gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, overwrite: true, clearProps: 'transform' });
  };

  gsap.set([...waiting], { autoAlpha: 0, y: 32 });
  ScrollTrigger.batch([...waiting], { start: 'top 90%', once: true, onEnter: reveal });

  return () => reveal([...waiting]);
}

// [data-terminal] prints its [data-line] children one by one, typing any [data-type] command
function terminals() {
  return gsap.utils.toArray<HTMLElement>('[data-terminal]').map((terminal) => {
    const caret = document.createElement('span');
    caret.className = 'caret';
    caret.ariaHidden = 'true';

    const timeline = gsap.timeline({ paused: true, delay: 0.6 });

    gsap.utils.toArray<HTMLElement>('[data-line]', terminal).forEach((line) => {
      const command = line.querySelector<HTMLElement>('[data-type]');
      timeline.set(line, { autoAlpha: 1 });

      if (command) {
        const text = command.textContent ?? '';
        timeline
          .call(() => command.after(caret))
          .fromTo(command, { text: '' }, { text, duration: Math.min(text.length * 0.045, 1.2), ease: 'none' })
          .call(() => caret.remove(), undefined, '+=0.25');
      } else {
        timeline.to({}, { duration: 0.12 });
      }
    });

    const play = () => timeline.play();
    ScrollTrigger.create({ trigger: terminal, start: 'top 85%', once: true, onEnter: play });

    return play;
  });
}

function init() {
  if (context || reducedMotion.matches) return;

  window.motionReady = true;
  smoothScroll();
  context = gsap.context(() => {
    intro();
    atPageEnd([...terminals(), scrollReveals()]);
  });
}

function cleanup() {
  context?.revert();
  context = undefined;
  gsap.ticker.remove(tick);
  lenis?.destroy();
  lenis = undefined;
}

// The first astro:page-load waits for every image, so start right away and let the guard in init() skip that one
document.addEventListener('astro:page-load', init);
document.addEventListener('astro:before-swap', cleanup);
init();
