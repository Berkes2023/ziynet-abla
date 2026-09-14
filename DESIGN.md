# Design System

A reference for the visual language of this site, so it can be extended consistently — or rebranded later without touching component code.

## Brand

**Ziynet Sevsal — Equine Veterinarian**, based in Cyprus. The tone is *authoritative but warm*: clinically credible without feeling cold or corporate — closer to a trusted local expert than a faceless clinic chain. This mirrors the inspiration site ([hirdandpartners.com/equine](https://www.hirdandpartners.com/equine/)): clean layouts, card-based service presentation, and prominent contact information, adapted here for a solo equine practitioner.

## Colour Palette

Defined as CSS variables in [`app/globals.css`](app/globals.css) and exposed as Tailwind utilities (`bg-forest-700`, `text-gold-600`, etc.).

| Token | Hex | Use |
|---|---|---|
| `forest-900` → `forest-50` | `#16291a` → `#f1f5f1` | Primary brand colour — deep, trustworthy green. Header, footer, headings. |
| `gold-900` → `gold-50` | `#33260c` → `#fbf6ea` | Accent — warm amber/gold. CTAs, highlights, eyebrows. |
| `background` | `#fbf8f2` | Warm cream page background — softer than clinical white. |
| `surface` | `#ffffff` | Card and panel backgrounds. |
| `foreground` | `#23261f` | Body text — warm charcoal, not pure black. |

To rebrand: change the hex values in `:root` inside `app/globals.css`. Every component references the named tokens, not raw hex values.

## Typography

- **Display (headings):** [Fraunces](https://fonts.google.com/specimen/Fraunces) — a serif with character, giving headlines an "established practice" authority. Applied via the `font-display` utility class.
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) — clean, highly legible sans-serif for everything else.
- Both are loaded via `next/font/google` in `app/layout.tsx`, self-hosted at build time (no runtime request to Google).

## Components

All shared UI lives in `/components`:

- **`Header.tsx` / `MegaMenu.tsx` / `MobileNav.tsx`** — the primary navigation. Desktop shows a full mega menu under "Services" (hover or click to open); mobile collapses to a slide-in panel with an accordion. Both read from the same `content/services.ts` data, so adding a service updates every surface at once.
- **`ServiceCard.tsx`, `BlogCard.tsx`** — content cards used across the homepage, services, and blog listings.
- **`SectionHeading.tsx`** — consistent eyebrow/title/description pattern used at the top of every section.
- **`CTASection.tsx`** — the repeated, full-width conversion banner used at the bottom of most pages.
- **`HeroGraphic.tsx`** — the homepage hero photo of Ziynet with a horse, with a gradient caption overlay.

## Content

Page copy is intentionally separated from layout, living in `/content`:

- `site.ts` — name, contact details, navigation
- `services.ts` — the 7 service categories that drive the mega menu, services grid, and individual service pages
- `experience.ts` — work history, education, continuing education
- `blog.ts` — articles

Editing these files updates the site without touching any component or page.

## Imagery

Real photos of Ziynet and her patients are used throughout (hero, about page, and every service page), stored in `public/images/`. No stock photography is used — it would misrepresent who's actually providing the care.
