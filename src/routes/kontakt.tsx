import { createFileRoute } from '@tanstack/react-router'
import { ContactSection } from '@/components/sections'
import { pageHead } from '@/data/site'

export const Route = createFileRoute('/kontakt')({
  head: () =>
    pageHead(
      'Kontakt – Bestill bildiagnostikk | Sogn AutoDiagnose',
      'Bestill bildiagnostikk i Luster, Sogndal og omegn. Ta kontakt på e-post om elbildiagnostikk, batteridiagnostikk eller feilkodelesing for bilen din.',
      '/kontakt',
    ),
  component: Contact,
})

function Contact() {
  return (
    <div className="relative isolate pt-16">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]" />
      <ContactSection headingLevel="h1" />
    </div>
  )
}
