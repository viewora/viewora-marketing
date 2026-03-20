<template>
  <section class="seo-cta py-24 bg-neutral-950 border-y border-white/10 relative overflow-hidden">
    <div class="container relative z-10">
      <div class="cta-card p-12 md:p-20 rounded-3xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 text-center shadow-2xl">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to dominate the <span class="text-emerald-500">Kenyan</span> market?
        </h2>
        <p class="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
          Join the elite Airbnb hosts and real estate agencies in Africa using Viewora to close more deals with immersive 360° technology.
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <NuxtLink to="/register" class="btn btn-primary btn-lg px-12">Start Your Free Tour</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-outline btn-lg px-12">Book a Demo</NuxtLink>
        </div>
        <p class="mt-8 text-sm text-neutral-500 font-mono tracking-widest uppercase">
          Built for Africa • Used by Leaders • Instant Results
        </p>
      </div>
    </div>
    <div class="glow-sphere"></div>
  </section>
</template>

<style scoped>
.seo-cta {
  background: #000000;
}

.cta-card {
  position: relative;
  overflow: hidden;
}

.glow-sphere {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 220, 130, 0.08) 0%, transparent 70%);
  pointer-events: none;
}
</style>
