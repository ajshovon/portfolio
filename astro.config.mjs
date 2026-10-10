// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField, fontProviders } from 'astro/config';

// Read while building, so the analytics settings are baked into the generated HTML.
const buildEnv = () => envField.string({ context: 'server', access: 'public', optional: true });

export default defineConfig({
  site: 'https://shovon.me',
  build: { format: 'file' },
  server: { port: 7000 },
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Red Hat Display',
      cssVariable: '--font-red-hat-display',
      weights: ['300 900'],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Red Hat Text',
      cssVariable: '--font-red-hat-text',
      weights: ['300 700'],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Red Hat Mono',
      cssVariable: '--font-red-hat-mono',
      weights: ['300 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
  ],
  env: {
    schema: {
      GOOGLE_TAG_MANAGER_ENABLED: buildEnv(),
      GOOGLE_TAG_MANAGER_ID: buildEnv(),
      UMAMI_ENABLED: buildEnv(),
      UMAMI_URL: buildEnv(),
      UMAMI_SITE_ID: buildEnv(),
      CLARITY_ENABLED: buildEnv(),
      CLARITY_PROJECT_ID: buildEnv(),
    },
  },
});
