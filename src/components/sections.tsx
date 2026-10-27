import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  CarFront,
  ClipboardList,
  FileCheck2,
  Gauge,
  Info,
  Mail,
  MapPin,
  MessageSquareText,
  ScanSearch,
  Wrench,
  Zap,
} from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { compatibilityNote, img, mailto, services, site } from '@/data/site'
import { articles } from '@/data/articles'

const container = 'mx-auto max-w-7xl px-5 sm:px-8'
const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-volt px-6 py-3.5 font-semibold text-white shadow-[0_0_32px_-8px_var(--color-volt)] transition hover:bg-volt-bright'
const btnSecondary =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10'

/* ------------------------------------------------------------------ Hero */

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-14 pt-28 sm:items-center sm:pb-20">
      <img
        src={img('hero.png', 1600)}
        srcSet={`${img('hero.png', 800)} 800w, ${img('hero.png', 1280)} 1280w, ${img('hero.png', 1920)} 1920w`}
        sizes="100vw"
        alt="Moderne elbil ved en norsk fjord med diagnoseutstyr i skumringen"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30 sm:bg-gradient-to-r sm:from-ink sm:via-ink/75 sm:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className={`${container} w-full`}>
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-volt/40 bg-volt/10 px-3.5 py-1.5 text-xs font-medium text-volt-bright backdrop-blur">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-volt-bright" />
            Bildiagnostikk i Luster, Sogndal og omegn
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Moderne bildiagnostikk.{' '}
            <span className="text-gradient">Presise data.</span> Riktige løsninger.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Profesjonell bildiagnostikk for elbiler, hybridbiler og fossilbiler i Luster, Sogndal og
            omegn.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/kontakt" className={btnPrimary}>
              Bestill diagnostikk <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/tjenester" className={btnSecondary}>
              Se våre tjenester
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm text-white/75">
            {['Moderne diagnoseutstyr.', 'Grundige analyser.', 'Tydelige rapporter.'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="h-px w-4 bg-volt-bright" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Sub-page hero */

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
}: {
  eyebrow: string
  title: string
  intro: string
  image: string
  alt: string
}) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      <img
        src={img(image, 1600)}
        srcSet={`${img(image, 800)} 800w, ${img(image, 1600)} 1600w`}
        sizes="100vw"
        alt={alt}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-ink to-transparent" />
      <div className={container}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-volt-bright">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Services */

export function CompatibilityNote() {
  return (
    <div className="flex gap-3 rounded-2xl border border-line bg-graphite/60 p-5 text-sm leading-relaxed text-mist">
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-volt-bright" />
      <p>{compatibilityNote}</p>
    </div>
  )
}

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.id} delay={(i % 3) * 80}>
          <article
            id={s.id}
            className="group relative h-full overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-graphite to-charcoal p-6 transition duration-300 hover:-translate-y-1 hover:border-volt/50 hover:shadow-[0_18px_50px_-20px_rgb(47_140_255/0.45)] sm:p-7"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
              <div className="h-px w-1/4 bg-gradient-to-r from-transparent via-volt-bright to-transparent opacity-0 transition-opacity group-hover:opacity-100 scan-line" />
            </div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-volt/30 bg-volt/10 text-volt-bright">
              <s.icon className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <h3 className="font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-mist">{s.description}</p>
            {detailed && (
              <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm text-white/80">
                {s.details.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-volt-bright" />
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </article>
        </Reveal>
      ))}
      <Reveal delay={160} className="lg:col-span-2">
        <Link
          to={detailed ? '/kontakt' : '/tjenester'}
          className="group flex h-full min-h-48 flex-col justify-between rounded-2xl border border-volt/40 bg-gradient-to-br from-volt/20 to-volt/5 p-6 transition hover:border-volt sm:p-7"
        >
          <div>
            <p className="font-display text-xl font-semibold">Usikker på hva bilen din trenger?</p>
            <p className="mt-3 text-mist">
              {detailed
                ? 'Beskriv symptomene, så finner vi ut hvilke tester som er tilgjengelige og relevante for din bil.'
                : 'Les mer om hver tjeneste, eller ta kontakt så finner vi ut hvilke tester som passer for din bil.'}
            </p>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 font-semibold text-volt-bright">
            {detailed ? 'Ta kontakt' : 'Alle tjenester'}{' '}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </Link>
      </Reveal>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="tjenester" className="relative py-20 sm:py-28">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className={container}>
        <Reveal>
          <SectionHeading
            eyebrow="Våre tjenester"
            title="Diagnostikk for elbil, hybrid og fossilbil"
            intro="Fra feilkodelesing og full kjøretøyskanning til batteridiagnostikk for elbil – vi undersøker bilens elektroniske systemer og gir deg et tydelig bilde av funnene."
          />
        </Reveal>
        <div className="mt-12">
          <ServicesGrid />
        </div>
        <Reveal className="mt-6">
          <CompatibilityNote />
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Why us */

