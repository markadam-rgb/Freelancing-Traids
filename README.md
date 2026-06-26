# Triad Studio — UI/UX Design Agency Landing Page

A modern, responsive, high-converting landing page for a three-person UI/UX
design studio. Built to *demonstrate* design quality — the site itself is the
portfolio piece.

![Triad Studio hero](docs/hero.png)

## Tech stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** for scroll/entrance animations
- Google Fonts: **Sora** (display) + **Inter** (body)

## Sections

1. **Sticky navbar** — anchor nav + "Start a project" CTA (mobile menu included)
2. **Hero** — value proposition, dual CTAs, animated background, stats + client marquee
3. **Services** — six UI/UX capability cards
4. **Work / Portfolio** — filterable case-study grid with animated transitions
5. **Process** — four-step approach
6. **About Us** — story of three friends + three team-member cards
7. **Testimonials** — client social proof
8. **Contact** — validated, front-end-only enquiry form with success state
9. **Footer**

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default <http://localhost:5173>).

## Other scripts

```bash
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Customising

- **Content** lives in [`src/data/site.ts`](src/data/site.ts) — studio name,
  team members, services, projects, testimonials.
- **Colors / fonts** are defined as design tokens in
  [`src/index.css`](src/index.css) under `@theme`.
- The contact form is intentionally front-end only; wire `onSubmit` in
  [`src/components/Contact.tsx`](src/components/Contact.tsx) to your endpoint or
  a service like Formspree to make it live.

> All copy, team members, clients and projects are placeholder content — swap in
> your real details before going live.
