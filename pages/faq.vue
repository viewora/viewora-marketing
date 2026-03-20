<template>
  <div>
    <SeoHero
      title="Virtual Tour FAQ | All Your Questions Answered"
      subtitle="Everything you need to know about 360° virtual tours, Viewora's platform, pricing in Kenya, and how to get started. Answered clearly and completely."
      badge="Help Center"
    />

    <div class="py-16 bg-neutral-950">
      <div class="container">
        <div class="max-w-3xl mx-auto space-y-16">

          <!-- General -->
          <section>
            <h2 class="text-2xl font-bold text-white mb-6 pb-3 border-b border-white/10">General Questions</h2>
            <div class="space-y-3">
              <details v-for="(item, i) in general" :key="i" class="group rounded-xl border border-white/8 bg-neutral-900/50 open:border-emerald-500/30">
                <summary class="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span class="text-white font-medium">{{ item.q }}</span>
                  <svg class="shrink-0 w-5 h-5 text-neutral-400 group-open:rotate-45 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </summary>
                <div class="px-6 pb-5 text-neutral-400 leading-relaxed border-t border-white/5 pt-4" v-html="item.a"></div>
              </details>
            </div>
          </section>

          <!-- Pricing -->
          <section>
            <h2 class="text-2xl font-bold text-white mb-6 pb-3 border-b border-white/10">Pricing & Plans</h2>
            <div class="space-y-3">
              <details v-for="(item, i) in pricing" :key="i" class="group rounded-xl border border-white/8 bg-neutral-900/50 open:border-emerald-500/30">
                <summary class="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span class="text-white font-medium">{{ item.q }}</span>
                  <svg class="shrink-0 w-5 h-5 text-neutral-400 group-open:rotate-45 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </summary>
                <div class="px-6 pb-5 text-neutral-400 leading-relaxed border-t border-white/5 pt-4" v-html="item.a"></div>
              </details>
            </div>
          </section>

          <!-- Technical -->
          <section>
            <h2 class="text-2xl font-bold text-white mb-6 pb-3 border-b border-white/10">Technical Questions</h2>
            <div class="space-y-3">
              <details v-for="(item, i) in technical" :key="i" class="group rounded-xl border border-white/8 bg-neutral-900/50 open:border-emerald-500/30">
                <summary class="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span class="text-white font-medium">{{ item.q }}</span>
                  <svg class="shrink-0 w-5 h-5 text-neutral-400 group-open:rotate-45 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </summary>
                <div class="px-6 pb-5 text-neutral-400 leading-relaxed border-t border-white/5 pt-4" v-html="item.a"></div>
              </details>
            </div>
          </section>

          <!-- Industries -->
          <section>
            <h2 class="text-2xl font-bold text-white mb-6 pb-3 border-b border-white/10">Industry-Specific Questions</h2>
            <div class="space-y-3">
              <details v-for="(item, i) in industries" :key="i" class="group rounded-xl border border-white/8 bg-neutral-900/50 open:border-emerald-500/30">
                <summary class="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span class="text-white font-medium">{{ item.q }}</span>
                  <svg class="shrink-0 w-5 h-5 text-neutral-400 group-open:rotate-45 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </summary>
                <div class="px-6 pb-5 text-neutral-400 leading-relaxed border-t border-white/5 pt-4" v-html="item.a"></div>
              </details>
            </div>
          </section>

          <!-- Still need help -->
          <div class="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
            <h3 class="text-xl font-bold text-white mb-2">Still have questions?</h3>
            <p class="text-neutral-400 mb-6">Our team is based in Nairobi and happy to help with anything not covered here.</p>
            <NuxtLink to="/contact" class="btn btn-primary">Contact Us →</NuxtLink>
          </div>

        </div>
      </div>
    </div>

    <SeoCTA />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'seo-dark'
})

useSeoMeta({
  title: 'Virtual Tour FAQ Kenya | All Questions Answered | Viewora',
  description: 'Complete FAQ for Viewora\'s 360° virtual tour platform in Kenya. Answers on pricing in KES, how it works, mobile support, industries, and getting started. Built for Kenya and Africa.',
  ogTitle: 'Virtual Tour FAQ | Everything You Need to Know | Viewora Kenya',
  ogDescription: 'Every question about virtual tours in Kenya answered. Pricing, features, industries, technical requirements, and more.',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://viewora.software/faq' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          ...general.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
          ...pricing.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
          ...technical.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
          ...industries.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
        ]
      })
    }
  ]
})

const general = [
  { q: 'What is Viewora?', a: 'Viewora is a Kenya-based SaaS platform that lets you create, host, and share professional 360° interactive virtual tours. It is the leading virtual tour platform in East Africa, serving real estate agents, Airbnb hosts, hotels, car dealerships, schools, gyms, hospitals, and tourism operators.' },
  { q: 'What is a 360° virtual tour?', a: 'A 360° virtual tour is an immersive, interactive walkthrough of a real physical space. Viewers can look in every direction, navigate between rooms, and zoom into details — all from their smartphone, tablet, or computer. Unlike a video, viewers control where they look and where they go.' },
  { q: 'Is Viewora built specifically for Kenya?', a: 'Yes. Viewora is founded in Nairobi and built for the African market. Tours are optimized for Safaricom, Airtel, and Telkom mobile networks, pricing is in Kenyan Shillings (KES), and the platform is designed for the specific needs of Kenyan real estate, hospitality, and business sectors.' },
  { q: 'How long does it take to create a virtual tour?', a: 'You can have your first virtual tour live within minutes of uploading your 360° images. The capture (photography) process typically takes 1–3 hours depending on the size of your space. Viewora\'s editor allows you to connect rooms and publish immediately after upload.' },
  { q: 'Do viewers need to download an app to view my tour?', a: 'No. Viewora tours are entirely web-based. Anyone you share the link with can view your tour instantly in their mobile browser or on any computer — no app download, no account required.' },
]

