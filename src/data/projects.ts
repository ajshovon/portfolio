import ask from '@/assets/images/ask.png';
import cgpa from '@/assets/images/cgpa.png';
import dash from '@/assets/images/dash.png';
import pbrp from '@/assets/images/PitchBlackRecoveryProject.png';
import pyrunner from '@/assets/images/pyrunner.png';
import tns from '@/assets/images/tns.svg';

export interface Project {
  slug: string;
  name: string;
  description: string;
  image: ImageMetadata;
  /** Screenshots fill the card's frame; logos and illustrations sit inside it. */
  cover?: boolean;
  live?: string;
  source: string;
}

export const projects: Project[] = [
  {
    slug: 'pitchblack-recovery',
    name: 'PitchBlack Recovery Project',
    description: 'PitchBlack Recovery Project is an open source custom recovery for android by developers from different countries with an aim to provide an advanced recovery with better customizations, themes and features.',
    image: pbrp,
    live: 'https://pitchblackrecovery.com/',
    source: 'https://github.com/PitchBlackRecoveryProject',
  },
  {
    slug: 'dash',
    name: 'DASH ⚡',
    description: 'DASH (Distributed Address Shortening Hub) is a decentralized application designed to shorten URLs. It leverages Cloudflare network to ensure fast and reliable short links.',
    image: dash,
    cover: true,
    live: 'https://dash-demo.shovon.me/login',
    source: 'https://re.shovon.me/dash-code',
  },
  {
    slug: 'ask',
    name: '.ask',
    description: ".ask is an anonymous question-asking platform similar to NGL, designed to be self-hosted for maximum control and privacy. It leverages Cloudflare's network for fast and reliable performance, ensuring that your platform is always accessible.",
    image: ask,
    cover: true,
    live: 'https://ask.shovon.me',
    source: 'https://re.shovon.me/ask-code',
  },
  {
    slug: 'cgpa-calculator',
    name: 'CGPA Calculator',
    description: 'A Responsive Web Interface for Calculating CGPA or Cumulative Grade Point Average of DIU Students.',
    image: cgpa,
    cover: true,
    live: 'https://diu-cgpa.shovon.me',
    source: 'https://redirect.shovon.me/diu-cgpa-github',
  },
  {
    slug: 'typenspeed',
    name: 'Typenspeed',
    description: 'A Django based web app to test your typing speed!',
    image: tns,
    source: 'https://github.com/enigma71/type-n-speed',
  },
  {
    slug: 'registro',
    name: 'Registro',
    description: "A simple web app made with flask for managing student's registration & courses information.",
    image: pyrunner,
    source: 'https://github.com/ajshovon/registro',
  },
  {
    slug: 'pyrunner',
    name: 'pyRunner',
    description: 'A telegram bot to run python codes. By providing a platform for running Python code within Telegram, this bot facilitates quick testing, learning, and experimenting with Python without the need for a separate development environment.',
    image: pyrunner,
    source: 'https://github.com/ajshovon/pyrunner',
  },
];
