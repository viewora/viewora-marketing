<template>
  <div>
    <SeoHero 
      title="About Viewora: Leading the African PropTech Revolution"
      subtitle="Discover the mission, vision, and people behind the #1 immersive property marketing platform in Kenya and across Africa."
      badge="Our Story"
    />

    <SeoContent>
      <h2>Our Mission: Empowering Africa’s Property Professionals</h2>
      <p>
        At <strong>Viewora</strong>, we believe that world-class technology should be accessible to every entrepreneur on the African continent. Our journey started with a simple observation: the real estate and hospitality markets in Africa were being held back by a lack of trust and transparency. We set out to bridge that gap with the <NuxtLink to="/virtual-tours-kenya" class="highlight">best virtual tour software in Africa</NuxtLink>.
      </p>

      <h2>1. Born in Kenya, Built for Africa</h2>
      <p>
        Viewora was born out of the vibrant tech ecosystem in Nairobi. We've designed our platform from the ground up to solve the specific challenges of the African property market—from high-performance mobile data optimization to intuitive, easy-to-use interfaces that work for every real estate professional.
      </p>

      <h2>2. Why Trust and Transparency Matter</h2>
      <p>
        Trust is the most valuable currency in property. Whether it's an Airbnb host in Mombasa or a developer with a new project in Westlands, our 360° tours provide an unedited, honest view that builds immediate credibility. We are committed to fostering a more transparent and efficient <strong>real estate market in Kenya</strong>. 
      </p>

      <h3>What We Stand For:</h3>
      <ul>
        <li><strong>Innovation with Purpose:</strong> We don't just build features; we build solutions that help African businesses grow.</li>
        <li><strong>Accessible Professionalism:</strong> World-class immersive tools should be available to everyone, from solo agents to large firms.</li>
        <li><strong>Local Focus, Global Standards:</strong> We've built an <span class="highlight">#1 virtual tour software in Kenya</span> that meets and exceeds international property tech standards.</li>
      </ul>

      <blockquote>
        "Viewora isn't just a tool; it's a movement to bring African property to the world stage. We want every investor in the diaspora to feel as close to their Kenyan home as if they were standing right there."
      </blockquote>

      <h2>3. Scaling the Future of PropTech in Africa</h2>
      <p>
        Our vision is to be the foundation for <strong>property marketing across the African continent</strong>. We are constantly innovating, bringing new features like advanced analytics, lead generation, and interactive floor plans to our community of thousands of agents and hosts. 
      </p>

      <h2>4. Join Our Growing Community</h2>
      <p>
        Join the most innovative property professionals in Kenya who are using Viewora to dominate search results and win more deals. Get started today and see why we are the trusted partner for <NuxtLink to="/virtual-tours-kenya" class="highlight">360 property marketing</NuxtLink> across East Africa.
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
  title: 'About Viewora | #1 360° Virtual Tour Software for Africa',
  description: 'Learn about the mission and vision of Viewora, the leading PropTech platform in Kenya. Discover how we are transforming real estate and Airbnb marketing across Africa.',
  ogTitle: 'About Viewora | Leading the African PropTech Revolution',
  ogDescription: 'Experience the mission behind the #1 virtual tour software in Africa.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Viewora",
        "url": "https://viewora.software",
        "logo": "https://viewora.software/logo.png",
        "foundingDate": "2024",
        "foundingLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
          }
        },
        "description": "Viewora is the leading 360° virtual tour platform in Kenya and East Africa. We empower real estate agents, Airbnb hosts, hotels, schools, gyms, hospitals, car dealerships, and tourism operators to market their spaces with immersive technology.",
        "knowsAbout": [
          "360 virtual tours", "property marketing Kenya", "real estate virtual tours Africa",
          "Airbnb virtual tour marketing", "hotel virtual tours Kenya",
          "virtual tour software East Africa", "PropTech Africa"
        ],
        "areaServed": [
          { "@type": "Country", "name": "Kenya" },
          { "@type": "Country", "name": "Uganda" },
          { "@type": "Country", "name": "Tanzania" },
          { "@type": "Country", "name": "Rwanda" },
          { "@type": "Country", "name": "Nigeria" },
          { "@type": "Country", "name": "South Africa" }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "url": "https://viewora.software/contact",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://twitter.com/viewora",
          "https://www.facebook.com/viewora",
          "https://www.linkedin.com/company/viewora",
          "https://www.instagram.com/viewora"
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Viewora",
        "description": "Kenya's leading 360° virtual tour platform for real estate, hospitality, automotive, education, healthcare, and tourism.",
        "url": "https://viewora.software",
        "logo": "https://viewora.software/logo.png",
        "image": "https://viewora.software/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nairobi",
          "addressCountry": "KE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-1.2921",
          "longitude": "36.8219"
        },
        "priceRange": "KES 0 - KES 18,000/month",
        "currenciesAccepted": "KES",
        "paymentAccepted": "M-Pesa, Visa, Mastercard",
        "openingHours": "Mo-Fr 08:00-18:00",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": { "@type": "GeoCoordinates", "latitude": "-1.2921", "longitude": "36.8219" },
          "geoRadius": "5000000"
        },
        "sameAs": [
          "https://twitter.com/viewora",
          "https://www.facebook.com/viewora",
          "https://www.linkedin.com/company/viewora"
        ]
      })
    }
  ]
})
</script>
