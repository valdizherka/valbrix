import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const accentColor = '#b8860a'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display font-bold text-gray-900 text-lg">{item.question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '400px' : '0px' }}
      >
        <p className="text-gray-500 leading-relaxed pb-6 pr-10">{item.answer}</p>
      </div>
    </div>
  )
}

const servicesTable = [
  { slug: 'seo-optimization', title: 'SEO-Optimierung', fit: 'Anfragen über Google, ohne für jeden Klick zu zahlen.', speed: '3 bis 6 Monate' },
  { slug: 'google-ads', title: 'Google Ads', fit: 'Anfragen von Leuten, die genau jetzt suchen.', speed: 'Ein paar Tage' },
  { slug: 'meta-ads', title: 'Meta Ads', fit: 'Auf Facebook und Instagram gesehen werden, bevor jemand sucht.', speed: 'Ein paar Tage' },
  { slug: 'social-media-management', title: 'Social-Media-Management', fit: 'Vertrauen, bevor der erste Anruf kommt.', speed: 'Laufend' },
  { slug: 'brand-strategy', title: 'Markenstrategie', fit: 'Klar sagen, wofür Sie stehen.', speed: 'Einmal machen, wirkt überall' },
  { slug: 'content-creation', title: 'Content-Erstellung', fit: 'Fotos, Videos und Texte, die nach Ihnen aussehen.', speed: 'Laufend' },
  { slug: 'lead-generation', title: 'Lead-Generierung', fit: 'Anfragen, die nicht vom Zufall abhängen.', speed: 'Ein paar Wochen' },
  { slug: 'website-landing-page-strategy', title: 'Website- & Landing-Page-Strategie', fit: 'Aus Besuchern werden Anrufe.', speed: 'Sofort messbar' },
  { slug: 'analytics-reporting', title: 'Analytics & Reporting', fit: 'Wissen, wohin jeder Euro geht.', speed: 'Ab dem ersten Monat' },
]

const detailSections = [
  {
    heading: 'Gefunden werden: SEO & Google-Unternehmensprofil',
    slug: 'seo-optimization',
    linkLabel: 'SEO-Optimierung',
    body: 'Für fast jeden Betrieb in Kaufbeuren ist das der wichtigste Punkt. Wer bei Google Maps oben steht, bekommt Anrufe. Jeden Tag. Ohne für jeden Klick zu zahlen. Dafür braucht es mehr als ein paar Keywords auf der Website: ein vollständiges Google-Profil, überall die gleichen Kontaktdaten, eine saubere Website und Seiten, die beantworten, was die Leute hier wirklich suchen. Alles dazu auf der',
  },
  {
    heading: 'Sofort sichtbar: Google Ads & Meta Ads',
    slug: 'google-ads',
    body: null,
  },
  {
    heading: 'Vertrauen aufbauen: Social-Media-Management',
    slug: 'social-media-management',
    linkLabel: 'Social-Media-Management',
    body: 'Bevor jemand anruft, schaut er auf Instagram. Ist da seit 2022 nichts mehr passiert, ruft er den Nächsten an. Wir sorgen dafür, dass Ihr Profil lebt. Mehr dazu auf der',
  },
  {
    heading: 'Das Fundament: Markenstrategie, Content & Website',
    slug: 'brand-strategy',
    linkLabel: 'Markenstrategie',
    body: null,
  },
]

