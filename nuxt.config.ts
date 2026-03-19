import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],

  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    '@nuxt/content',
    ['@nuxtjs/sitemap', {
      hostname: 'https://viewora.software',
      urls: [
        { loc: '/', priority: 1.0, changefreq: 'weekly' },
        { loc: '/product', priority: 0.9, changefreq: 'monthly' },
        { loc: '/pricing', priority: 0.9, changefreq: 'monthly' },
        { loc: '/about', priority: 0.7, changefreq: 'monthly' },
        { loc: '/contact', priority: 0.7, changefreq: 'monthly' },
        { loc: '/blog', priority: 0.8, changefreq: 'weekly' },
      ],
    }],
  ],

  site: {
    url: 'https://viewora.software',
    name: 'Viewora',
    description: 'Create interactive 360° virtual tours for your properties. The subscription-based platform for real estate agents, Airbnb hosts, and property developers.',
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
      ],
      link: [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },
})
