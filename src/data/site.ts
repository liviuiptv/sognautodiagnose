import {
  Activity,
  BatteryCharging,
  Cpu,
  FileText,
  PlugZap,
  ScanLine,
  SearchCheck,
  type LucideIcon,
} from 'lucide-react'

export const site = {
  name: 'Sogn AutoDiagnose',
  tagline: 'Moderne bildiagnostikk. Presise data. Riktige løsninger.',
  email: 'sognautodiagnose@gmail.com',
  area: 'Luster, Sogndal og omegn, Vestland, Norge',
  url: 'https://norwegian-auto-website.netlify.app',
}

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
  'Forespørsel om bildiagnostikk',
)}`

/** Serve generated images through Netlify Image CDN instead of the full-size originals. */
export function img(file: string, w: number) {
  return `/.netlify/images?url=/img/${file}&w=${w}&fm=webp&q=72`
}

export interface Service {
  id: string
  title: string
  description: string
  details: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'elbildiagnostikk',
    title: 'Elbildiagnostikk',
    description:
      'Feilkodelesing og analyse av elektriske systemer, styreenheter og bilens elektronikk.',
    details: [
      'Lesing og tolking av feilkoder',
      'Gjennomgang av styreenheter og kommunikasjon',
      'Feilsøking i bilens elektronikk',
    ],
    icon: Cpu,
  },
  {
    id: 'batteri-bms',
    title: 'Batteri- og BMS-diagnostikk',
    description:
      'Kontroll av tilgjengelige batteridata, celleverdier, spenninger, temperaturer og batteristyringssystem (BMS), der kjøretøyet støtter dette.',
    details: [
      'Celleverdier og spenningsavvik',
      'Batteritemperaturer',
      'Feilkoder fra batteristyringssystemet',
    ],
    icon: BatteryCharging,
  },
  {
    id: 'kjops-og-salgskontroll',
    title: 'Kjøps- og salgskontroll',
    description:
      'Diagnostisk gjennomgang av bilens elektroniske systemer før kjøp eller salg.',
    details: [
      'Skanning for lagrede og aktive feilkoder',
      'Oversikt over tilgjengelige batteridata på elbil',
      'Bedre grunnlag for kjøp eller salg',
    ],
    icon: SearchCheck,
  },
  {
    id: 'ac-dc-lading',
    title: 'AC/DC-lading',
    description:
      'Analyse av tilgjengelige ladeparametere og feilsøking ved ladeproblemer, avhengig av bilmodell og systemstøtte.',
    details: [
      'Feilkoder knyttet til lading',
      'Tilgjengelige ladeparametere',
      'Feilsøking ved avbrutt eller treg lading',
    ],
    icon: PlugZap,
  },
  {
    id: 'full-skanning',
    title: 'Full kjøretøyskanning',
    description:
      'Systematisk skanning av tilgjengelige styreenheter for å identifisere feilkoder og mulige problemer.',
    details: [
      'Gjennomgang av alle tilgjengelige styreenheter',
      'Registrering av feilkoder',
      'Oversikt over mulige problemområder',
    ],
    icon: ScanLine,
  },
  {
    id: 'live-data',
    title: 'Live Data Analyse',
    description:
      'Analyse av sensordata og driftsverdier i sanntid for å undersøke symptomer og feil.',
    details: [
      'Sensorverdier i sanntid',
      'Sammenligning av driftsverdier',
      'Undersøkelse av sporadiske feil',
    ],
    icon: Activity,
  },
  {
    id: 'diagnoserapport',
    title: 'Diagnoserapport',
    description:
      'En oversiktlig rapport med registrerte feilkoder, tilgjengelige måleverdier og funn fra diagnostikken.',
    details: [
      'Registrerte feilkoder',
      'Tilgjengelige måleverdier',
      'Forklaring av funn',
    ],
    icon: FileText,
  },
]

export const compatibilityNote =
  'Hvilke tester som er tilgjengelige avhenger av bilmerke, modell, årsmodell og systemstøtte. Ikke alle funksjoner er tilgjengelige på alle kjøretøy. Ta gjerne kontakt på forhånd, så sjekker vi hva som er mulig for din bil.'

export function pageHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: `${site.url}${path}` },
    ],
    links: [{ rel: 'canonical', href: `${site.url}${path}` }],
  }
}
