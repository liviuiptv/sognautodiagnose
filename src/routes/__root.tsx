import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { img, site } from '@/data/site'

import '../styles.css'

const siteDescription =
  'Bildiagnostikk i Luster, Sogndal og omegn. Elbildiagnostikk, batteridiagnostikk og feilkodelesing for elbil, hybrid og fossilbil.'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  name: site.name,
  description: siteDescription,
  email: site.email,
  url: site.url,
  areaServed: ['Luster', 'Sogndal', 'Sogn', 'Vestland'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Luster',
    addressRegion: 'Vestland',
    addressCountry: 'NO',
  },
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0a0b0d' },
      { title: `${site.name} – Bildiagnostikk i Luster og Sogndal` },
      { name: 'description', content: siteDescription },
      { property: 'og:site_name', content: site.name },
      { property: 'og:locale', content: 'nb_NO' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${site.url}${img('hero.png', 1200)}` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@500;600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <HeadContent />
        <noscript>
          <style>{'.reveal{opacity:1;transform:none}'}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#innhold"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-volt focus:px-4 focus:py-2"
        >
          Hopp til innhold
        </a>
        <Header />
        <main id="innhold" className="flex-1">
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
