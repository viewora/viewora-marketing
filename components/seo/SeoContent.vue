<template>
  <section class="section">
    <div class="container">
      <div class="seo-content card" style="max-width: 860px; margin: 0 auto; padding: 3rem;">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.seo-content :deep(h2) {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin: 3rem 0 1rem;
  color: var(--ink);
}

.seo-content :deep(h2:first-child) {
  margin-top: 0;
}

.seo-content :deep(h3) {
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 2.5rem 0 0.875rem;
  color: var(--ink);
}

.seo-content :deep(p) {
  font-size: 1.0625rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--slate);
}

.seo-content :deep(ul),
.seo-content :deep(ol) {
  margin: 0.5rem 0 1.75rem 1.25rem;
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--slate);
}

.seo-content :deep(li) {
  margin-bottom: 0.625rem;
}

.seo-content :deep(strong) {
  color: var(--ink);
  font-weight: 700;
}

.seo-content :deep(.highlight) {
  color: var(--primary);
  font-weight: 600;
}

.seo-content :deep(a.highlight) {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.seo-content :deep(blockquote) {
  background: var(--accent-dim);
  border-left: 4px solid var(--primary);
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 1.5rem 2rem;
  margin: 2.5rem 0;
  font-style: italic;
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--slate);
}
</style>
