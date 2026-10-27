import { createFileRoute } from '@tanstack/react-router'
import { AboutSection, CtaBand, HowItWorks, WhyUs } from '@/components/sections'
import { pageHead } from '@/data/site'

export const Route = createFileRoute('/om-oss')({
  head: () =>
    pageHead(
      'Om oss – Lokal bildiagnose i Sogn | Sogn AutoDiagnose',
      'Sogn AutoDiagnose tilbyr bildiagnose i Sogn med moderne diagnoseutstyr. Lokal bildiagnostikk i Luster, Sogndal og nærområdet for elbil, hybrid og fossilbil.',
      '/om-oss',
    ),
  component: About,
})

function About() {
  return (
    <>
      <div className="pt-16">
        <AboutSection headingLevel="h1" />
      </div>
      <WhyUs />
      <HowItWorks />
      <CtaBand />
    </>
  )
}
