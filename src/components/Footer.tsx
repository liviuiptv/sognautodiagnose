import { Link } from '@tanstack/react-router'
import { Mail, MapPin } from 'lucide-react'
import { Logo } from './Logo'
import { site } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">{site.tagline}</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Sider</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="text-mist hover:text-white">Hjem</Link></li>
            <li><Link to="/tjenester" className="text-mist hover:text-white">Tjenester</Link></li>
            <li><Link to="/om-oss" className="text-mist hover:text-white">Om oss</Link></li>
            <li><Link to="/blogg" className="text-mist hover:text-white">Blogg og kunnskap</Link></li>
            <li><Link to="/kontakt" className="text-mist hover:text-white">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Kontakt</h2>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-volt-bright" />
              Luster – Sogndal – Vestland, Norge
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-volt-bright" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line/60">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-mist/70 sm:px-8">
          © {new Date().getFullYear()} {site.name}. Bildiagnostikk i Luster, Sogndal og omegn.
        </p>
      </div>
    </footer>
  )
}
