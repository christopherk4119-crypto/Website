# Diamond Delivery Service: Website

Single-page site for Diamond Delivery Service (Calgary moving & delivery). Next.js 15 (App Router, TypeScript), Tailwind CSS v4, lucide-react icons.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```

## Edit business details: `lib/site.ts`

Name, phone, email, hours, price, services, service areas, review link, domain and colours all live in **`lib/site.ts`**. FAQ text is in `lib/faq.ts`. Search the project for `CONFIRM WITH CLIENT` to find every unverified detail.

- Adding an email: set `email` and it appears in the contact section and footer automatically. Also uncomment `email` in the JSON-LD in `app/layout.tsx`.
- Confirmed hours: set `openingHoursSchema` (e.g. `["Mo-Su 00:00-23:59"]`) and uncomment `openingHours` in `app/layout.tsx`.
- Set `url` to the real domain (used for canonical, sitemap, OG image).

## Set up the booking form

The form POSTs `FormData` to the URL in `NEXT_PUBLIC_FORM_ENDPOINT`.

1. Create a free form at https://formspree.io and copy its endpoint (`https://formspree.io/f/xxxxxxx`).
2. Locally: create `.env.local` with `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx`
3. On Vercel: Project → Settings → Environment Variables → add the same key, then redeploy.

Until it is set, the form shows the success message but **sends nothing** (a console warning says so). Don't launch without it.

## Swap the logo

The header uses an SVG recreation (`components/Logo.tsx`). To use the real logo, drop a transparent PNG at `public/logo.png` (fits 200×80) and follow the comment in `Logo.tsx`. Favicon: `app/icon.svg`.

## Swap the photos

Drop the client's real photos into `public/images/` with these exact names, then rebuild/redeploy:

- `real-truck-trailer.jpg` → hero + truck strip
- `real-trailer-open.jpg`, `real-truck-trailer-2.jpg` → truck strip

Missing files fall back to stock automatically (checked at build time). Keep the hero photo under ~250 KB (landscape, ~1600px wide). Credits: `public/images/CREDITS.md`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. https://vercel.com/new → import the repo (framework auto-detected: Next.js).
3. Add `NEXT_PUBLIC_FORM_ENDPOINT` under Environment Variables.
4. Deploy, then add the custom domain under Project → Domains and update `url` in `lib/site.ts`.
