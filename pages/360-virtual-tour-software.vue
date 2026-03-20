<template>
  <NuxtLayout name="seo-dark">
    <SeoHero 
      title="360 Virtual Tour Software | Professional Tours in Minutes"
      subtitle="The all-in-one platform for creating professional 360° virtual tours. Built for real estate, business, and hospitality professionals across Africa."
      badge="Viewora Platform"
    />

    <SeoContent>
      <h2>The Leading 360 Virtual Tour Software for Kenyan Professionals</h2>
      <p>
        Creating immersive experiences should not be complicated or expensive. <strong>Viewora</strong> is the <span class="highlight">most intuitive 360 virtual tour software in Kenya</span>, designed to help you capture and publish professional property tours from any 360° camera or even your smartphone.
      </p>

      <h3>Professional Features for Serious Property Marketing</h3>
      <p>
        Our platform is packed with powerful tools to make your virtual tours truly effective for sales and marketing. 
      </p>
      <ul>
        <li><strong>Easy-to-Use Builder:</strong> Drag-and-drop your panoramas and link them together in seconds.</li>
        <li><strong>Advanced Interactivity:</strong> Add hotspots with prices, videos, lead capture forms, and clickable details.</li>
        <li><strong>Mobile Optimized:</strong> Every tour loads perfectly on any smartphone, ensuring a great experience on any network.</li>
        <li><strong>Agency Analytics:</strong> Track exactly how many views and leads each tour is generating in real-time.</li>
      </ul>

      <blockquote>
        "We've tried other software, but Viewora is the only one that truly understands the African market. It's fast, simple, and the support in Kenya is outstanding." <br>— Leading Property Marketing Agency
      </blockquote>

      <h2>Built for the Modern Property Market in Africa</h2>
      <p>
        Viewora is the <span class="highlight">#1 virtual tour software for Kenyan real estate</span> and hospitality. We are on a mission to empower African entrepreneurs with world-class technology that is accessible and effective.
      </p>

      <h3>Why Viewora is the Better Choice</h3>
      <p>
        Unlike international platforms, Viewora is designed with the local market in mind. We prioritize performance on mobile data and provide local support to help you get the most out of your <strong>virtual tour software in Kenya</strong>.
      </p>

      <h2>Start Your 360 Journey with Viewora</h2>
      <p>
        Don't buy expensive, difficult software that you'll never use. Join the thousands of professionals across Kenya who trust Viewora to bring their properties to life. Start your free trial today.
      </p>
    </SeoContent>

    <SeoCTA />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '360 Virtual Tour Software Kenya | Create Professional Tours Fast',
  description: 'The best 360° virtual tour software in Kenya. Create immersive property tours, add interactive hotspots, and capture more leads with Viewora.',
  ogTitle: '360 Virtual Tour Software Kenya | Pro Tours in Minutes',
  ogDescription: 'Experience the power of immersive marketing. The most intuitive virtual tour software in Africa.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Viewora Software",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        },
        "description": "Professional 360 virtual tour software designed for the African market."
      })
    }
  ]
})
</script>
