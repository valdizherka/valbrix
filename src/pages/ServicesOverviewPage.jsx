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

const optionComparison = [
  { option: 'Freelancer', strength: 'Günstig, oft spezialisiert auf einen Kanal', limit: 'Deckt selten SEO, Ads, Social Media und Website gleichzeitig ab' },
  { option: 'Inhouse-Mitarbeiter', strength: 'Kennt das Unternehmen genau', limit: 'Eine Person kann kaum Ads, SEO, Content, Design und Analytics gleichzeitig meistern' },
  { option: 'Full-Service-Agentur', strength: 'Ein Team, mehrere Disziplinen, aufeinander abgestimmte Strategie', limit: 'Erfordert mehr Vertrauen und klare Kommunikation' },
]

const servicesTable = [
  { slug: 'seo-optimization', title: 'SEO-Optimierung', fit: 'Langfristige, kostenlose Sichtbarkeit bei Google', speed: 'Mehrere Monate' },
  { slug: 'google-ads', title: 'Google Ads', fit: 'Sofortige Sichtbarkeit bei aktiver Kaufabsicht', speed: 'Wenige Tage' },
  { slug: 'meta-ads', title: 'Meta Ads', fit: 'Reichweite und Sichtbarkeit auf Facebook & Instagram', speed: 'Wenige Tage' },
  { slug: 'social-media-management', title: 'Social-Media-Management', fit: 'Vertrauen aufbauen, Community pflegen', speed: 'Laufend' },
  { slug: 'brand-strategy', title: 'Markenstrategie', fit: 'Klare Positionierung als Basis für alles andere', speed: 'Einmalig, wirkt danach überall' },
  { slug: 'content-creation', title: 'Content-Erstellung', fit: 'Material für Website, Ads und Social Media', speed: 'Laufend' },
  { slug: 'lead-generation', title: 'Lead-Generierung', fit: 'Kontinuierlicher Strom qualifizierter Anfragen', speed: 'Wochen bis Monate' },
  { slug: 'website-landing-page-strategy', title: 'Website- & Landing-Page-Strategie', fit: 'Besucher tatsächlich in Anfragen verwandeln', speed: 'Sofort messbar' },
  { slug: 'analytics-reporting', title: 'Analytics & Reporting', fit: 'Wissen, was funktioniert und was nicht', speed: 'Laufend' },
]

const detailSections = [
  {
    heading: 'Sichtbarkeit aufbauen: SEO & Google Unternehmensprofil',
    slug: 'seo-optimization',
    linkLabel: 'SEO-Optimierung',
    body: 'SEO ist für die meisten lokalen Unternehmen in Kaufbeuren der wichtigste einzelne Hebel, weil er langfristig kostenlosen Traffic bringt. Dazu gehört weit mehr als nur ein paar Keywords in die Website zu schreiben: ein vollständig optimiertes Google Unternehmensprofil, konsistente Kontaktdaten über alle Verzeichnisse hinweg, technisch saubere Seitenstruktur und Inhalte, die tatsächlich beantworten, wonach lokal gesucht wird.',
  },
  {
    heading: 'Sofort sichtbar: Google Ads & Meta Ads',
    slug: 'google-ads',
    body: null,
  },
  {
    heading: 'Community & Reichweite: Social-Media-Management',
    slug: 'social-media-management',
    linkLabel: 'Social-Media-Management',
    body: 'Für viele lokale Unternehmen ist Social Media der erste Kontaktpunkt, bevor jemand überhaupt googelt. Social-Media-Management sorgt für konsistente Präsenz auf Instagram, Facebook und Co. - nicht als Selbstzweck, sondern um Vertrauen aufzubauen, bevor der potenzielle Kunde anfragt.',
  },
  {
    heading: 'Fundament: Markenstrategie, Content & Website',
    slug: 'brand-strategy',
    linkLabel: 'Markenstrategie',
    body: null,
  },
]

