// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ai-charades.net',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en', ar: 'ar', de: 'de', es: 'es', fr: 'fr', hi: 'hi',
          id: 'id', it: 'it', ja: 'ja', ko: 'ko', nl: 'nl', pl: 'pl',
          pt: 'pt', ru: 'ru', sv: 'sv', th: 'th', tr: 'tr', uk: 'uk', zh: 'zh',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en', 'ar', 'de', 'es', 'fr', 'hi', 'id', 'it', 'ja', 'ko',
      'nl', 'pl', 'pt', 'ru', 'sv', 'th', 'tr', 'uk', 'zh',
    ],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
