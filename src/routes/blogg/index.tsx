import { createFileRoute } from '@tanstack/react-router'
import { BlogGrid, CompatibilityNote, CtaBand, PageHero } from '@/components/sections'
import { Reveal } from '@/components/Reveal'
import { pageHead } from '@/data/site'

export const Route = createFileRoute('/blogg/')({
  head: () =>
    pageHead(
      'Blogg og kunnskap – Bildiagnostikk forklart | Sogn AutoDiagnose',
      'Artikler om bildiagnostikk: batteridiagnostikk for elbil, motordiagnostikk for diesel og bensin, kontroll av hybridbil og en enkel forklaring av OBD og feilkodelesing.',
      '/blogg',
    ),
  component: Blog,
})

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blogg og kunnskap"
        title="Bildiagnostikk forklart"
        intro="Her samler vi artikler om diagnostikk av elbil, hybrid og bil med diesel- eller bensinmotor – skrevet for bileiere som vil forstå mer av det bilen forteller."
        image="scanner.png"
        alt="Diagnoseverktøy koblet til bilens OBD-kontakt"
      />
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <BlogGrid />
          <Reveal className="mt-8">
            <CompatibilityNote />
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
