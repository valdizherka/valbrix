import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const accentColor = '#b8860a'

const optionComparison = [
  { option: 'Freelancer', strength: 'Günstig. Meistens richtig gut in einer Sache.', limit: 'Nur in einer Sache. Wer macht den Rest?' },
  { option: 'Eigener Mitarbeiter', strength: 'Kennt Ihren Betrieb in- und auswendig.', limit: '€3.400 im Monat plus Lohnnebenkosten. Und kann trotzdem nicht alles.' },
  { option: 'Agentur', strength: 'SEO, Ads, Social Media und Website aus einer Hand.', limit: 'Sie müssen jemandem vertrauen. Also nehmen Sie eine, die ans Telefon geht.' },
]

const localTips = [
  'Name, Adresse, Telefon: Steht auf Ihrer Website exakt das Gleiche wie im Google-Profil? Jeder Unterschied kostet Sie Plätze.',
  'Füllen Sie Ihr Google-Profil zu 100 % aus. Jedes leere Feld ist ein Punkt für die Konkurrenz.',
  'Schreiben Sie heute drei zufriedenen Kunden: „Würden Sie uns eine kurze Google-Bewertung schreiben?“ Mehr braucht es nicht.',
  'Fahren Sie mit der Maus über den Tab Ihrer Website. Steht da Ihre Stadt und was Sie machen? Wenn da nur „Home“ steht, wissen Sie, was zu tun ist.',
  'Laden Sie fünf neue Fotos hoch. Vom Team, von der Arbeit, vom Laden. Profile mit aktuellen Fotos werden öfter angeklickt.',
]

const chooseChecklist = [
  'Fragen Sie nach einem Kunden aus der Region. Und rufen Sie den an.',
  'Wer ist Ihr Ansprechpartner? Wenn die Antwort „das Team“ ist, wissen Sie Bescheid.',
  'Lassen Sie sich einen Monatsbericht zeigen. Verstehen Sie ihn in zwei Minuten? Gut. Wenn nicht, ist es Fachchinesisch.',
  'Wie lange müssen Sie unterschreiben? 12 Monate heißt: Die verlassen sich auf den Vertrag. Wir arbeiten monatlich kündbar.',
  'Machen die SEO, Ads und Social Media? Oder nur eins davon und verkaufen es als alles?',
]

export default function RatgeberPage() {
  useEffect(() => {
    document.title = 'Online-Marketing Kaufbeuren: Ratgeber für lokale Unternehmen | Valbrix Digital'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute(
      'content',
      'Agentur, Freelancer oder selbst machen? So finden Sie eine gute Marketing-Agentur in Kaufbeuren. Plus 5 Dinge, die Sie diese Woche selbst erledigen.'
    )
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
            ← Zurück zur Startseite
          </Link>
          <div className="section-label mb-6">Ratgeber</div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-gray-900 tracking-tight leading-tight mb-6">
            Online-Marketing in Kaufbeuren:<br />
            <span style={{ color: accentColor }}>Der ehrliche Ratgeber</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            Bevor Sie irgendwem Geld geben, lesen Sie das hier. Fünf Minuten. Danach wissen Sie, was Sie brauchen. Und was nicht.
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
            Selbst machen haben Sie wahrscheinlich schon probiert. Bleiben drei Möglichkeiten. Ehrlich verglichen:
          </p>
          <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid #e2e8f0' }}>
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th className="px-5 py-4 font-display font-bold text-gray-900">Wer</th>
                  <th className="px-5 py-4 font-display font-bold text-gray-900">Gut</th>
                  <th className="px-5 py-4 font-display font-bold text-gray-900">Der Haken</th>
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
            Wir sind die dritte Option. Aber klein genug, dass Sie immer mit dem reden, der die Arbeit macht.
          </p>
        </div>
      </section>

      {/* Local scene */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            So werden Sie im Ostallgäu gefunden
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            Kaufbeuren liegt zwischen Kempten, Memmingen und Augsburg. Sobald jemand seine Suche etwas weiter fasst, konkurrieren Sie plötzlich mit Betrieben aus allen drei Städten. Dann entscheiden zwei Dinge:
          </p>
          <ol className="space-y-4 mb-4">
            <li className="text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-900">1. Ihr Google-Profil.</span> Richtige Kategorie, vollständige Angaben, regelmäßig neue Bewertungen. Das trennt Platz 1 von Seite 2.
            </li>
            <li className="text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-900">2. Die richtigen Suchbegriffe.</span> Um „Marketing Agentur Bayern“ kämpfen Hunderte. Um „Fliesenleger Kaufbeuren“ kämpfen drei. Da gewinnen Sie.
            </li>
          </ol>
          <p className="text-gray-500 text-lg leading-relaxed">
            Erst die Grundlage. Dann Werbebudget. Andersrum verbrennen Sie Geld. Mehr dazu auf unserer Seite zur{' '}
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
            Woran Sie eine gute Agentur in Kaufbeuren erkennen
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
            Kostet nichts. Dauert einen Nachmittag. Bringt mehr als so manche Agentur im ersten Monat.
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

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="section-label justify-center mb-6">Lieber machen lassen?</div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            Dann übernehmen wir das.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            SEO, Google Ads, Social Media und alles dazwischen. Für Betriebe in Kaufbeuren und im ganzen Ostallgäu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/leistungen" className="btn-primary inline-flex px-8 py-4 text-base">
              <span>Unsere Leistungen ansehen</span>
              <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/#contact" className="btn-outline inline-flex px-8 py-4 text-base">
              Kostenloses Strategiegespräch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