const localTips = [
  'Prüfen Sie, ob Name, Adresse und Telefonnummer auf Ihrer Website exakt mit Ihrem Google Unternehmensprofil übereinstimmen.',
  'Vervollständigen Sie Ihr Google-Profil zu 100 % - jedes leere Feld ist ein verschenkter Punkt.',
  'Bitten Sie drei zufriedene Kunden aktiv um eine Google-Bewertung.',
  'Prüfen Sie, ob Ihr Firmenname und Ihre Stadt im Titel-Tag Ihrer Website vorkommen.',
  'Laden Sie aktuelle Fotos Ihres Unternehmens hoch - Profile mit aktuellen Bildern werden nachweislich öfter angeklickt.',
]

const chooseChecklist = [
  'Kennt sie den lokalen Markt tatsächlich? Oder wird dieselbe Strategie bei jedem Kunden kopiert?',
  'Gibt es einen festen Ansprechpartner? Oder wechseln Sie ständig den Kontakt?',
  'Sind die Berichte konkret? Klare Kennzahlen statt vager "Reichweite ist gestiegen"-Aussagen.',
  'Müssen Sie sich langfristig binden? Monatliche Kündbarkeit zeigt, dass die Agentur von Ergebnissen lebt, nicht von Verträgen.',
  'Deckt sie mehrere Kanäle ab? SEO, Ads und Social Media funktionieren am besten zusammen, nicht isoliert.',
]

