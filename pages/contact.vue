<template>
  <div>
    <SeoHero 
      title="Contact Viewora | Africa’s PropTech Support Team"
      subtitle="Have questions about 360 virtual tours? Our team in Nairobi is ready to help you transform your property marketing today."
      badge="Get In Touch"
    />

    <SeoContent>
      <h2>We’re Here to Support Your Growth</h2>
      <p>
        Whether you are a real estate agent in Nairobi, an Airbnb host in Mombasa, or a property developer in Lagos, <strong>Viewora</strong> is your partner in immersive marketing. We provide the world-class <NuxtLink to="/virtual-tours-kenya" class="highlight">#1 virtual tour software in Kenya</NuxtLink>, backed by a team that understands the local African market.
      </p>

      <h2>1. Get a Demo of the Viewora Platform</h2>
      <p>
        Want to see how easy it is to create a professional 360° tour? Contact us today for a personalized walkthrough of the platform. We'll show you how to dominate <span class="highlight">real estate marketing in Kenya</span> with the latest immersive technology.
      </p>

      <h2>2. Support for Existing Users</h2>
      <p>
        Already a member of the Viewora community? Our support team is available to help you with anything from camera setup to <strong>360 property marketing</strong> strategies across Africa. 
      </p>

      <h3>How to Reach Us:</h3>
      <ul>
        <li><strong>Email:</strong> support@viewora.software</li>
        <li><strong>Nairobi Office:</strong> Westlands, Nairobi, Kenya.</li>
        <li><strong>Social Support:</strong> Reach out via WhatsApp or Instagram for quick tips on <span class="highlight">virtual tours in Kenya</span>.</li>
      </ul>

      <blockquote>
        "Our mission is to be the most responsive and helpful PropTech company on the continent. Your success is our success." <br>— Viewora Support Team
      </blockquote>

      <h2>3. Partnership and Press Enquiries</h2>
      <p>
        Interested in partnering with Viewora to bring immersive tech to more African markets? We are always looking for innovative collaborators in <strong>property technology in Africa</strong>. Contact our business development team today.
      </p>

      <h2>Start Your Immersive Journey Today</h2>
      <p>
        Don't let your properties sit in the digital dark. Contact Viewora and bring your Kenyan listings to life with the most powerful virtual tour technology in Africa.
      </p>
    </SeoContent>

    <SeoCTA />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'seo-dark'
})

useSeoMeta({
  title: 'Contact Viewora | #1 360° Virtual Tour Support Kenya',
  description: 'Connect with Viewora, Africa’s leading PropTech team. Get support, book a demo, or partner with us to transform your property marketing in Nairobi and beyond.',
  ogTitle: 'Contact Viewora | Immersive Property Marketing Support',
  ogDescription: 'Reach out to the #1 virtual tour software team in Africa. Built for Kenya.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Viewora Contact",
        "description": "The official contact page for Viewora, providing support and demos for our 360 virtual tour platform in Africa."
      })
    }
  ]
})
</script>