const faqItems = [
  {
    question: 'Welche Leistung passt zu meinem Unternehmen?',
    answer: 'Kommt drauf an, wo Sie stehen. Bei Google kaum sichtbar? Dann zuerst SEO und Ihr Google-Profil. Sie brauchen nächste Woche Anfragen? Dann Google Ads. Im Gespräch sagen wir Ihnen ehrlich, was zuerst kommt.',
  },
  {
    question: 'Was kostet Online-Marketing für ein Unternehmen in Kaufbeuren?',
    answer: 'Das sagen wir Ihnen nach dem Erstgespräch. Mit einer konkreten Zahl. Keine Pakete von der Stange, keine versteckten Kosten.',
  },
  {
    question: 'Muss ich alle Leistungen gleichzeitig buchen?',
    answer: 'Nein. Die meisten starten mit einer oder zwei Sachen. Wenn die laufen, kommt der Rest.',
  },
  {
    question: 'Was ist der Unterschied zwischen SEO und bezahlter Werbung?',
    answer: 'SEO braucht Zeit und bringt dafür dauerhaft Anfragen. Werbung bringt sofort Anfragen und hört auf, sobald Sie aufhören zu zahlen. Am besten beides.',
  },
  {
    question: 'Arbeitet ihr auch mit Handwerksbetrieben und kleinen Unternehmen?',
    answer: 'Ja. Das sind sogar unsere Lieblingskunden. Inhabergeführt, gute Arbeit, nur bei Google unsichtbar.',
  },
  {
    question: 'Wie schnell sehe ich erste Ergebnisse?',
    answer: 'Bei Werbung in ein paar Tagen. Bei SEO nach ein paar Monaten. Und bei Google Maps garantieren wir Ihnen für Ihr Haupt-Keyword die Top 3 in 90 Tagen.',
  },
  {
    question: 'Arbeitet ihr nur mit Unternehmen direkt in Kaufbeuren?',
    answer: 'Nein. Wir sitzen in Kaufbeuren, arbeiten aber mit Betrieben im ganzen Allgäu und darüber hinaus. Das meiste läuft sowieso über Telefon und Video.',
  },
  {
    question: 'Was, wenn ich nicht weiß, welche Leistung ich brauche?',
    answer: 'Dann sind Sie wie fast alle, die uns schreiben. Im Erstgespräch schauen wir uns Ihre Situation an und sagen Ihnen, wo Sie anfangen sollten. Kostet nichts.',
  },
]

