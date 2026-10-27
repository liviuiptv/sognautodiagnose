export interface ArticleSection {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export interface Article {
  slug: string
  category: string
  title: string
  excerpt: string
  description: string
  image: string
  alt: string
  sections: ArticleSection[]
  /** Short reminder shown in a highlighted box at the end of the article. */
  note: string
}

export const articles: Article[] = [
  {
    slug: 'elbil-batteri-og-diagnostikk',
    category: 'Elbil',
    title: 'Elbil – batteri og diagnostikk',
    excerpt:
      'Høyvoltbatteriet er hjertet i en elbil. Les hvordan diagnostikk gir innsikt i batteriets helsetilstand, celleverdier, BMS og ladesystem.',
    description:
      'Batteridiagnostikk for elbil: høyvoltbatteri, helsetilstand (SOH), celleverdier, BMS og ladesystem. Derfor er diagnostikk nyttig før kjøp av brukt elbil.',
    image: 'blogg-elbil.png',
    alt: 'Elbil til lading i et verksted med celleverdier for batteriet vist på et nettbrett',
    sections: [
      {
        heading: 'Hvorfor er diagnostikk av elbil viktig?',
        paragraphs: [
          'En elbil har færre bevegelige deler enn en bil med forbrenningsmotor, men den er full av elektronikk. Batteri, lading, motorstyring, varmepumpe og sikkerhetssystemer styres av egne styreenheter som hele tiden overvåker hverandre.',
          'Mange feil gir ingen tydelige symptomer før de blir et problem. Med diagnoseutstyr kan man lese ut informasjon som bilen selv har registrert, og få et bedre bilde av tilstanden enn det man ser fra førersetet.',
        ],
      },
      {
        heading: 'Høyvoltbatteriet',
        paragraphs: [
          'Høyvoltbatteriet er den største og dyreste komponenten i en elbil. Det består av mange battericeller som er koblet sammen i moduler. Hvor godt cellene holder seg i balanse, og hvordan de tåler lading, kulde og varme, har mye å si for rekkevidde og levetid.',
        ],
      },
      {
        heading: 'Helsetilstand (SOH)',
        paragraphs: [
          'SOH står for «State of Health» og beskriver hvor mye kapasitet batteriet har igjen sammenlignet med da det var nytt. Noen biler oppgir en SOH-verdi direkte, mens andre bare gir tilgang til data som kan brukes til å vurdere tilstanden.',
          'En SOH-verdi er nyttig, men den bør alltid ses sammen med andre måleverdier og bilens historikk.',
        ],
      },
      {
        heading: 'Celleverdier, spenning og temperatur',
        paragraphs: [
          'Der bilen støtter det, kan diagnostikk vise spenningen på hver enkelt celle eller modul. Store forskjeller mellom cellene kan tyde på ubalanse eller en svak celle.',
          'Temperaturdata viser hvordan batteriet håndterer varme og kulde. Unormalt høye temperaturer eller store forskjeller mellom målepunktene kan være verdt å undersøke nærmere.',
        ],
        list: [
          'Spenning per celle eller modul',
          'Total batterispenning',
          'Temperaturer i batteripakken',
          'Eventuelle avvik mellom cellene',
        ],
      },
      {
        heading: 'BMS – batteristyringssystemet',
        paragraphs: [
          'BMS (Battery Management System) er styreenheten som overvåker og beskytter batteriet. Den holder oversikt over spenning, temperatur og ladenivå, balanserer cellene og kan begrense effekten hvis noe er utenfor normalområdet.',
          'Når BMS oppdager et avvik, lagres ofte en feilkode. Disse feilkodene kan gi viktige spor i feilsøkingen.',
        ],
      },
      {
        heading: 'Ladesystemet',
        paragraphs: [
          'Elbilen har en egen innebygd lader for AC-lading og kommuniserer med hurtigladeren ved DC-lading. Problemer som avbrutt lading, lav ladeeffekt eller at bilen ikke vil lade i det hele tatt, kan ha mange årsaker – i bilen, i kabelen eller i ladestasjonen.',
          'Diagnostikk kan vise feilkoder og tilgjengelige ladeparametere som hjelper med å avgrense hvor problemet ligger.',
        ],
      },
      {
        heading: 'Feilkoder og avvik',
        paragraphs: [
          'Ved en diagnostisk gjennomgang skannes bilens tilgjengelige styreenheter for lagrede og aktive feilkoder. Sammen med måleverdiene kan dette avdekke avvik som ellers ville vært vanskelige å oppdage.',
        ],
      },
      {
        heading: 'Kontroll før kjøp av brukt elbil',
        paragraphs: [
          'Batteriets tilstand er ofte det viktigste spørsmålet når man vurderer en brukt elbil. En diagnostisk kontroll før kjøp gir et bedre grunnlag for å vurdere bilen, og kan avdekke feilkoder eller avvik som ikke vises på dashbordet.',
          'Kontrollen gir et øyeblikksbilde av tilgjengelige data. Den erstatter ikke en full teknisk tilstandsvurdering, men er et nyttig supplement.',
        ],
      },
    ],
    note: 'Hvilke måleverdier som er tilgjengelige, varierer etter bilmerke, modell, årsmodell og diagnostikkutstyr. Ikke alle elbiler gir tilgang til SOH eller celleverdier.',
  },
  {
    slug: 'diesel-og-bensin-motordiagnostikk',
    category: 'Diesel og bensin',
    title: 'Diesel og bensin – motordiagnostikk',
    excerpt:
      'Varsellampe på dashbordet eller ujevn gange? Slik brukes OBD-diagnostikk til å lese feilkoder og livedata på biler med diesel- og bensinmotor.',
    description:
      'Motordiagnostikk for diesel- og bensinbiler: feilkodelesing, livedata, sensorer, innsprøytning, EGR, DPF og utslippssystem. Nyttig ved varsellamper og bruktbilkjøp.',
    image: 'blogg-motor.png',
    alt: 'Åpent motorrom med diagnoseverktøy som viser livedata fra motoren',
    sections: [
      {
        heading: 'OBD-diagnostikk på forbrenningsmotorer',
        paragraphs: [
          'Moderne diesel- og bensinmotorer styres av en motorstyringsenhet som hele tiden leser signaler fra et stort antall sensorer. Når noe er utenfor normalområdet, kan styreenheten lagre en feilkode og eventuelt tenne en varsellampe.',
          'Med et diagnoseverktøy koblet til bilens OBD-kontakt kan man lese ut disse feilkodene og følge med på hvordan motoren arbeider.',
        ],
      },
      {
        heading: 'Feilkoder',
        paragraphs: [
          'En feilkode forteller hvilket system eller hvilken krets styreenheten har registrert et avvik i. Koden er et viktig utgangspunkt, men den peker på et symptom – ikke nødvendigvis på årsaken.',
        ],
      },
      {
        heading: 'Livedata og sensorer',
        paragraphs: [
          'Livedata er måleverdier i sanntid mens motoren går. Ved å sammenligne verdiene med det som er forventet, kan man se om en sensor gir troverdige signaler, eller om motoren faktisk har et problem.',
        ],
        list: [
          'Motor- og kjølevæsketemperatur',
          'Luftmengde og ladetrykk',
          'Lambdaverdier og drivstofftrim (bensin)',
          'Turtall, belastning og gasspedalposisjon',
        ],
      },
      {
        heading: 'Innsprøytning',
        paragraphs: [
          'Innsprøytningssystemet sørger for riktig mengde drivstoff til riktig tid. På mange biler kan diagnostikk vise verdier som korreksjon per sylinder eller rail-trykk, noe som kan hjelpe ved ujevn gange, startproblemer eller økt forbruk.',
        ],
      },
      {
        heading: 'EGR, DPF og utslippssystemer',
        paragraphs: [
          'EGR-ventilen fører en del av eksosen tilbake til innsuget for å redusere utslipp. Den kan bli tilsotet over tid og gi effekttap eller feilkoder.',
          'Dieselbiler har ofte et partikkelfilter (DPF) som samler sot og regelmessig må brennes rent (regenerering). Der bilen støtter det, kan diagnostikk vise sotmengde, differansetrykk og status for regenerering.',
          'På bensinbiler er katalysator og lambdasonder sentrale deler av utslippssystemet, og avvik her gir ofte feilkoder.',
        ],
      },
      {
        heading: 'Når er diagnostikk nyttig?',
        paragraphs: [
          'Diagnostikk er et godt første steg når noe ikke virker som det skal. Det gir et faktabasert utgangspunkt i stedet for gjetning.',
        ],
        list: [
          'Når motorlampen eller en annen varsellampe lyser',
          'Ved effekttap, nødprogram eller ujevn gange',
          'Ved startproblemer eller økt forbruk',
          'Før kjøp av bruktbil, for å se etter lagrede feilkoder',
        ],
      },
      {
        heading: 'En feilkode betyr ikke alltid at delen må skiftes',
        paragraphs: [
          'En vanlig misforståelse er at feilkoden forteller hvilken del som skal byttes. En kode for en sensor kan for eksempel skyldes en løs kontakt, et ledningsbrudd, en lekkasje eller en feil et helt annet sted som får sensoren til å måle unormale verdier.',
          'Derfor bør feilkoder alltid ses sammen med livedata, symptomer og videre feilsøking før man bestemmer seg for å skifte en komponent.',
        ],
      },
    ],
    note: 'Hvilke feilkoder og måleverdier som kan leses ut, varierer etter bilmerke, modell, årsmodell og diagnostikkutstyr.',
  },
  {
    slug: 'hybrid-kontroll-av-bilens-systemer',
    category: 'Hybrid',
    title: 'Hybrid – kontroll av bilens systemer',
    excerpt:
      'En hybridbil kombinerer forbrenningsmotor og elektrisk drift. Les hvordan diagnostikk gir oversikt over hybridsystem, høyvoltbatteri og styringsenheter.',
    description:
      'Diagnostikk av hybridbil: hybridsystem, høyvoltbatteri, batteridata, styringsenheter, ladesystem og feilkoder. Derfor er kontroll nyttig før kjøp av brukt hybrid.',
    image: 'blogg-hybrid.png',
    alt: 'Ladbar hybridbil koblet til lader ved en fjord i skumringen',
    sections: [
      {
        heading: 'To drivsystemer i samme bil',
        paragraphs: [
          'En hybridbil har både forbrenningsmotor og en eller flere elektriske motorer. Bilen veksler selv mellom drivkildene, eller bruker dem sammen, avhengig av fart, belastning og ladenivå.',
          'Vanlige hybrider lader batteriet under kjøring og ved bremsing. Ladbare hybrider (plug-in) har et større batteri som også kan lades fra strømnettet, og kan ofte kjøre en strekning på ren elektrisk drift.',
        ],
      },
      {
        heading: 'Diagnostikk av hybridsystemet',
        paragraphs: [
          'Samspillet mellom motor, elektromotor, girkasse og batteri styres av flere styringsenheter som kommuniserer med hverandre. En feil i én del kan derfor gi symptomer et annet sted.',
          'En diagnostisk gjennomgang skanner de tilgjengelige styringsenhetene for feilkoder og gir oversikt over hvordan systemene fungerer sammen.',
        ],
      },
      {
        heading: 'Høyvoltbatteri og batteridata',
        paragraphs: [
          'Også hybridbiler har et høyvoltbatteri, selv om det vanligvis er mindre enn i en elbil. Der bilen støtter det, kan diagnostikk vise tilgjengelige batteridata som spenning, temperatur og eventuelle avvik mellom celler eller moduler.',
        ],
        list: [
          'Batterispenning og eventuelle celle- eller modulverdier',
          'Batteritemperaturer',
          'Feilkoder fra batteristyringen',
        ],
      },
      {
        heading: 'Styringsenheter og feilkoder',
        paragraphs: [
          'I tillegg til motorstyringen har en hybridbil egne styringsenheter for blant annet hybridsystem, batteri, omformer og lading. Feilkoder fra disse kan gi viktige spor når bilen viser varsellamper, går i nødprogram eller oppfører seg annerledes enn vanlig.',
        ],
      },
      {
        heading: 'Ladesystem på ladbare hybrider',
        paragraphs: [
          'På ladbare hybrider kan problemer med lading skyldes den innebygde laderen, ladekontakten, kabelen eller ladestasjonen. Feilkoder og tilgjengelige ladeparametere kan hjelpe med å avgrense årsaken.',
        ],
      },
      {
        heading: 'Regelmessig kontroll og bruktbilkjøp',
        paragraphs: [
          'Fordi hybridbilen har to drivsystemer, er det flere ting som kan slites eller svikte. En regelmessig diagnostisk kontroll kan avdekke lagrede feilkoder før de utvikler seg til større problemer.',
          'Før kjøp av brukt hybrid gir en diagnostisk gjennomgang et bedre grunnlag for å vurdere bilen – både forbrenningsmotoren, hybridsystemet og batteriet.',
        ],
      },
    ],
    note: 'Funksjoner og tilgjengelige data varierer mye mellom hybridmodeller, årsmodeller og diagnostikkutstyr. Ikke alle hybrider gir tilgang til detaljerte batteridata.',
  },
  {
    slug: 'hva-er-bildiagnostikk-og-obd',
    category: 'Grunnleggende',
    title: 'Hva er bildiagnostikk og OBD?',
    excerpt:
      'OBD, feilkoder og livedata forklart på en enkel måte – og hvorfor det er forskjell på å lese en feilkode og å finne den faktiske årsaken.',
    description:
      'Enkel forklaring av bildiagnostikk, OBD og OBD-II: hvordan diagnoseverktøy kommuniserer med styreenheter, hva feilkoder og livedata betyr, og hvorfor feilsøking er mer enn kodelesing.',
    image: 'blogg-obd.png',
    alt: 'Hånd som kobler et diagnoseverktøy til OBD-kontakten under dashbordet',
    sections: [
      {
        heading: 'Hva er OBD?',
        paragraphs: [
          'OBD står for «On-Board Diagnostics» og er bilens innebygde system for egendiagnose. Bilens styreenheter overvåker ulike funksjoner og lagrer informasjon når noe ikke fungerer som det skal.',
          'OBD-II er en standardisert versjon som gjør at diagnoseverktøy kan kobles til en felles kontakt, vanligvis plassert under dashbordet på førersiden. Standarden ble innført for å overvåke utslippsrelaterte systemer, men kontakten brukes i dag også til mye mer.',
        ],
      },
      {
        heading: 'Hvordan diagnoseverktøyet kommuniserer med bilen',
        paragraphs: [
          'Når diagnoseverktøyet kobles til OBD-kontakten, sender det forespørsler gjennom bilens datanettverk. Styreenhetene svarer med feilkoder, måleverdier og annen informasjon.',
          'Enkle kodelesere snakker ofte bare med motorstyringen og de standardiserte utslippsfunksjonene. Mer avanserte diagnoseverktøy kan kommunisere med flere av bilens styreenheter, avhengig av bilmodell og hva verktøyet støtter.',
        ],
      },
      {
        heading: 'Mange separate styreenheter',
        paragraphs: [
          'En moderne bil kan ha mange separate styreenheter – for eksempel for motor, girkasse, bremser og ABS, kollisjonsputer, klima, lys, batteri og lading. Hver av dem har sine egne feilkoder og måleverdier.',
          'Hvilke styreenheter man får tilgang til, og hvor mye informasjon de gir, avhenger av bilmerke, modell, årsmodell og diagnoseutstyret som brukes.',
        ],
      },
      {
        heading: 'Hva er feilkoder?',
        paragraphs: [
          'En feilkode (ofte kalt DTC, «Diagnostic Trouble Code») er en kode som styreenheten lagrer når den registrerer et avvik. Koden består vanligvis av en bokstav og fire tegn, der bokstaven viser hvilket område det gjelder.',
        ],
        list: [
          'P – drivlinje (motor og girkasse)',
          'B – karosseri (for eksempel kollisjonsputer og komfort)',
          'C – understell (for eksempel bremser og styring)',
          'U – kommunikasjon mellom styreenheter',
        ],
      },
      {
        heading: 'Hva er livedata?',
        paragraphs: [
          'Livedata er måleverdier som vises i sanntid, for eksempel temperatur, spenning, trykk og turtall. Ved å følge med på verdiene mens bilen går, kan man se hvordan systemene faktisk oppfører seg og om sensorene gir troverdige signaler.',
        ],
      },
      {
        heading: 'Å lese en feilkode er ikke det samme som å finne feilen',
        paragraphs: [
          'Feilkoden forteller hvor styreenheten har oppdaget et avvik, men ikke alltid hvorfor. Den samme koden kan ha flere mulige årsaker – alt fra en defekt komponent til en dårlig kontakt, en ledningsfeil eller en feil i et annet system.',
          'Å finne den faktiske årsaken krever ofte at man ser på livedata, symptomer og bilens historikk, og gjør videre målinger. Kodelesing er derfor starten på feilsøkingen, ikke svaret.',
        ],
      },
    ],
    note: 'Tilgang til styreenheter, feilkoder og måleverdier avhenger av bilmerke, modell, årsmodell og diagnostikkutstyr.',
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}
