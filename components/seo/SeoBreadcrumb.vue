<template>
  <nav aria-label="Breadcrumb" class="breadcrumb-nav">
    <div class="container">
      <ol class="breadcrumb-list">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
          <span aria-hidden="true"> › </span>
        </li>
        <li v-for="(crumb, i) in crumbs" :key="i">
          <NuxtLink v-if="i < crumbs.length - 1" :to="crumb.url">{{ crumb.name }}</NuxtLink>
          <span v-else aria-current="page">{{ crumb.name }}</span>
          <span v-if="i < crumbs.length - 1" aria-hidden="true"> › </span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  crumbs: { name: string; url: string }[]
}>()

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://viewora.software' },
          ...props.crumbs.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: c.name,
            item: `https://viewora.software${c.url}`
          }))
        ]
      })
    }
  ]
})
</script>

<style scoped>
.breadcrumb-nav {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: #0a0a0a;
}
.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: #6b7280;
  font-family: var(--font-mono, monospace);
}
.breadcrumb-list a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.15s;
}
.breadcrumb-list a:hover {
  color: #00dc82;
}
.breadcrumb-list [aria-current="page"] {
  color: #ffffff;
}
</style>