const reasons = [
  { icon: ScanSearch, text: 'Moderne diagnoseverktøy fra LAUNCH.' },
  { icon: CarFront, text: 'Diagnostikk av elbiler, hybridbiler og fossilbiler.' },
  { icon: Gauge, text: 'Fokus på tekniske data og grundig feilsøking.' },
  { icon: MessageSquareText, text: 'Tydelig kommunikasjon og oversiktlige rapporter.' },
  { icon: MapPin, text: 'Lokal service i Luster, Sogndal og nærområdet.' },
]

export function WhyUs() {
  return (
    <section className="border-y border-line bg-charcoal py-20 sm:py-28">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        <Reveal>
          <div className="relative">
            <img
              src={img('scanner.png', 900)}
              srcSet={`${img('scanner.png', 600)} 600w, ${img('scanner.png', 900)} 900w, ${img('scanner.png', 1300)} 1300w`}
              sizes="(min-width: 1024px) 600px, 100vw"
              alt="Diagnoseverktøy koblet til bilens OBD-kontakt"
              loading="lazy"
              width={1408}
              height={768}
              className="aspect-[4/3] w-full rounded-2xl border border-line object-cover"
            />
            <div className="absolute -bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl border border-line bg-ink/90 p-4 backdrop-blur sm:left-auto sm:right-6 sm:w-72">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-volt/15 text-volt-bright">
                <Zap className="h-5 w-5" />
              </span>
              <span className="text-sm leading-snug">
                <span className="block font-semibold">Elbil · Hybrid · Fossil</span>
                <span className="text-mist">Diagnostikk tilpasset din bil</span>
              </span>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <SectionHeading eyebrow="Hvorfor oss" title="Hvorfor velge Sogn AutoDiagnose?" />
          </Reveal>
          <ul className="mt-10 space-y-3">
            {reasons.map((r, i) => (
              <Reveal
                as="li"
                key={r.text}
                delay={i * 70}
                className="flex items-center gap-4 rounded-xl border border-line bg-graphite/50 p-4 transition hover:border-volt/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-volt/10 text-volt-bright">
                  <r.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="font-medium">{r.text}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- How it works */

const steps = [
  { icon: Mail, title: 'Ta kontakt', text: 'Fortell oss om bilen og problemet.' },
  {
    icon: Wrench,
    title: 'Diagnostikk',
    text: 'Vi undersøker tilgjengelige systemer og relevante data.',
  },
  {
    icon: FileCheck2,
    title: 'Resultat og rapport',
    text: 'Du får en forklaring på funnene og en oversiktlig rapport der dette er tilgjengelig.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading center eyebrow="Slik fungerer det" title="Tre enkle steg" />
        </Reveal>
        <div className="relative mt-14">
          <div className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-volt/0 via-volt/60 to-volt/0 md:block" />
          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
            {steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 120}
                className="flex h-full flex-col items-center px-4 text-center"
              >
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-volt/40 bg-graphite text-volt-bright shadow-[0_0_40px_-12px_var(--color-volt)]">
                  <s.icon className="h-7 w-7" strokeWidth={1.6} />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-volt text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-mist">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- About */

export function AboutSection({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const Heading = headingLevel
  return (
    <section id="om-oss" className="relative isolate overflow-hidden py-20 sm:py-28">
      <img
        src={img('landscape.png', 1600)}
        srcSet={`${img('landscape.png', 800)} 800w, ${img('landscape.png', 1600)} 1600w`}
        sizes="100vw"
        alt="Fjell og fjord i Sogn"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-transparent to-ink" />
      <div className={`${container} grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center`}>
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-volt-bright">
            Om oss
          </p>
          <Heading className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Lokal interesse for moderne bildiagnostikk
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            Sogn AutoDiagnose tilbyr diagnostiske tjenester for moderne kjøretøy i Luster, Sogndal
            og omegn. Vi bruker moderne diagnoseutstyr for å undersøke bilens elektroniske systemer
            og analysere tilgjengelige tekniske data. Målet er å gi bileiere bedre oversikt over
            bilens tilstand og et bedre grunnlag for videre feilsøking.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { k: 'Område', v: 'Luster, Sogndal og omegn' },
              { k: 'Kjøretøy', v: 'Elbil, hybrid og fossilbil' },
              { k: 'Utstyr', v: 'Moderne diagnoseverktøy fra LAUNCH' },
            ].map((item) => (
              <div key={item.k} className="rounded-xl border border-white/10 bg-ink/60 p-5 backdrop-blur">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-volt-bright">
                  {item.k}
                </dt>
                <dd className="mt-1.5 font-medium">{item.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Blog */

export function BlogGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((a, i) => (
        <Reveal as="li" key={a.slug} delay={(i % 4) * 80}>
          <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-graphite to-charcoal transition duration-300 hover:-translate-y-1 hover:border-volt/50 hover:shadow-[0_18px_50px_-20px_rgb(47_140_255/0.45)]">
            <div className="relative overflow-hidden">
              <img
                src={img(a.image, 640)}
                srcSet={`${img(a.image, 480)} 480w, ${img(a.image, 640)} 640w, ${img(a.image, 960)} 960w`}
                sizes="(min-width: 1280px) 300px, (min-width: 640px) 50vw, 100vw"
                alt={a.alt}
                loading="lazy"
                width={1376}
                height={768}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full border border-volt/40 bg-ink/80 px-3 py-1 text-xs font-medium text-volt-bright backdrop-blur">
                {a.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold leading-snug">{a.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-mist">{a.excerpt}</p>
              <Link
                to="/blogg/$slug"
                params={{ slug: a.slug }}
                className="mt-6 inline-flex items-center gap-2 self-start rounded-lg font-semibold text-volt-bright after:absolute after:inset-0 hover:text-white"
              >
                Les mer <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                <span className="sr-only">om {a.title.toLowerCase()}</span>
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  )
}

export function BlogSection() {
  return (
    <section id="blogg" className="relative py-20 sm:py-28">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className={container}>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Blogg og kunnskap"
              title="Lær mer om bildiagnostikk"
              intro="Korte og forståelige artikler om diagnostikk av elbil, hybrid og bil med diesel- eller bensinmotor."
            />
          </Reveal>
          <Reveal>
            <Link to="/blogg" className={`${btnSecondary} w-full md:w-auto`}>
              Alle artikler <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12">
          <BlogGrid />
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Contact */

export function ContactSection({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const Heading = headingLevel
  return (
    <section id="kontakt" className="py-20 sm:py-28">
      <div className={`${container} grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-14`}>
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-volt-bright">
            Kontakt
          </p>
          <Heading className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Har du spørsmål om bilen din?
          </Heading>
          <p className="mt-4 text-lg leading-relaxed text-mist">
            Ta kontakt for å høre hvilke diagnostiske tester som er tilgjengelige for din bil.
            Fortell gjerne om bilmerke, modell, årsmodell og hva du ønsker å få undersøkt.
          </p>

          <a href={mailto} className={`${btnPrimary} mt-8 w-full sm:w-auto`}>
            <Mail className="h-5 w-5" /> Send oss en e-post
          </a>
        </Reveal>

        <Reveal delay={120}>
          <dl className="space-y-6 rounded-2xl border border-line bg-gradient-to-b from-graphite to-charcoal p-6 text-sm sm:p-8">
            <div className="flex gap-3">
              <ClipboardList className="h-5 w-5 shrink-0 text-volt-bright" />
              <div>
                <dt className="text-mist">Navn</dt>
                <dd className="mt-0.5 font-medium text-white">{site.name}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-volt-bright" />
              <div>
                <dt className="text-mist">Serviceområde</dt>
                <dd className="mt-0.5 font-medium text-white">{site.area}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-volt-bright" />
              <div>
                <dt className="text-mist">E-post</dt>
                <dd className="mt-0.5 font-medium">
                  <a href={`mailto:${site.email}`} className="break-all text-white hover:text-volt-bright">
                    {site.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- CTA band */

export function CtaBand() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className={container}>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-volt/30 bg-gradient-to-br from-volt-deep/40 via-graphite to-charcoal p-8 sm:p-12">
            <div className="bg-grid absolute inset-0 -z-0 opacity-60" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  Klar for en grundig diagnose?
                </h2>
                <p className="mt-2 max-w-xl text-mist">
                  Ta kontakt for bildiagnostikk i Luster, Sogndal og resten av Sogn.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/kontakt" className={btnPrimary}>
                  Bestill diagnostikk <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={mailto} className={btnSecondary}>
                  <Mail className="h-4 w-4" /> E-post
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
