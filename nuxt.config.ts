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
      exclude: ['/login', '/register', '/reset-password', '/viewer/gallery'],
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
    '/features': { redirect: { to: '/product', statusCode: 301 } },
    '/real-estate-virtual-tours': { redirect: { to: '/real-estate-virtual-tours-kenya', statusCode: 301 } },
    '/hotel-virtual-tours': { redirect: { to: '/hotel-virtual-tours-kenya', statusCode: 301 } },
    '/airbnb-virtual-tours': { redirect: { to: '/airbnb-virtual-tours-kenya', statusCode: 301 } },
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
        // Light mode: black 360° icon on transparent background
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-light.ico', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-light-32.png', media: '(prefers-color-scheme: light)' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon-light-512.png', media: '(prefers-color-scheme: light)' },
        // Dark mode: white globe icon on transparent background
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-dark.ico', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-dark-32.png', media: '(prefers-color-scheme: dark)' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon-dark-512.png', media: '(prefers-color-scheme: dark)' },
        // Fallback (no preference)
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-light.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-light-180.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },
})
