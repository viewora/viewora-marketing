<template>
  <div class="flex min-h-screen flex-col" style="display: flex; flex-direction: column; min-height: 100vh;">
    <NavBar />
    <main style="flex: 1;">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const baseUrl = 'https://viewora.software'

useHead({
  link: [
    { rel: 'canonical', href: `${baseUrl}${route.path}` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Viewora',
        url: baseUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/blog?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SiteNavigationElement',
        name: [
          'Product', 'Pricing', 'Blog', 'About', 'Contact',
          'Virtual Tours Kenya', 'Real Estate Virtual Tours', 'FAQ'
        ],
        url: [
          `${baseUrl}/product`,
          `${baseUrl}/pricing`,
          `${baseUrl}/blog`,
          `${baseUrl}/about`,
          `${baseUrl}/contact`,
          `${baseUrl}/virtual-tours-kenya`,
          `${baseUrl}/real-estate-virtual-tours-kenya`,
          `${baseUrl}/faq`
        ]
      })
    }
  ]
})
</script>
