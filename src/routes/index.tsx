import { createFileRoute } from '@tanstack/react-router'
import {
  AboutSection,
  BlogSection,
  ContactSection,
  Hero,
  HowItWorks,
  ServicesSection,
  WhyUs,
} from '@/components/sections'
import { pageHead } from '@/data/site'

export const Route = createFileRoute('/')({
  head: () =>
    pageHead(
      'Sogn AutoDiagnose – Bildiagnostikk i Luster og Sogndal',
      'Bildiagnostikk i Sogndal, Luster og omegn. Elbildiagnostikk, batteridiagnostikk for elbil, feilkodelesing og diagnoserapport for elbil, hybrid og fossilbil i Vestland.',
      '/',
    ),
  component: Home,
})

function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUs />
      <HowItWorks />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </>
  )
}
