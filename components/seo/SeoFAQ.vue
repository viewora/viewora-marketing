<template>
  <section class="seo-faq py-20 bg-neutral-950 border-t border-white/5">
    <div class="container">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold tracking-tight text-white mb-3">
          {{ heading }}
        </h2>
        <p v-if="subheading" class="text-neutral-400 mb-10 text-lg">{{ subheading }}</p>

        <div class="space-y-3">
          <details
            v-for="(item, i) in faqs"
            :key="i"
            class="group rounded-xl border border-white/8 bg-neutral-900/50 open:border-emerald-500/30 transition-all"
          >
            <summary class="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
              <span class="text-white font-medium text-base leading-snug">{{ item.q }}</span>
              <svg
                class="shrink-0 w-5 h-5 text-neutral-400 group-open:rotate-45 transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </summary>
            <div class="px-6 pb-5 text-neutral-400 text-base leading-relaxed border-t border-white/5 pt-4">
              {{ item.a }}
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  heading?: string
  subheading?: string
  faqs: { q: string; a: string }[]
}>()

const heading = props.heading ?? 'Frequently Asked Questions'

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: props.faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a
          }
        }))
      })
    }
  ]
})
</script>

<style scoped>
details summary::-webkit-details-marker { display: none; }
</style>
