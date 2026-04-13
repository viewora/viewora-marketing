import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2026-04-13',
  css: ['@/assets/css/main.css'],

  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    '@nuxt/content',
    ['@nuxtjs/sitemap', {
      hostname: 'https://viewora.software',
      exclude: ['/login', '/register', '/reset-password'],
      autoLastmod: true,
    }],
  ],

  site: {
    url: 'https://viewora.software',
    name: 'Viewora',
    description: 'Create interactive 360° virtual tours for your spaces. The subscription-based platform for real estate agents, Airbnb hosts, and space developers.',
    defaultLocale: 'en',
  },

  ogImage: {
    enabled: true,
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Outfit: [600, 700],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    download: true,
  },

  routeRules: {
    '/**': { prerender: true },
  },

  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
  },

  app: {
    head: {
      title: 'Viewora | Immersive 360° Virtual Tour Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Create, host, and share interactive 360° virtual tours in minutes. The professional platform for real estate, hospitality, automotive, and retail spaces.',
        },
        // Default Open Graph — individual pages override with useSeoMeta
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Viewora' },
        { property: 'og:image', content: 'https://viewora.software/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'en_KE' },
        // Default Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@viewora' },
        { name: 'twitter:image', content: 'https://viewora.software/og-image.jpg' },
      ],
      link: [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },
})