export default function ServicesOverviewPage() {
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    document.title = 'Marketing Agentur Kaufbeuren: Leistungen im Überblick | Valbrix Digital'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute(
      'content',
      'Marketing Agentur in Kaufbeuren: SEO, Google Ads, Social Media & mehr im Vergleich. Finden Sie die richtige Leistung für Ihr Unternehmen im Ostallgäu.'
    )
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
            ← Zurück zur Startseite
          </Link>
          <div className="section-label mb-6">Marketing Agentur Kaufbeuren</div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-gray-900 tracking-tight leading-tight mb-6">
            Marketing-Agentur Kaufbeuren:<br />
            <span style={{ color: accentColor }}>Was wir machen. Und was es bringt.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            Sie haben gerade „Marketing Agentur Kaufbeuren“ gegoogelt. Und hier sind Sie. (Funktioniert also.) Auf dieser Seite steht, was wir machen, wie lange es dauert und was es Ihnen bringt. Ohne Fachchinesisch.
          </p>
        </div>
      </section>

      {/* Why local marketing matters */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-6">
            Warum in Kaufbeuren nur die Top 3 angerufen werden
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            Jemand in Neugablonz hat einen Rohrbruch. Er nimmt das Handy und googelt „Klempner Kaufbeuren“. Ganz oben zwei Anzeigen. Die scrollt er weg. Darunter die Karte mit drei Betrieben, die da ohne Werbung stehen. Einen davon ruft er an.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            Wer auf Seite 2 steht, bekommt den Anruf nicht. Egal, wie gut der Betrieb ist.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            Genau da verlieren die meisten Betriebe im Ostallgäu ihre Kunden. Gute Arbeit, schwacher Google-Auftritt. Und oben steht die Konkurrenz aus Kempten oder Augsburg, weil die sich darum kümmert.
          </p>
        </div>
      </section>

      {/* Services table */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            Unsere Leistungen, ehrlich eingeordnet
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Was wofür gut ist. Und wie lange es dauert, bis Sie etwas merken.
          </p>
          <div className="overflow-x-auto rounded-2xl mb-8" style={{ border: '1px solid #e2e8f0' }}>
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th className="px-5 py-4 font-display font-bold text-gray-900">Leistung</th>
                  <th className="px-5 py-4 font-display font-bold text-gray-900">Wofür</th>
                  <th className="px-5 py-4 font-display font-bold text-gray-900">Bis Sie es merken</th>
                </tr>
              </thead>
              <tbody>
                {servicesTable.map((row, i) => (
                  <tr key={row.slug} className={i !== servicesTable.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="px-5 py-4 align-top whitespace-nowrap">
                      <Link to={`/leistungen/${row.slug}`} className="font-semibold hover:underline" style={{ color: accentColor }}>
                        {row.title}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-gray-500 align-top">{row.fit}</td>
                    <td className="px-5 py-4 text-gray-500 align-top whitespace-nowrap">{row.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {detailSections.map((section) => (
            <div key={section.heading} className="mb-8">
              <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 mb-3">{section.heading}</h3>
              {section.body ? (
                <p className="text-gray-500 leading-relaxed">
                  {section.body}{' '}
                  <Link to={`/leistungen/${section.slug}`} className="font-semibold hover:underline" style={{ color: accentColor }}>
                    {section.linkLabel}
                  </Link>
                  -Seite.
                </p>
              ) : section.slug === 'google-ads' ? (
                <p className="text-gray-500 leading-relaxed">
                  SEO braucht ein paar Monate.{' '}
                  <Link to="/leistungen/google-ads" className="font-semibold hover:underline" style={{ color: accentColor }}>
                    Google Ads
                  </Link>{' '}
                  und{' '}
                  <Link to="/leistungen/meta-ads" className="font-semibold hover:underline" style={{ color: accentColor }}>
                    Meta Ads
                  </Link>{' '}
                  bringen Anfragen in ein paar Tagen. Google Ads erwischt die Leute, die gerade suchen. Meta Ads zeigt Sie auf Facebook und Instagram, bevor überhaupt jemand sucht. Der Haken: Budget aus, Anfragen weg. Am selben Tag. Deshalb ist Werbung bei uns der Turbo. Der Motor ist SEO.
                </p>
              ) : (
                <p className="text-gray-500 leading-relaxed">
                  Die beste Anzeige bringt nichts, wenn die Website danach aussieht wie 2009. Deshalb gehören eine klare{' '}
                  <Link to="/leistungen/brand-strategy" className="font-semibold hover:underline" style={{ color: accentColor }}>
                    Markenstrategie
                  </Link>
                  , guter{' '}
                  <Link to="/leistungen/content-creation" className="font-semibold hover:underline" style={{ color: accentColor }}>
                    Content
                  </Link>{' '}
                  und eine Website, die Anrufe bringt, dazu (siehe{' '}
                  <Link to="/leistungen/website-landing-page-strategy" className="font-semibold hover:underline" style={{ color: accentColor }}>
                    Website- & Landing-Page-Strategie
                  </Link>
                  ). Sonst zahlen Sie für Klicks, die nirgendwo hinführen.
                </p>
              )}
            </div>
          ))}

          <p className="text-gray-500 leading-relaxed mt-10 pt-8 border-t border-gray-100">
            Sie wollen erst verstehen, wie das alles zusammenhängt? Agentur oder Freelancer, woran Sie eine gute Agentur erkennen, was Sie selbst machen können: Steht alles in unserem{' '}
            <Link to="/ratgeber" className="font-semibold hover:underline" style={{ color: accentColor }}>
              Ratgeber für Online-Marketing in Kaufbeuren
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <div className="section-label mb-6">Häufig gestellte Fragen</div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight">
              Fragen zu unseren Leistungen
            </h2>
          </div>
          <div>
            {faqItems.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion / CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="section-label justify-center mb-6">Kostenlos. Ohne Haken.</div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            Bereit, in Kaufbeuren gefunden zu werden?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Im kostenlosen Strategiegespräch schauen wir uns Ihren Google-Auftritt an. Sie erfahren, warum Sie gerade nicht oben stehen. Und was wir dagegen machen. 30 Minuten, dann wissen Sie Bescheid.
          </p>
          <Link to="/#contact" className="btn-primary inline-flex px-8 py-4 text-base">
            <span>Kostenloses Strategiegespräch buchen</span>
            <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
