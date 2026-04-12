# PROJECT_CONTEXT.md — viewora-marketing

Single source of truth for AI assistants and developers working in this repo. Updated April 2026.

---

## What This Repo Is

The public marketing and SEO website for Viewora. Static site — no auth, no backend API calls, no Supabase. Pure content and conversion.

- **GitHub repo**: `viewora-marketing` (standalone, separate from app and backend)
- **Deployed to**: Vercel → `viewora.software`
- **Framework**: Nuxt 3 with `nuxt generate` (full static export)
- **Blog**: `@nuxt/content` v2 — Markdown files in `content/blog/`

---

## The Full Viewora System (for context)

Viewora is three independent repos. This repo is one of them.

| Repo | URL | Platform | Purpose |
|---|---|---|---|
| `viewora-app` | `app.viewora.software` | Vercel | Auth dashboard + public space viewer |
| `viewora-backend` | `api.viewora.software` | Railway | Fastify REST API — all business logic |
| **viewora-marketing** (this repo) | `viewora.software` | Vercel | Public marketing + SEO site |

**This repo has no connection to the backend or Supabase.** It is a standalone static site. The only "integration" is hyperlinks — CTAs that point to `app.viewora.software`.

---

## Site Goals

1. **SEO dominance** in Kenya and East Africa for 360° virtual tour keywords.
2. **Convert visitors** to sign up at `app.viewora.software/register`.
3. **Educate the market** via blog and informational pages.

---

## Page Architecture

### Core Pages
| Page | File | Notes |
|---|---|---|
| Homepage | `pages/index.vue` | 30 KB — hero, features, gallery, pricing CTA |
| Pricing | `pages/pricing.vue` | Full plan comparison table |
| Product | `pages/product.vue` | CloudPano virtual tour embed |
| About | `pages/about.vue` | — |
| Company | `pages/company.vue` | — |
| Contact | `pages/contact.vue` | Contact form |
| FAQ | `pages/faq.vue` | — |
| Glossary | `pages/glossary.vue` | SEO glossary |

### Auth Redirect Stubs
`pages/login.vue`, `pages/register.vue`, `pages/reset-password.vue` — these pages **only redirect** to the equivalent route on `app.viewora.software`. They contain no form logic or auth.

### SEO Landing Pages (32 pages total)

Three-tier SEO strategy:

| Tier | Pages | Goal |
|---|---|---|
| Regional | `/virtual-tours-kenya`, `/virtual-tours-nairobi`, `/virtual-tours-mombasa`, `/virtual-tours-kisumu`, `/virtual-tours-eldoret`, `/virtual-tours-nakuru`, `/virtual-tours-africa`, `/virtual-tours-east-africa` | Capture location-based search |
| Vertical | `/airbnb-virtual-tours-kenya`, `/real-estate-virtual-tours-kenya`, `/hotel-virtual-tours-kenya`, `/gym-virtual-tours-kenya`, `/school-virtual-tours-kenya`, `/hospital-virtual-tours-kenya`, `/car-dealership-virtual-tours-kenya`, `/tourism-virtual-tours-kenya` | Niche industry capture |
| Informational | `/what-is-a-virtual-tour`, `/benefits-of-virtual-tours`, `/virtual-tours-vs-photos`, `/360-virtual-tour-software`, `/360-virtual-tour-africa` | Authority / top-of-funnel |

### Blog

16 Markdown articles in `content/blog/`. Rendered via `@nuxt/content`. Topics: Airbnb marketing, real estate, virtual tour benefits, industry guides for Kenya/East Africa. See `seo-strategy.md` in the repo root for the full strategy document.

---

## Key Components

| Component | Notes |
|---|---|
| `NavBar.vue` | Site navigation, responsive |
| `Footer.vue` | Footer with links and social |
| `AppHero.vue` | Hero section |
| `FeaturesSection.vue` | Features grid |
| `CircularGallery.client.vue` | WebGL 360° gallery using `ogl`. **Client-only** — do not SSR this. |

---

## Key Configuration

### `nuxt.config.ts`
- `routeRules: { '/**': { prerender: true } }` — every route is statically rendered.
- `@nuxtjs/sitemap` hostname: `https://viewora.software`. Excludes `/login`, `/register`, `/reset-password`.
- OG image generation enabled.
- Site locale: `en_KE`.
- No `@nuxtjs/supabase`, no Pinia, no auth anything.

### Deployment
`nuxt generate` → static files → Vercel. `vercel.json` handles routing/headers. All routes prerendered at build time.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NUXT_PUBLIC_APP_URL` | — | App URL used in redirect stubs (default: `https://app.viewora.software`) |

This is the only env var. The `.env.example` is minimal.

---

## What Does NOT Belong Here

- **No API calls** to `viewora-backend`. This site makes zero HTTP requests to the backend.
- **No Supabase** client, auth, or database calls.
- **No Pinia stores**, no auth state.
- **No user-specific dynamic content.** Everything is statically rendered at build time.

If you find yourself adding `useFetch` to call the backend, you are in the wrong repo. That belongs in `viewora-app`.

---

## Known Gaps / Incomplete Work

| Area | Status |
|---|---|
| Blog index page | Blog article pages exist in `content/blog/` — verify `pages/blog/` render logic is complete |
| Viewer pages | `pages/viewer/` exists but purpose is unclear — likely a demo/preview |
| Legal pages | `pages/legal/` exists — content and completeness unknown |
| `CircularGallery.client.vue` | 17 KB WebGL component — complex, test carefully before modifying |

---

## Rules for AI Editing This Repo

1. **No API calls.** This is a static site. Do not add `useFetch`, `$fetch`, or any backend communication.
2. **No auth.** Do not add `@nuxtjs/supabase` or any auth logic.
3. **All new pages need `useSeoMeta()`** — every page must have a title, description, and OG tags.
4. **Every new SEO landing page must be added to the sitemap** (the sitemap module auto-discovers prerendered routes, but verify).
5. **`CircularGallery.client.vue` is client-only** — always wrap it in `<ClientOnly>`.
6. **Login/register redirects go to `app.viewora.software`** — never implement auth forms here.
7. **All pages are prerendered** — avoid any code that only works at runtime (e.g., browser-only APIs without `process.client` guards).
