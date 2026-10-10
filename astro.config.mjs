// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';

// Read while building, so the analytics settings are baked into the generated HTML.
const buildEnv = () => envField.string({ context: 'server', access: 'public', optional: true });

export default defineConfig({
  site: 'https://shovon.me',
  build: { format: 'file' },
  server: { port: 7000 },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
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
