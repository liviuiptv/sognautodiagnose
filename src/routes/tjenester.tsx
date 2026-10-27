import { createFileRoute } from '@tanstack/react-router'
import {
  CompatibilityNote,
  CtaBand,
  HowItWorks,
  PageHero,
  ServicesGrid,
} from '@/components/sections'
import { Reveal } from '@/components/Reveal'
import { img, pageHead } from '@/data/site'

export const Route = createFileRoute('/tjenester')({
  head: () =>
    pageHead(
      'Tjenester – Elbildiagnostikk og feilkodelesing | Sogn AutoDiagnose',
      'Elbildiagnostikk i Vestland, batteri- og BMS-diagnostikk, kjøps- og salgskontroll, feilsøking ved lading, full kjøretøyskanning og diagnoserapport i Luster og Sogndal.',
      '/tjenester',
    ),
  component: Services,
})

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Tjenester"
        title="Bildiagnostikk for moderne kjøretøy"
        intro="Vi tilbyr elbildiagnostikk, batteridiagnostikk for elbil og feilkodelesing for bil – for elbiler, hybridbiler og fossilbiler i Luster, Sogndal og omegn."
        image="charging.png"
        alt="Ladekabel koblet til en elbil"
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-8">
            <CompatibilityNote />
          </Reveal>
          <ServicesGrid detailed />
        </div>
      </section>

      <section className="border-y border-line bg-charcoal py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-volt-bright">
              Batteridiagnostikk elbil
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Innsikt i batteriet – der bilen gir tilgang
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-mist">
              Høyspenningsbatteriet er en av de viktigste komponentene i en elbil. Der kjøretøyet
              støtter det, leser vi ut tilgjengelige batteridata som celleverdier, spenninger,
              temperaturer og feilkoder fra batteristyringssystemet (BMS).
            </p>
            <p className="mt-4 leading-relaxed text-mist">
              Hvor mye informasjon som er tilgjengelig, varierer mellom bilmerker, modeller og
              årsmodeller. Vi forteller deg på forhånd hva vi kan forvente å få ut av din bil.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={img('battery.png', 900)}
              srcSet={`${img('battery.png', 600)} 600w, ${img('battery.png', 900)} 900w, ${img('battery.png', 1300)} 1300w`}
              sizes="(min-width: 1024px) 600px, 100vw"
              alt="Batteripakke fra elbil med celledata på nettbrett"
              loading="lazy"
              width={1408}
              height={768}
              className="aspect-[4/3] w-full rounded-2xl border border-line object-cover"
            />
          </Reveal>
        </div>
      </section>

      <HowItWorks />
      <CtaBand />
    </>
  )
}