const pricing = [
  { q: 'How much does Viewora cost in Kenya?', a: 'Viewora has a free plan that allows you to create and publish tours at no cost. Paid plans start at KES 1,500/month and go up to KES 18,000/month for enterprise. All plans are billed in Kenyan Shillings via Paystack. Visit our <a href="/pricing" style="color:#00dc82">pricing page</a> for current rates.' },
  { q: 'Is there a free trial?', a: 'Viewora offers a permanent free plan — not just a trial. You can create tours, publish them, and share them at no cost. The free plan has a limit on the number of active spaces. Upgrade when you need more capacity.' },
  { q: 'Can I pay monthly or yearly?', a: 'Yes. Viewora offers both monthly and yearly billing. Yearly plans include approximately 20% savings compared to monthly billing. Payments are processed securely by Paystack in KES.' },
  { q: 'What payment methods are accepted?', a: 'Viewora accepts M-Pesa, Visa, Mastercard, and other cards through Paystack. M-Pesa support makes it easy for Kenyan businesses to subscribe and pay locally without the need for a credit card.' },
  { q: 'Can I cancel my subscription anytime?', a: 'Yes. Viewora subscriptions can be cancelled at any time from your billing settings. You will retain access to your plan features until the end of your current billing period. No long-term contracts or cancellation fees.' },
]

const technical = [
  { q: 'What cameras can I use with Viewora?', a: 'Viewora is compatible with any 360° camera that produces equirectangular panoramic images. Popular compatible cameras include Ricoh Theta, Insta360, GoPro MAX, and Samsung Gear 360. You can also use Viewora\'s mobile capture feature on supported smartphones.' },
  { q: 'Does Viewora work on mobile phones in Kenya?', a: 'Yes. Viewora is built mobile-first. Tours load fast on 3G and 4G connections and support full gyroscope navigation on iOS and Android devices. Your viewers can experience immersive 360° tours directly in their mobile browser without any app installation.' },
  { q: 'Can I embed my virtual tour on my website?', a: 'Yes. Every Viewora tour comes with an embed code that you can paste into any website, property listing page, or landing page. Tours are also shareable via direct link for WhatsApp, email, and social media.' },
  { q: 'What image resolution does Viewora support?', a: 'Viewora supports high-resolution panoramic uploads up to 8K resolution. This ensures that every detail of your space is crystal clear when zoomed in — tiles, fixtures, finishes, and features remain sharp at any magnification level.' },
  { q: 'Can I add information and labels to my virtual tour?', a: 'Yes. Viewora\'s editor allows you to add interactive hotspots anywhere in your tour. Hotspots can display text, images, prices, links to floor plans, contact forms, and more — turning your tour into a full marketing asset.' },
]

const industries = [
  { q: 'How do real estate agents in Kenya use virtual tours?', a: 'Kenyan real estate agents use Viewora to give buyers and renters a full property inspection remotely. This pre-qualifies enquiries, eliminates wasted site visits, reaches diaspora buyers, and significantly reduces the average time-to-sale. See our <a href="/real-estate-virtual-tours-kenya" style="color:#00dc82">real estate virtual tours</a> page.' },
  { q: 'Can Airbnb hosts in Kenya add a virtual tour to their listing?', a: 'Yes. Airbnb hosts share their Viewora tour link in their listing description or send it directly to enquiring guests on WhatsApp. Hosts in Nairobi, Mombasa, and Diani consistently report more bookings and fewer negative reviews after implementing virtual tours.' },
  { q: 'Do hotels in Kenya use virtual tours to get more direct bookings?', a: 'Yes. Hotels use Viewora tours on their own website to reduce OTA dependency and drive direct bookings. When a guest has already toured the property virtually on the hotel\'s website, they book directly — saving the hotel 15–25% in OTA commission fees.' },
  { q: 'Can car dealerships in Kenya use virtual tours to sell more cars?', a: 'Yes. Viewora\'s virtual showroom tours let car buyers inspect every vehicle in 360° detail from their phone. Dealerships in Nairobi report significantly higher conversion rates from physical viewings after buyers have toured vehicles virtually first.' },
  { q: 'Are virtual tours useful for schools and universities in Kenya?', a: 'Very much so. Kenyan schools use Viewora campus tours on their admissions pages to attract students from upcountry, the diaspora, and across East Africa. Families that can tour the campus virtually convert to formal applications at a much higher rate than those who only see photos.' },
]
</script>

<style scoped>
details summary::-webkit-details-marker { display: none; }
</style>
