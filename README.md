# Desert Shine Cleaning Co. — Website

Conversion-focused cleaning-company site for Yuma, AZ. Built with Next.js (App Router), React 19, Tailwind v4, framer-motion, and Lenis, composed from the Avoria Section Library ("Trades / local services" recipe).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero → stats → before/after slider (signature) → services → how-it-works → testimonials → CTA. No preloader — the page loads instantly. |
| `/services` | Four service lines with checklists, each with its own quote CTA |
| `/pricing` | Published flat rates (flip cards) + FAQ — the trust differentiator |
| `/about` | Local story, values, proof |
| `/contact` | 60-second quote form + phone/email |
| `/privacy`, `/terms` | Boilerplate legal |

SEO: per-page metadata, `sitemap.xml`, `robots.txt`, and LocalBusiness (HouseCleaningService) JSON-LD are already wired.

## Launch checklist (do these before going live)

1. **Business facts** — edit [`lib/site.ts`](lib/site.ts): real phone, email, domain, hours, service areas. Everything reads from this one file.
2. **Quote form** — create a free endpoint at [formspree.io](https://formspree.io) and paste it into `FORM_ENDPOINT` in [`components/QuoteForm.tsx`](components/QuoteForm.tsx). Until then the form falls back to opening the visitor's email client.
3. **Photos** — replace the placeholder SVGs in `public/images/` with real photos (same filenames, or update the paths). Priority order: `before` / `after` (the highest-converting section), then `hero`, then the four `service-*` images.
4. **Real numbers** — update `STATS` in `components/sections/StatCounters.tsx` and the testimonials in `components/sections/TestimonialTheater.tsx` with genuine figures and reviews. Never ship invented ones.
5. **Prices** — confirm the rates in `components/sections/FlipCards.tsx` and `app/services/page.tsx`.
6. Search the codebase for `CUSTOMIZE` to catch anything remaining.

## Reskin

All colors come from six CSS tokens at the top of [`app/globals.css`](app/globals.css) (`--paper`, `--ink`, `--body`, `--accent`, `--paper-dark`, `--line`). Fonts are set via `next/font` in [`app/layout.tsx`](app/layout.tsx). Motion easings live in [`lib/motion.ts`](lib/motion.ts).
