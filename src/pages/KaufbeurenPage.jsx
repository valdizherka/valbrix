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

const heatmapGrid = [
  [14, 11, 9, 7, 9, 12, 16],
  [12, 8, 5, 4, 6, 9, 13],
  [9, 6, 3, 2, 3, 7, 10],
  [7, 4, 2, 'PIN', 2, 4, 8],
  [9, 5, 3, 2, 3, 6, 9],
  [11, 8, 6, 4, 6, 8, 12],
  [15, 12, 9, 8, 9, 12, 15],
]

function rankColor(rank) {
  if (rank <= 3) return { bg: '#dcfce7', text: '#15803d' }
  if (rank <= 10) return { bg: `${accentColor}20`, text: accentColor }
  return { bg: '#fee2e2', text: '#b91c1c' }
}

function LocalHeatmap() {
  return (
    <div className="rounded-2xl p-8 md:p-12" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
      <div className="text-center mb-10">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-3">
          So sieht gute lokale Sichtbarkeit aus
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Beispielhafte Positions-Heatmap: Jeder Punkt zeigt, auf welchem Platz ein Unternehmen bei Google Maps für eine Suche aus der jeweiligen Umgebung erscheinen könnte.
        </p>
      </div>

      <div
        className="grid gap-2 mx-auto mb-8"
        style={{ gridTemplateColumns: `repeat(${heatmapGrid[0].length}, minmax(0, 1fr))`, maxWidth: '420px' }}
      >
        {heatmapGrid.map((row, ri) =>
          row.map((cell, ci) => {
            if (cell === 'PIN') {
              return (
                <div key={`${ri}-${ci}`} className="aspect-square flex items-center justify-center">
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{ background: '#0f172a' }}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                    </svg>
                  </div>
                </div>
              )
            }
            const { bg, text } = rankColor(cell)
            return (
              <div
                key={`${ri}-${ci}`}
                className="aspect-square rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: bg, color: text }}
              >
                {cell}
              </div>
            )
          })
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-500">
        <span className="inline-flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ background: '#dcfce7', border: '1px solid #86efac' }} />
          Top 3
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}60` }} />
          Platz 4–10
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ background: '#fee2e2', border: '1px solid #fca5a5' }} />
          Platz 11+
        </span>
      </div>
    </div>
  )
}

const valueProps = [
  {
    title: 'Sichtbarkeit',
    body: 'Wer in Kaufbeuren lokal sucht, sieht meist nur die ersten drei Ergebnisse auf Google Maps. Wir sorgen dafür, dass dein Unternehmen dort auftaucht.',
  },
  {
    title: 'Nachhaltig',
    body: 'Anders als bei bezahlten Anzeigen verschwindet deine Sichtbarkeit nicht, sobald ein Budget aufgebraucht ist.',
  },
  {
    title: 'Langfristige Strategie',
    body: 'Wir bauen eine Position auf, die über Monate hinweg für dich arbeitet – ohne dass du ständig nachlegen musst.',
  },
]

const steps = [
  {
    title: 'Strategiegespräch',
    body: 'In einem kostenlosen Gespräch lernen wir dein Unternehmen und deine Ziele kennen.',
  },
  {
    title: 'Onboarding',
    body: 'Wir analysieren deinen aktuellen Auftritt und erstellen einen klaren Plan für Kaufbeuren.',
  },
  {
    title: 'Umsetzung',
    body: 'Wir übernehmen dein Marketing – von deinem Google-Profil bis zu Social Media.',
  },
  {
    title: 'Ergebnisse',
    body: 'Du bekommst laufende Updates und siehst genau, was funktioniert.',
  },
]

const faqItems = [
  {
    question: 'Warum eine lokale Agentur aus der Region statt eine überregionale?',
    answer: 'Wir kennen den Markt in Kaufbeuren und Umgebung, die lokale Konkurrenz und was Kunden hier tatsächlich suchen. Das spart Zeit und liefert schneller relevante Ergebnisse als eine generische Strategie.',
  },
  {
    question: 'Wie schnell sehe ich erste Ergebnisse?',
    answer: 'Das hängt von deinem Ausgangspunkt ab. Erste Verbesserungen bei Sichtbarkeit und Anfragen zeigen sich häufig innerhalb der ersten Wochen, spürbare Ergebnisse meist nach ein bis zwei Monaten.',
  },
  {
    question: 'Was kostet die Zusammenarbeit?',
    answer: 'Das besprechen wir im kostenlosen Erstgespräch, abgestimmt auf dein Unternehmen und deine Ziele. Es gibt kein pauschales Paket von der Stange.',
  },
  {
    question: 'Muss ich mich langfristig binden?',
    answer: 'Nein. Wir arbeiten monatlich kündbar. Wir sind überzeugt, dass die Ergebnisse dich überzeugen – nicht ein Vertrag.',
  },
  {
    question: 'Für welche Branchen eignet sich das?',
    answer: 'Vor allem für lokale Dienstleister und Betriebe in und um Kaufbeuren, die von mehr lokalen Anfragen profitieren – zum Beispiel Handwerk, Gesundheit, Beratung oder Gastronomie.',
  },
]

export default function KaufbeurenPage() {
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    document.title = 'Die beste Marketing-Agentur in Kaufbeuren | Valbrix Digital'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="section-label justify-center mb-6">Marketing-Agentur Kaufbeuren</div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-gray-900 tracking-tight leading-tight mb-6">
            Die beste Marketing-Agentur<br />
            <span style={{ color: accentColor }}>in Kaufbeuren</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            75&nbsp;% aller Google-Suchanfragen enden bei den Top&nbsp;3-Ergebnissen auf Google Maps. Wenn dein Unternehmen dort nicht auftaucht, gehen die Anfragen an die Konkurrenz.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-sm text-gray-500">
            <span>20+ zufriedene Kunden</span>
            <span className="text-gray-300">·</span>
            <span>Schnelle Ergebnisse</span>
            <span className="text-gray-300">·</span>
            <span>Lokale Expertise in Kaufbeuren</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contact" className="btn-primary px-7 py-4 text-base">
              <span>Kostenloses Erstgespräch</span>
            </Link>
            <Link to="/#free-video" className="btn-outline px-7 py-4 text-base">
              Kostenloses Video ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Local heatmap */}
      <section className="relative py-4 pb-20 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6">
          <LocalHeatmap />
        </div>
      </section>

      {/* Value props */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
              Lohnt sich das für dich?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {valueProps.map((v, i) => (
              <div key={i} className="rounded-2xl p-7" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black mb-5"
                  style={{ background: `${accentColor}15`, color: accentColor, border: `1px solid ${accentColor}30` }}
                >
                  0{i + 1}
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-3">
              So kann deine Entwicklung aussehen
            </h2>
            <p className="text-gray-500 mb-10 max-w-lg mx-auto">
              Ein typischer Verlauf für lokale Unternehmen, die mit uns zusammenarbeiten – dein Ergebnis hängt von deinem Ausgangspunkt ab.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                { label: 'Google-Ranking', before: 'Nicht auf Seite 1', after: 'Top 3 auf Google Maps' },
                { label: 'Sichtbarkeit', before: 'Kaum vorhanden', after: 'Deutlich erhöht' },
                { label: 'Anfragen', before: 'Vereinzelt', after: 'Regelmäßig' },
              ].map((row, i) => (
                <div key={i} className="rounded-xl p-5" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{row.label}</div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400 line-through">{row.before}</span>
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke={accentColor} strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span className="font-bold text-gray-900">{row.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="section-label mb-6">So läuft's ab</div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight">
              In vier Schritten zu mehr Kunden
            </h2>
          </div>
          <div>
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 md:gap-10 py-8 border-t border-gray-100 first:border-t-0">
                <span
                  className="font-display font-black text-4xl md:text-5xl shrink-0 w-16 md:w-20"
                  style={{ color: accentColor }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-xl">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <div className="section-label mb-6">Häufige Fragen</div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight">
              Fragen zur Zusammenarbeit
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

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="section-label justify-center mb-6">Kostenlos & unverbindlich</div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            Bereit für mehr Kunden in Kaufbeuren?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Lass uns in einem kurzen, kostenlosen Gespräch besprechen, wie dein Unternehmen in Kaufbeuren sichtbarer wird.
          </p>
          <Link to="/#contact" className="btn-primary inline-flex px-8 py-4 text-base">
            <span>Kostenloses Erstgespräch buchen</span>
            <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
