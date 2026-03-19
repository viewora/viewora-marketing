<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Viewora | Immersive 360° Virtual Tour Platform',
  ogTitle: 'Viewora | Immersive 360° Virtual Tour Platform',
  description: 'Create, host, and share interactive 360° virtual tours in minutes. The professional platform for real estate, hospitality, automotive, and retail spaces.',
  ogDescription: 'Create, host, and share interactive 360° virtual tours in minutes.',
  ogType: 'website',
  ogUrl: 'https://viewora.software',
  ogSiteName: 'Viewora',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineOrganization({
    name: 'Viewora',
    url: 'https://viewora.software',
    logo: 'https://viewora.software/icon.png',
  }),
  defineWebSite({
    name: 'Viewora',
    url: 'https://viewora.software',
  }),
])
</script>
