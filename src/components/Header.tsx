import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Mail, Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { mailto } from '@/data/site'

const nav = [
  { to: '/', label: 'Hjem', exact: true },
  { to: '/tjenester', label: 'Tjenester', exact: true },
  { to: '/om-oss', label: 'Om oss', exact: true },
  { to: '/blogg', label: 'Blogg og kunnskap', exact: false },
  { to: '/kontakt', label: 'Kontakt', exact: true },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line/70 bg-ink/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="Sogn AutoDiagnose – til forsiden" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hovedmeny">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-lg px-2.5 py-2 text-sm font-medium text-mist transition-colors hover:text-white lg:px-3.5"
              activeProps={{ className: 'text-white!' }}
              activeOptions={{ exact: item.exact }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="ml-3 hidden rounded-lg bg-volt px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_-6px_var(--color-volt)] transition hover:bg-volt-bright lg:inline-block"
          >
            Bestill diagnostikk
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 rounded-lg p-2 text-white md:hidden"
          aria-label={open ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={open}
          aria-controls="mobilmeny"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobilmeny"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <nav className="space-y-1 px-5 pb-6 pt-2" aria-label="Mobilmeny">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-medium text-mist hover:bg-graphite hover:text-white"
              activeProps={{ className: 'text-white! bg-graphite' }}
              activeOptions={{ exact: item.exact }}
            >
              {item.label}
            </Link>
          ))}
          <div className="grid grid-cols-1 gap-3 pt-3">
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-volt px-4 py-3 text-center font-semibold text-white"
            >
              Bestill diagnostikk
            </Link>
            <a
              href={mailto}
              className="flex items-center justify-center gap-2 rounded-xl border border-line px-4 py-3 font-medium text-white"
            >
              <Mail className="h-4 w-4" /> Send e-post
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
