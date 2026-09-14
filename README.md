# Ziynet Sevsal — Equine Veterinarian

A marketing website built with Next.js (App Router) + TypeScript + Tailwind CSS. See [`DESIGN.md`](DESIGN.md) for the design system (colours, type, components).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/` — pages and routes (App Router)
- `components/` — shared UI (header, mega menu, cards, contact form, etc.)
- `content/` — all editable copy: `site.ts` (contact details/nav), `services.ts` (drives the mega menu + service pages), `experience.ts`, `blog.ts`
- `lib/validations.ts` — the contact form's validation schema
- `DESIGN.md` — the design system reference

**To edit site content (text, services, experience, articles), edit the files in `/content` — no component changes needed for most updates.**

## Before going live

A few things are intentionally left as placeholders or stubs for a fast first build — worth addressing before sharing this with real clients:

1. **Contact form delivery.** `app/api/contact/route.ts` currently validates a submission and logs it to the server console — it does **not** send an email or save it anywhere. Before this goes live, wire in an email provider (e.g. [Resend](https://resend.com) or SendGrid) or a simple database, or the form will silently go nowhere.
2. **Domain.** Once a custom domain is chosen, set the `NEXT_PUBLIC_SITE_URL` environment variable (used by `app/sitemap.ts` and `app/robots.ts`) to the real URL, e.g. `https://ziynetsevsal.com`.
3. **Employment considerations.** The site currently frames this as a personal professional site with a general contact form (not an advertised independent ambulatory practice). If it's meant to actively solicit paying client work, it's worth confirming that doesn't conflict with the terms of any current employment.

## Deploying to Vercel

This repo is ready to deploy as-is. From this folder, run:

```bash
npm install -g vercel   # if you don't already have the CLI
vercel login            # opens your browser to sign in / create an account
vercel link             # links this folder to a new or existing Vercel project
vercel deploy           # builds and deploys a shareable PREVIEW url
```

Once you're happy with the preview, ship it to production:

```bash
vercel deploy --prod
```

Vercel will print the live URL after each deploy — that's what you share with the client. Every subsequent `vercel deploy` (or a `git push` if you connect a GitHub repo in the Vercel dashboard) creates a new preview automatically.

### Optional: connect GitHub for automatic deploys

In the [Vercel dashboard](https://vercel.com/dashboard), open the project → Settings → Git, and connect it to a GitHub repository. After that, every push gets its own preview URL, and pushes to `main` deploy to production automatically.
