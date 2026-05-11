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

const pageNames: Record<string, string> = {
  'virtual-tours-kenya': 'Virtual Tours Kenya',
  'virtual-tours-nairobi': 'Virtual Tours Nairobi',
  'virtual-tours-mombasa': 'Virtual Tours Mombasa',
  'virtual-tours-kisumu': 'Virtual Tours Kisumu',
  'virtual-tours-nakuru': 'Virtual Tours Nakuru',
  'virtual-tours-eldoret': 'Virtual Tours Eldoret',
  'virtual-tours-africa': 'Virtual Tours Africa',
  'virtual-tours-east-africa': 'Virtual Tours East Africa',
  'virtual-tours-vs-photos': 'Virtual Tours vs Photos',
  'real-estate-virtual-tours-kenya': 'Real Estate Virtual Tours Kenya',
  'hotel-virtual-tours-kenya': 'Hotel Virtual Tours Kenya',
  'airbnb-virtual-tours-kenya': 'Airbnb Virtual Tours Kenya',
  'car-dealership-virtual-tours-kenya': 'Car Dealership Virtual Tours Kenya',
  'hospital-virtual-tours-kenya': 'Hospital Virtual Tours Kenya',
  'school-virtual-tours-kenya': 'School Virtual Tours Kenya',
  'gym-virtual-tours-kenya': 'Gym Virtual Tours Kenya',
  'tourism-virtual-tours-kenya': 'Tourism Virtual Tours Kenya',
  '360-virtual-tour-software': '360° Virtual Tour Software',
  '360-virtual-tour-africa': '360° Virtual Tours Africa',
  'what-is-a-virtual-tour': 'What Is a Virtual Tour',
  'benefits-of-virtual-tours': 'Benefits of Virtual Tours',
  'pricing': 'Pricing',
  'product': 'Product',
  'about': 'About',
  'contact': 'Contact',
  'blog': 'Blog & Resources',
  'faq': 'FAQ',
  'company': 'Company',
  'glossary': 'Glossary',
  'privacy': 'Privacy Policy',
  'terms': 'Terms of Service',
  'refund': 'Refund Policy',
}

const slugToName = (slug: string) =>
  pageNames[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())

const isHome = route.path === '/'
const isBlogPost = route.path.startsWith('/blog/') && route.path !== '/blog'

const headScripts: object[] = [
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

if (!isHome && !isBlogPost) {
  const segments = route.path.split('/').filter(Boolean)
  const items: object[] = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl }
  ]
  if (segments.length === 1) {
    items.push({ '@type': 'ListItem', position: 2, name: slugToName(segments[0]), item: `${baseUrl}${route.path}` })
  } else if (segments.length >= 2) {
    items.push({ '@type': 'ListItem', position: 2, name: slugToName(segments[0]), item: `${baseUrl}/${segments[0]}` })
    items.push({ '@type': 'ListItem', position: 3, name: slugToName(segments[1]), item: `${baseUrl}${route.path}` })
  }
  headScripts.push({
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items
    })
  })
}

useHead({
  link: [{ rel: 'canonical', href: `${baseUrl}${route.path}` }],
  script: headScripts
})
</script>
