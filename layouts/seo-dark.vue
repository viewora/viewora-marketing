<template>
  <div class="seo-dark-layout min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-emerald-500 selection:text-neutral-950">
    <NavBar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.seo-dark-layout {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Outfit', 'Inter', system-ui, sans-serif;
  --accent: #00dc82;
  --accent-glow: rgba(0, 220, 130, 0.25);
  --border-dark: rgba(255, 255, 255, 0.1);
  background-color: #050505;
  color: #f5f5f5;
}

/* Override global styles for dark mode */
:deep(header.nav) {
  background-color: rgba(5, 5, 5, 0.8) !important;
  border-bottom: 1px solid var(--border-dark) !important;
  backdrop-filter: blur(16px) !important;
}

:deep(.nav-link) {
  color: #9ca3af !important;
}

:deep(.nav-link:hover),
:deep(.nav-link.router-link-active) {
  color: #ffffff !important;
}

:deep(.logo) {
  color: #ffffff !important;
}

:deep(footer) {
  background-color: #000000 !important;
  border-top: 1px solid var(--border-dark) !important;
}
</style>
