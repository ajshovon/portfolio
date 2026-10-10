import anyflare from '@/assets/images/anyflare.png';
import ask from '@/assets/images/ask.png';
import cgpa from '@/assets/images/cgpa.png';
import dash from '@/assets/images/dash.png';
import dnscrypt from '@/assets/images/dnscrypt-ui.png';
import pbrp from '@/assets/images/PitchBlackRecoveryProject.png';
import pyrunner from '@/assets/images/pyrunner.png';
import routspan from '@/assets/images/routspan.png';
import sms2wallet from '@/assets/images/sms2wallet.png';
import tns from '@/assets/images/tns.svg';

export interface Project {
  slug: string;
  name: string;
  description: string;
  image: ImageMetadata;
  /** How the image sits in the card's frame: filling it, filling it from the top, or as a phone peeking up. Logos and illustrations leave this unset and sit inside it. */
  fit?: 'cover' | 'top' | 'phone';
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
    slug: 'anyflare',
    name: 'Anyflare',
    description: 'Anyflare is a Cloudflare worker proxy which you can deploy yourself to download anything through Cloudflare CDN.',
    image: anyflare,
    fit: 'cover',
    live: 'https://anyflare.mclqwyhxqolr4t.workers.dev',
    source: 'https://github.com/ajshovon/anyflare',
  },
  {
    slug: 'dash',
    name: 'DASH ⚡',
    description: 'DASH (Distributed Address Shortening Hub) is a decentralized application designed to shorten URLs. It leverages Cloudflare network to ensure fast and reliable short links.',
    image: dash,
    fit: 'cover',
    live: 'https://dash-demo.shovon.me/login',
    source: 'https://re.shovon.me/dash-code',
  },
  {
    slug: 'ask',
    name: '.ask',
    description: ".ask is an anonymous question-asking platform similar to NGL, designed to be self-hosted for maximum control and privacy. It leverages Cloudflare's network for fast and reliable performance, ensuring that your platform is always accessible.",
    image: ask,
    fit: 'cover',
    live: 'https://ask.shovon.me',
    source: 'https://re.shovon.me/ask-code',
  },
  {
    slug: 'sms2wallet',
    name: 'SMS2Wallet',
    description: 'Reads Bangladeshi bank and mobile-financial-service transaction SMS on your phone, parses them on-device, and pushes them into Wallet by BudgetBakers through its REST API.',
    image: sms2wallet,
    fit: 'phone',
    source: 'https://github.com/ajshovon/sms2wallet',
  },
  {
    slug: 'routspan',
    name: 'Routspan',
    description: 'An open-source Flutter app to manage pocket / MiFi routers from your phone, replacing the clunky browser admin panel. First target: the OLAX M100.',
    image: routspan,
    fit: 'phone',
    source: 'https://github.com/ajshovon/routspan',
  },
  {
    slug: 'dnscrypt-ui',
    name: 'DNSCrypt UI',
    description: 'A GNOME / Libadwaita interface for dnscrypt-proxy: DNS leak check and one-click fix, resolver picker, split-DNS domain rules, live query log, and safe apply with rollback.',
    image: dnscrypt,
    fit: 'top',
    source: 'https://github.com/ajshovon/dnscrypt-ui',
  },
  {
    slug: 'cgpa-calculator',
    name: 'CGPA Calculator',
    description: 'A Responsive Web Interface for Calculating CGPA or Cumulative Grade Point Average of DIU Students.',
    image: cgpa,
    fit: 'cover',
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
