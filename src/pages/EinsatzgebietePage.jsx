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

const districts = [
  { name: 'Altstadt', body: 'Historisches Zentrum mit vielen Dienstleistern und Einzelhandel.' },
  { name: 'Neugablonz', body: 'Traditionell geprägt von Handwerk und Kleingewerbe.' },
  { name: 'Hafenberg', body: 'Wohn- und Gewerbelage im Nordosten der Stadt.' },
  { name: 'Oberbeuren', body: 'Gewerbegebiet mit vielen inhabergeführten Betrieben.' },
  { name: 'Ostend', body: 'Wachsender Stadtteil mit gemischter Unternehmensstruktur.' },
]

const reasons = [
  {
    title: 'Wir kennen die Konkurrenzsituation vor Ort',
    body: 'Wir wissen, wie hart umkämpft bestimmte Branchen in Kaufbeuren sind und wo tatsächlich Chancen liegen - statt einer generischen Strategie, die überall gleich aussieht.',
  },
  {
    title: 'Ein fester Ansprechpartner',
    body: 'Kein wechselnder Junior-Account-Manager - Sie sprechen immer mit jemandem, der Ihr Unternehmen kennt.',
  },
  {
    title: 'Monatlich kündbar',
    body: 'Wir arbeiten ohne lange Vertragsbindung, weil wir überzeugt sind, dass die Ergebnisse Sie halten, nicht der Vertrag.',
  },
  {
    title: 'Alles aus einer Hand',
    body: 'SEO, Google Ads, Meta Ads, Content und Social Media - abgestimmt statt isoliert voneinander betrieben.',
  },
]

const steps = [
  'Wir vereinbaren ein kostenloses Erstgespräch - per Video oder Telefon, ganz wie es für Sie passt.',
  'Wir lernen Ihr Unternehmen, Ihre Ziele und Ihre aktuelle Situation kennen.',
  'Sie erhalten einen klaren Plan, keine vage Absichtserklärung.',
  'Die laufende Zusammenarbeit findet remote statt - mit Terminen vor Ort in Kaufbeuren, wenn es sinnvoll ist.',
]

const faqItems = [
  {
    question: 'Habt ihr ein Büro, das ich besuchen kann?',
    answer: 'Ja, in Kaufbeuren - allerdings ohne Publikumsverkehr. Termine vor Ort vereinbaren wir gerne im Voraus.',
  },
  {
    question: 'Arbeitet ihr nur mit Unternehmen direkt in Kaufbeuren?',
    answer: 'Nein. Wir betreuen Kaufbeuren und das gesamte Ostallgäu, inklusive Kunden in Kempten, Memmingen und der weiteren Umgebung.',
  },
  {
    question: 'Kennt ihr euch mit meiner Branche aus, auch wenn ich kein typisches Kaufbeurer Gewerbe habe?',
    answer: 'Ja - wir arbeiten branchenübergreifend, von Handwerk über Gesundheit bis Einzelhandel. Die lokale Marktkenntnis gilt unabhängig von der Branche.',
  },
  {
    question: 'Muss ich für ein Erstgespräch zu euch kommen?',
    answer: 'Nein, das erste Gespräch findet in der Regel per Video oder Telefon statt - unkompliziert und ohne Anfahrt.',
  },
  {
    question: 'Was, wenn mein Unternehmen außerhalb von Kaufbeuren liegt, aber in der Nähe?',
    answer: 'Kein Problem - wir arbeiten mit Unternehmen im gesamten Ostallgäu, nicht nur innerhalb der Stadtgrenzen.',
  },
  {
    question: 'Wie schnell kann ein Termin vor Ort stattfinden?',
    answer: 'Das hängt von unserer Auslastung ab, meist innerhalb weniger Tage. Sprechen Sie uns einfach an.',
  },
  {
    question: 'Betreut ihr auch Unternehmen in Neugablonz oder anderen Stadtteilen speziell?',
    answer: 'Ja - wir kennen die Unterschiede zwischen den Stadtteilen und passen die Strategie entsprechend an.',
  },
]