const faqItems = [
  {
    question: 'Welche Leistung passt zu meinem Unternehmen?',
    answer: 'Das hängt vom Ausgangspunkt ab. Wenn Sie kaum online sichtbar sind, starten wir meist mit SEO und einem optimierten Google-Profil. Brauchen Sie sofort Anfragen, ist bezahlte Werbung der schnellere Weg.',
  },
  {
    question: 'Was kostet Online-Marketing für ein Unternehmen in Kaufbeuren?',
    answer: 'Das hängt vom Umfang ab. Wir nennen Ihnen nach einem kostenlosen Strategiegespräch einen konkreten Preis - keine Pauschalpakete.',
  },
  {
    question: 'Muss ich alle Leistungen gleichzeitig buchen?',
    answer: 'Nein. Die meisten Kunden starten mit ein bis zwei Leistungen und bauen darauf auf, sobald sich Ergebnisse zeigen.',
  },
  {
    question: 'Was ist der Unterschied zwischen SEO und bezahlter Werbung?',
    answer: 'SEO baut dauerhafte, kostenlose Sichtbarkeit auf, braucht aber Zeit. Werbung bringt sofort Anfragen, kostet aber, solange sie läuft. Idealerweise ergänzen sich beide.',
  },
  {
    question: 'Arbeitet ihr auch mit Handwerksbetrieben und kleinen Unternehmen?',
    answer: 'Ja - ein großer Teil unserer Arbeit im Ostallgäu ist genau auf inhabergeführte, lokale Betriebe zugeschnitten.',
  },
  {
    question: 'Wie schnell sehe ich erste Ergebnisse?',
    answer: 'Bezahlte Werbung kann innerhalb weniger Tage Anfragen bringen. SEO und organisches Wachstum brauchen in der Regel einige Monate, halten dafür aber deutlich länger an.',
  },
  {
    question: 'Arbeitet ihr nur mit Unternehmen direkt in Kaufbeuren?',
    answer: 'Nein - wir sitzen in Kaufbeuren und kennen den bayerischen Markt gut, arbeiten aber auch remote mit Kunden in der gesamten Region.',
  },
  {
    question: 'Was, wenn ich nicht weiß, welche Leistung ich brauche?',
    answer: 'Kein Problem - im kostenlosen Strategiegespräch schauen wir uns Ihre aktuelle Situation gemeinsam an und empfehlen den sinnvollsten Startpunkt.',
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
            <span style={{ color: accentColor }}>Alle Leistungen im Überblick</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            Wer bei Google "Marketing Agentur Kaufbeuren" eingibt, sucht selten die günstigste Option - sondern die Agentur, die wirklich versteht, wie ein lokales Unternehmen im Ostallgäu online sichtbar wird. Diese Seite zeigt Ihnen in klarer Sprache, welche Leistungen es gibt, wofür sie gedacht sind und wie Sie die für Ihr Unternehmen richtige Kombination finden.
          </p>
        </div>
      </section>

      {/* Why local marketing matters */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-6">
            Warum lokales Marketing in Kaufbeuren heute entscheidet
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            Die meisten Kaufentscheidungen für lokale Dienstleistungen beginnen heute mit einer Google-Suche, nicht mit dem Branchenbuch oder Mundpropaganda. Wenn jemand in Kaufbeuren nach einem Handwerksbetrieb, einer Praxis oder einem Ladengeschäft sucht, landet er fast immer zuerst bei den Top-3-Ergebnissen auf Google Maps. Wer dort nicht auftaucht, existiert für einen Großteil der potenziellen Kunden schlicht nicht - unabhängig davon, wie gut das eigentliche Angebot ist.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            Das betrifft nicht nur große Unternehmen. Gerade inhabergeführte Betriebe im Ostallgäu - vom Handwerksbetrieb über die Praxis bis zum Einzelhandel - konkurrieren online zunehmend mit überregionalen Anbietern, die einfach mehr Budget in Sichtbarkeit stecken. Der Unterschied liegt selten am Angebot, sondern daran, wer online gefunden wird.
          </p>
        </div>
      </section>

      {/* What is an agency */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            Was macht eine Marketing-Agentur eigentlich?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Bevor wir zu den einzelnen Leistungen kommen, lohnt sich ein kurzer Realitätscheck: Was unterscheidet eine Agentur von den Alternativen?
          </p>
          <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid #e2e8f0' }}>
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th className="px-5 py-4 font-display font-bold text-gray-900">Option</th>
                  <th className="px-5 py-4 font-display font-bold text-gray-900">Stärke</th>
                  <th className="px-5 py-4 font-display font-bold text-gray-900">Grenze</th>
                </tr>
              </thead>
              <tbody>
                {optionComparison.map((row, i) => (
                  <tr key={row.option} className={i !== optionComparison.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="px-5 py-4 font-semibold text-gray-900 align-top whitespace-nowrap">{row.option}</td>
                    <td className="px-5 py-4 text-gray-500 align-top">{row.strength}</td>
                    <td className="px-5 py-4 text-gray-500 align-top">{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed mt-6">
            Eine gute Agentur ersetzt nicht einen Mitarbeiter - sie bündelt mehrere Spezialisten, die normalerweise separat eingestellt werden müssten, und stimmt deren Arbeit aufeinander ab.
          </p>
        </div>
      </section>

      {/* Services table */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            Die wichtigsten Leistungen im Überblick
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Hier eine kurze Orientierung, welche Leistung wofür gedacht ist:
          </p>
          <div className="overflow-x-auto rounded-2xl mb-8" style={{ border: '1px solid #e2e8f0' }}>
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th className="px-5 py-4 font-display font-bold text-gray-900">Leistung</th>
                  <th className="px-5 py-4 font-display font-bold text-gray-900">Wofür geeignet</th>
                  <th className="px-5 py-4 font-display font-bold text-gray-900">Zeit bis Wirkung</th>
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
                  Während SEO Zeit braucht, bringen{' '}
                  <Link to="/leistungen/google-ads" className="font-semibold hover:underline" style={{ color: accentColor }}>
                    Google Ads
                  </Link>{' '}
                  und{' '}
                  <Link to="/leistungen/meta-ads" className="font-semibold hover:underline" style={{ color: accentColor }}>
                    Meta Ads
                  </Link>{' '}
                  innerhalb weniger Tage Anfragen. Google Ads erreicht Menschen mit aktiver Kaufabsicht, Meta Ads baut Sichtbarkeit auf Facebook und Instagram auf, bevor der Bedarf akut wird. Der Haken bei beiden: Sobald das Budget pausiert, verschwindet die Sichtbarkeit sofort wieder. Deshalb funktioniert bezahlte Werbung am besten als Ergänzung zu SEO, nicht als Ersatz dafür.
                </p>
              ) : (
                <p className="text-gray-500 leading-relaxed">
                  Alles darüber steht und fällt mit einer klaren{' '}
                  <Link to="/leistungen/brand-strategy" className="font-semibold hover:underline" style={{ color: accentColor }}>
                    Markenstrategie
                  </Link>
                  , durchdachtem{' '}
                  <Link to="/leistungen/content-creation" className="font-semibold hover:underline" style={{ color: accentColor }}>
                    Content
                  </Link>{' '}
                  und einer Website, die tatsächlich konvertiert (siehe{' '}
                  <Link to="/leistungen/website-landing-page-strategy" className="font-semibold hover:underline" style={{ color: accentColor }}>
                    Website- & Landing-Page-Strategie
                  </Link>
                  ). Wer hier Lücken hat, verschenkt einen Teil jeder Anzeige und jedes Google-Rankings.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Local scene */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            Die lokale Szene: Wie Unternehmen im Ostallgäu online gefunden werden
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            Kaufbeuren liegt geografisch zwischen Kempten, Memmingen und Augsburg - und viele Unternehmen hier konkurrieren nicht nur lokal, sondern auch mit Anbietern aus diesen Nachbarstädten, sobald Kunden ihre Google-Suche etwas weiter fassen. Das bedeutet zwei Dinge für Ihre Sichtbarkeit:
          </p>
          <ol className="space-y-4 mb-4">
            <li className="text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-900">1. Lokale Signale zählen doppelt.</span> Ein vollständiges Google Unternehmensprofil mit korrekter Adresse, passenden Kategorien und regelmäßigen Bewertungen ist oft der Unterschied zwischen Platz 1 und Seite 2.
            </li>
            <li className="text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-900">2. Nischen-Suchbegriffe sind Gold wert.</span> Statt nur um "Marketing Agentur Bayern" zu konkurrieren, lohnt es sich, gezielt um Begriffe wie "Handwerker Kaufbeuren" oder "Physiotherapie Ostallgäu" zu ranken - dort ist die Konkurrenz kleiner und die Suchintention klarer.
            </li>
          </ol>
          <p className="text-gray-500 text-lg leading-relaxed">
            Wer online in dieser Region gefunden werden will, kommt an einer sauberen lokalen Grundlage nicht vorbei - bevor überhaupt über Werbebudget nachgedacht wird. Mehr dazu auf unserer Seite zur{' '}
            <Link to="/marketing-agentur-kaufbeuren" className="font-semibold hover:underline" style={{ color: accentColor }}>
              Marketing-Agentur in Kaufbeuren
            </Link>
            .
          </p>
        </div>
      </section>

      {/* How to choose */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-6">
            Wie Sie die richtige Agentur in Kaufbeuren auswählen
          </h2>
          <div className="rounded-2xl p-7 md:p-9" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <div className="space-y-4">
              {chooseChecklist.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5"
                    style={{ background: accentColor }}
                  >
                    ✓
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical tips */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            5 Dinge, die Sie diese Woche selbst umsetzen können
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Auch ohne Agentur können Sie schon jetzt etwas bewegen:
          </p>
          <ol className="space-y-4">
            {localTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="font-display font-black text-2xl shrink-0 w-8" style={{ color: accentColor }}>
                  {i + 1}
                </span>
                <p className="text-gray-500 leading-relaxed pt-1">{tip}</p>
              </li>
            ))}
          </ol>
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
          <div className="section-label justify-center mb-6">Kostenlos & unverbindlich</div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            Bereit, in Kaufbeuren gefunden zu werden?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Online sichtbar zu werden, ist in Kaufbeuren kein Zufall - es ist eine Kombination aus sauberer lokaler Grundlage, der richtigen Mischung aus SEO, Werbung und Content, und einem Partner, der die Region tatsächlich kennt. Buchen Sie ein kostenloses Strategiegespräch - wir zeigen Ihnen konkret, was Ihr Unternehmen aktuell davon abhält, bei Google gefunden zu werden.
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
