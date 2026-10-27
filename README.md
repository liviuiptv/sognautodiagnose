# Sogn AutoDiagnose

Nettside for Sogn AutoDiagnose – bildiagnostikk for elbiler, hybridbiler og fossilbiler i Luster, Sogndal og omegn (Vestland).

The site is written entirely in Norwegian Bokmål and has these pages:

- `/` – forside with hero, services, why choose us, how it works, about, blog teaser and contact details
- `/tjenester` – detailed service descriptions, battery diagnostics section and process
- `/om-oss` – about the business
- `/blogg` – «Blogg og kunnskap», overview of the knowledge articles
- `/blogg/$slug` – one page per article
- `/kontakt` – contact details and email button

## Technology

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, SSR)
- Tailwind CSS v4 (theme colours in `src/styles.css`)
- Netlify Image CDN for responsive WebP images (`/.netlify/images`)
- lucide-react icons

## Running locally

```bash
pnpm install
netlify dev --port 8889
```

`netlify dev` is recommended so that the Image CDN is emulated. `pnpm dev` also works for UI work, but images served through `/.netlify/images` require Netlify.

## Editing content

Business details, email, the service list and the compatibility disclaimer live in `src/data/site.ts`. Blog articles live in `src/data/articles.ts`. Images are in `public/img/`.
