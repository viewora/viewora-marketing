<template>
  <section class="seo-faq-section">
    <div class="container" style="max-width: 800px;">
      <h2 class="seo-faq-heading">{{ heading }}</h2>
      <p v-if="subheading" class="seo-faq-subheading">{{ subheading }}</p>

      <div class="seo-faq-list">
        <details v-for="(item, i) in faqs" :key="i" class="faq-item">
          <summary class="faq-summary">{{ item.q }}</summary>
          <div class="faq-answer" v-html="item.a" />
        </details>
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
            text: f.a.replace(/<[^>]+>/g, '')
          }
        }))
      })
    }
  ]
})
</script>

<style scoped>
.seo-faq-section {
  padding: 4rem 0;
}

.seo-faq-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.seo-faq-subheading {
  font-size: 0.9375rem;
  color: var(--slate);
  margin-bottom: 1.5rem;
}

.seo-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.faq-item {
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  background: var(--paper);
  box-shadow: var(--shadow-float);
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.faq-item:hover {
  box-shadow: var(--shadow-lift);
  border-color: var(--border-sharp);
  transform: translateY(-2px);
}

.faq-item[open] {
  border-color: var(--primary);
  box-shadow: var(--shadow-lift);
}

.faq-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  font-weight: 700;
  color: var(--ink);
  list-style: none;
  user-select: none;
}

.faq-summary::-webkit-details-marker { display: none; }

.faq-summary::after {
  content: '+';
  font-size: 1.25rem;
  color: var(--primary);
  flex-shrink: 0;
  margin-left: 1rem;
  transition: transform 0.2s;
}

.faq-item[open] .faq-summary::after {
  transform: rotate(45deg);
}

.faq-answer {
  padding: 1rem 1.5rem 1.25rem;
  color: var(--slate);
  line-height: 1.7;
  border-top: 1px solid var(--border);
}
</style>
