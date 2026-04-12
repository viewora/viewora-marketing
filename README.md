# viewora-marketing

Public marketing and SEO website for Viewora. Built with **Nuxt 3** in static generation mode, deployed to `viewora.software`. This site has no auth, no API calls, and no connection to the backend — it is a pure content and conversion site.

> **Standalone repo** — separate GitHub repository, deployed independently to **Vercel** as a static site. No shared code with `viewora-app` or `viewora-backend`.


---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Nuxt 3 (static generation via `nuxt generate`) |
| Styling | Tailwind CSS (via `@nuxtjs/tailwindcss`) |
| Content | `@nuxt/content` v2 — Markdown-based blog |
| SEO | `@nuxtjs/seo`, `@nuxtjs/sitemap` |
| Images | `@nuxt/image` |
| Fonts | Inter, Outfit via Google Fonts |
| 3D Effects | `ogl` (WebGL — used in `CircularGallery.client.vue`) |
| Deployment | Vercel (static export) |

---

## Folder Structure

```
viewora-marketing/
├── app.vue                    # Root: NuxtLayout + NuxtPage, global font/scroll setup
├── nuxt.config.ts             # Modules, site metadata, prerender all routes
├── .env.example               # Minimal — only APP_URL needed
│
├── pages/
│   ├── index.vue              # Homepage (29 KB — hero, features, gallery, pricing CTA)
│   ├── pricing.vue            # Pricing page (20 KB — full plan comparison table)
│   ├── product.vue            # Product showcase with embedded CloudPano virtual tour
│   ├── about.vue              # About Viewora
│   ├── company.vue            # Company profile
│   ├── contact.vue            # Contact form (11 KB)
│   ├── faq.vue                # FAQ (13 KB)
│   ├── glossary.vue           # SEO glossary page (12 KB)
│   │
│   │   # Auth redirect stubs (forward to app.viewora.software)
│   ├── login.vue              # Redirect → app.viewora.software/login
│   ├── register.vue           # Redirect → app.viewora.software/register
│   ├── reset-password.vue     # Redirect → app.viewora.software/reset-password
│   │
│   │   # Regional SEO landing pages
│   ├── virtual-tours-kenya.vue
│   ├── virtual-tours-nairobi.vue
│   ├── virtual-tours-mombasa.vue
│   ├── virtual-tours-kisumu.vue
│   ├── virtual-tours-eldoret.vue
│   ├── virtual-tours-nakuru.vue
│   ├── virtual-tours-africa.vue
│   ├── virtual-tours-east-africa.vue
│   │
│   │   # Vertical SEO landing pages
│   ├── airbnb-virtual-tours-kenya.vue
│   ├── real-estate-virtual-tours-kenya.vue
│   ├── hotel-virtual-tours-kenya.vue
│   ├── gym-virtual-tours-kenya.vue
│   ├── school-virtual-tours-kenya.vue
│   ├── hospital-virtual-tours-kenya.vue
│   ├── car-dealership-virtual-tours-kenya.vue
│   ├── tourism-virtual-tours-kenya.vue
│   │
│   │   # Informational SEO pages
│   ├── what-is-a-virtual-tour.vue
│   ├── benefits-of-virtual-tours.vue
│   ├── virtual-tours-vs-photos.vue
│   ├── 360-virtual-tour-software.vue
│   ├── 360-virtual-tour-africa.vue
│   │
│   ├── blog/                  # Blog index (dynamic via @nuxt/content)
│   ├── viewer/                # Viewer demo pages
│   └── legal/                 # Privacy policy, terms, etc.
│
├── components/
│   ├── NavBar.vue             # Site navigation, responsive
│   ├── Footer.vue             # Site footer with links and social
│   ├── AppHero.vue            # Hero section component
│   ├── FeaturesSection.vue    # Features grid
│   ├── CircularGallery.client.vue  # WebGL 360° gallery (client-only, uses ogl)
│   └── seo/                   # SEO helper components (structured data, etc.)
│
├── content/
│   └── blog/                  # 16 Markdown blog posts (Kenyan real estate / virtual tour content)
│       ├── best-airbnb-marketing-strategies-kenya.md
│       ├── how-virtual-tours-increase-airbnb-bookings.md
│       ├── real-estate-trends-kenya-2026.md
│       └── ... (13 more)
│
├── layouts/                   # Nuxt layouts (default with NavBar + Footer)
├── middleware/                 # Route middleware
├── public/                     # Static assets (favicon, OG image, robots.txt, etc.)
└── assets/
    └── css/main.css           # Global styles
```

---

## Content Strategy

### SEO Pages

The site has **34+ pages** purposely structured in three tiers (from `seo-strategy.md`):

| Tier | Examples | Goal |
|---|---|---|
| Regional | `/virtual-tours-nairobi`, `/virtual-tours-mombasa` | Local search dominance |
| Vertical | `/airbnb-virtual-tours-kenya`, `/real-estate-virtual-tours-kenya` | Niche category capture |
| Authority | `/360-virtual-tour-software`, `/360-virtual-tour-africa` | Continental brand positioning |

### Blog

16 articles in `content/blog/` covering Airbnb marketing, real estate trends, virtual tour benefits, and industry-specific guides for Kenya/East Africa. Rendered via `@nuxt/content`.

---

## Key Configuration

### `nuxt.config.ts`

- `routeRules: { '/**': { prerender: true } }` — every page is statically rendered at build time.
- `@nuxtjs/sitemap` configured with `hostname: 'https://viewora.software'`, excluding auth redirects.
- `@nuxt/content` for blog.
- OG image generation enabled (`ogImage.enabled: true`).
- Site locale: `en_KE` (Kenya English).

### Auth Redirect Stubs

`pages/login.vue`, `pages/register.vue`, and `pages/reset-password.vue` exist solely to redirect users to the equivalent routes in `viewora-app` at `app.viewora.software`. They contain no form logic.

---

## Setup & Run

```bash
cp .env.example .env
# APP_URL=https://app.viewora.software (used for login/register redirects)

npm install
npm run dev        # development server (default :3000)
npm run generate   # static export to dist/
```

---

## Deployment

Deployed to **Vercel** as a statically generated site. `vercel.json` handles routing/headers. All routes are prerendered at build time by `nuxt generate`.

---

## Connection to the Rest of Viewora

- **No direct API connection.** This site makes no calls to `viewora-backend`.
- CTAs (Get Started, Start Free Trial) link to `app.viewora.software/register`.
- Login links route to `app.viewora.software/login`.
- Published space links (if used in blog/landing pages) would point to `app.viewora.software/p/[slug]`.
