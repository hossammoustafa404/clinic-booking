# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Clinic Booking
**Updated:** 2026-11-08
**Category:** Healthcare SaaS (Egypt / MENA, bilingual AR/EN)
**Inspiration:** Cal.com marketing clarity, Linear admin restraint, Cliniko healthcare calm
**Rejected:** Neumorphism, AI purple/indigo, cyan neon mint, Inter, hero stat strips, floating badges, inset hero cards

---

## Global Rules

### Pattern
Trust & Authority + Conversion. Section order: Hero → Proof → Solution features → How it works → Pricing → Closing CTA.

### Style
Minimalism & Swiss Style — high contrast, whitespace, geometric grid, single teal accent, restrained motion.

### Color Palette

Tokens live in `@saas-kit/theme` as OKLCH CSS variables. Conceptual roles:

| Role | Intent |
|------|--------|
| Primary | Deep teal — healthcare trust, not cyan neon |
| Background | Cool near-white slate |
| Foreground | Near-black slate |
| Accent surfaces | Soft teal wash |
| Destructive | Clear red for danger only |
| Borders | Low-chroma slate |

### Typography

- **Latin / display:** Figtree (`--font-heading`)
- **Arabic / bilingual body:** IBM Plex Sans Arabic (`--font-arabic`)
- Do not use Inter, Roboto, Arial, or system-only stacks as the brand voice

### Landing (web)

- Brand name is a hero-level signal, larger than the supporting headline
- First viewport: brand, one headline, one sentence, CTAs, one full-bleed atmospheric plane
- No cards, stats, badges, or floating labels in the hero
- Proof/stats sit below the fold
- Motion: subtle entrance/hover only; honor `prefers-reduced-motion`

### Admin console

- Linear / Polaris density: light sidebar, quiet borders, shadcn Card/Table/Badge/Button
- Same theme package as web — no separate purple admin skin

### Components

- Shared primitives: `@saas-kit/components/ui/*`
- Shared tokens: `@saas-kit/theme/styles.css`
- Icons: Lucide only

### Avoid

- Bright neon colors
- Motion-heavy animations
- AI purple/pink gradients
- Cream + terracotta / broadsheet newspaper looks
- Rounded-full pill clusters and multi-layer shadows