export default function EinsatzgebietePage() {
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    document.title = 'Marketing-Agentur Kaufbeuren & Ostallgäu: Einsatzgebiete im Überblick | Valbrix Digital'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute(
      'content',
      'Marketing-Agentur mit Sitz in Kaufbeuren - wir betreuen die ganze Stadt und das Ostallgäu, inkl. Kempten, Memmingen und Umgebung. Jetzt Termin vereinbaren.'
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
          <div className="section-label mb-6">Einsatzgebiete</div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-gray-900 tracking-tight leading-tight mb-6">
            Marketing-Agentur für<br />
            <span style={{ color: accentColor }}>Kaufbeuren und Umgebung</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            Wenn Sie nach einer Marketing-Agentur in Kaufbeuren suchen, wollen Sie wahrscheinlich keine austauschbare Antwort von irgendeiner Agentur, die zufällig "Kaufbeuren" in ihren Titel geschrieben hat. Valbrix Digital sitzt in Kaufbeuren, arbeitet von hier aus und betreut Unternehmen in der ganzen Stadt und dem umliegenden Ostallgäu.
          </p>
        </div>
      </section>

      {/* Who / where */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            Wer wir sind und wo wir arbeiten
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Valbrix Digital ist als Service-Area-Business aufgestellt - das heißt, wir betreiben kein klassisches Ladengeschäft mit Laufkundschaft, sondern arbeiten direkt mit Unternehmen in Kaufbeuren und Umgebung zusammen, remote und bei Bedarf vor Ort. Das ist bewusst so: Die meisten unserer Kunden - Handwerksbetriebe, Praxen, lokale Dienstleister - haben selbst keine Zeit, zu einem Büro zu fahren. Wir kommen stattdessen zu Ihnen, per Videocall oder persönlich, je nachdem, was für Sie passt.
          </p>
        </div>
      </section>

      {/* Districts */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            Diese Gebiete betreuen wir
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Innerhalb von Kaufbeuren arbeiten wir mit Unternehmen in der gesamten Stadt. Jeder Stadtteil hat eine etwas andere Unternehmensstruktur - das berücksichtigen wir bei der Strategie.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {districts.map((d) => (
              <div key={d.name} className="rounded-2xl p-6" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{d.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
          <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Umliegende Gemeinden im Ostallgäu</h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            Kaufbeuren liegt zentral im Ostallgäu, mit Kempten, Memmingen und Augsburg in erreichbarer Nähe. Viele unserer Kunden konkurrieren nicht nur lokal, sondern auch mit Anbietern aus diesen Nachbarstädten - deshalb arbeiten wir nicht nur mit Unternehmen direkt in Kaufbeuren, sondern auch mit Betrieben in der Region, die online in diesem größeren Einzugsgebiet gefunden werden wollen.
          </p>
        </div>
      </section>

      {/* Why locals choose us */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-8">
            Warum lokale Unternehmen in Kaufbeuren uns wählen
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl p-7" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-lg leading-relaxed">
            Ein Beispiel aus der Praxis: Für einen lokalen Kunden in Kaufbeuren konnten wir die durchschnittliche Suchposition von Platz 86 auf Platz 2 verbessern - mit spürbar mehr Anfragen als Folge. Mehr Details dazu auf unserer{' '}
            <Link to="/marketing-agentur-kaufbeuren" className="font-semibold hover:underline" style={{ color: accentColor }}>
              Kaufbeuren-Seite
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Services offered here */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            Leistungen in unserem Einsatzgebiet
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            In Kaufbeuren und dem Ostallgäu bieten wir das volle Spektrum an digitalem Marketing an - von SEO bis Social-Media-Management.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              ['seo-optimization', 'SEO-Optimierung'],
              ['google-ads', 'Google Ads'],
              ['social-media-management', 'Social-Media-Management'],
              ['lead-generation', 'Lead-Generierung'],
            ].map(([slug, label]) => (
              <Link
                key={slug}
                to={`/leistungen/${slug}`}
                className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full transition-colors duration-200"
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            So läuft die Zusammenarbeit ab
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Da wir kein Ladengeschäft betreiben, läuft die Zusammenarbeit anders ab, als Sie es vielleicht von anderen lokalen Dienstleistern gewohnt sind - und das ist ein Vorteil, kein Nachteil:
          </p>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="font-display font-black text-2xl shrink-0 w-8" style={{ color: accentColor }}>
                  {i + 1}
                </span>
                <p className="text-gray-500 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Reachability */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            Erreichbarkeit & Termine vor Ort
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Unser Standort ist in Kaufbeuren, Merowingerstraße 2. Da wir kein Publikumsverkehr-Geschäft sind, bitten wir um eine kurze Terminvereinbarung vorab - dann nehmen wir uns die Zeit, die ein spontaner Besuch nicht bieten würde. Für Kunden in Kaufbeuren und dem Ostallgäu sind persönliche Termine jederzeit möglich; für alle anderen läuft die Zusammenarbeit vollständig remote.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <div className="section-label mb-6">Häufig gestellte Fragen</div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight">
              Fragen zu unseren Einsatzgebieten
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
            Ihr Unternehmen, unsere Region
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Egal ob Ihr Unternehmen mitten in der Kaufbeurer Altstadt sitzt, in Neugablonz, oder irgendwo im Ostallgäu - wir kennen die Region und arbeiten direkt mit Ihnen zusammen, ohne Umwege über eine anonyme Zentrale irgendwo im Land.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contact" className="btn-primary inline-flex px-8 py-4 text-base">
              <span>Kostenloses Erstgespräch buchen</span>
              <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/leistungen" className="btn-outline inline-flex px-8 py-4 text-base">
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
