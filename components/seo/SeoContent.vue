<template>
  <div class="seo-content py-20">
    <div class="container">
      <div class="max-w-4xl mx-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.seo-content :deep(h2) {
  font-family: var(--font-display, 'Outfit', sans-serif);
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 4rem 0 1.5rem;
  color: #ffffff;
}

.seo-content :deep(h3) {
  font-family: var(--font-display, 'Outfit', sans-serif);
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 3rem 0 1.25rem;
  color: #ffffff;
}

.seo-content :deep(p) {
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #9ca3af;
}

.seo-content :deep(ul), .seo-content :deep(ol) {
  margin: 1.5rem 0 2rem 1.5rem;
  color: #9ca3af;
  font-size: 1.125rem;
}

.seo-content :deep(li) {
  margin-bottom: 0.75rem;
}

.seo-content :deep(strong) {
  color: #ffffff;
}

.seo-content :deep(.highlight) {
  color: #00dc82;
  font-weight: 600;
}

.seo-content :deep(blockquote) {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 4px solid #00dc82;
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 3rem 0;
  font-style: italic;
  font-size: 1.25rem;
  color: #e5e7eb;
}
</style>
