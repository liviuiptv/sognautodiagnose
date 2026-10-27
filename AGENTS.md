# Sogn AutoDiagnose – agent notes

Marketing website for a small, independent automotive diagnostics service in Luster/Sogndal, Vestland. All visible text must be Norwegian Bokmål.

## Architecture

TanStack Start (React 19, SSR) deployed on Netlify. `vite.config.ts` runs Tailwind v4, the Netlify adapter, Start and React. `src/routeTree.gen.ts` is generated at build time.

- `src/routes/__root.tsx` – HTML shell (`lang="nb"`), global meta, fonts, LocalBusiness JSON-LD, Header/Footer.
- `src/routes/{index,tjenester,om-oss,kontakt}.tsx`, `src/routes/blogg/{index,$slug}.tsx` – pages. Each sets its own title/description via `pageHead()`.
- `src/components/sections.tsx` – all page sections (Hero, ServicesSection/ServicesGrid, WhyUs, HowItWorks, AboutSection, BlogSection/BlogGrid, ContactSection, CtaBand, PageHero). Pages compose these.
- `src/data/articles.ts` – «Blogg og kunnskap» articles (structured sections, rendered by `/blogg/$slug`). The owner removed the enquiry form; contact is by e-mail only.
- `src/data/site.ts` – single source for business info, email, services, compatibility disclaimer, `img()` helper and `pageHead()`.
- `src/styles.css` – theme tokens (`ink`, `charcoal`, `graphite`, `line`, `mist`, `volt*`), grid background, reveal-on-scroll animation.
- `public/img/` – AI-generated imagery. Always reference via `img(file, width)` so it goes through Netlify Image CDN, never the raw PNG.

## Content rules (from the owner)

- Do not invent phone numbers, a physical address, prices, testimonials, certifications, partnerships or manufacturer authorizations.
- Do not imply the business is an authorized workshop.
- Never promise every test is available on every car – availability depends on make, model, year and system support (see `compatibilityNote`).
- Keep SEO keywords natural: Bildiagnostikk Sogndal/Luster, Elbildiagnostikk Vestland, Batteridiagnostikk elbil, Feilkodelesing bil, Bildiagnose Sogn.

## Conventions

- Tailwind utility classes; reuse theme tokens rather than raw hex.
- Use `Reveal` for scroll animations (`as="li"` inside lists); respects reduced motion.
- Typed `Link` from `@tanstack/react-router` for internal links.
- When adding a page, also add it to the nav in `Header.tsx`, `Footer.tsx` and `public/sitemap.xml`.
