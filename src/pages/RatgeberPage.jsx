import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const accentColor = '#b8860a'

const L = ({ to, children }) => (
  <Link to={to} className="font-semibold hover:underline" style={{ color: accentColor }}>
    {children}
  </Link>
)

const copy = {
  de: {
    back: '← Zurück zur Startseite',
    label: 'Ratgeber',
    h1a: 'Online-Marketing in Kaufbeuren:',
    h1b: 'Der ehrliche Ratgeber',
    intro: 'Bevor Sie irgendwem Geld geben, lesen Sie das hier. Fünf Minuten. Danach wissen Sie, was Sie brauchen. Und was nicht.',
    agencyH2: 'Was macht eine Marketing-Agentur eigentlich?',
    agencyIntro: 'Selbst machen haben Sie wahrscheinlich schon probiert. Bleiben drei Möglichkeiten. Ehrlich verglichen:',
    th: ['Wer', 'Gut', 'Der Haken'],
    options: [
      ['Freelancer', 'Günstig. Meistens richtig gut in einer Sache.', 'Nur in einer Sache. Wer macht den Rest?'],
      ['Eigener Mitarbeiter', 'Kennt Ihren Betrieb in- und auswendig.', '€3.400 im Monat plus Lohnnebenkosten. Und kann trotzdem nicht alles.'],
      ['Agentur', 'SEO, Ads, Social Media und Website aus einer Hand.', 'Sie müssen jemandem vertrauen. Also nehmen Sie eine, die ans Telefon geht.'],
    ],
    agencyOutro: 'Wir sind die dritte Option. Aber klein genug, dass Sie immer mit dem reden, der die Arbeit macht.',
    localH2: 'So werden Sie im Ostallgäu gefunden',
    localIntro: 'Kaufbeuren liegt zwischen Kempten, Memmingen und Augsburg. Sobald jemand seine Suche etwas weiter fasst, konkurrieren Sie plötzlich mit Betrieben aus allen drei Städten. Dann entscheiden zwei Dinge:',
    localPoints: [
      ['1. Ihr Google-Profil.', 'Richtige Kategorie, vollständige Angaben, regelmäßig neue Bewertungen. Das trennt Platz 1 von Seite 2.'],
      ['2. Die richtigen Suchbegriffe.', 'Um „Marketing Agentur Bayern“ kämpfen Hunderte. Um „Fliesenleger Kaufbeuren“ kämpfen drei. Da gewinnen Sie.'],
    ],
    localOutro: <>Erst die Grundlage. Dann Werbebudget. Andersrum verbrennen Sie Geld. Mehr dazu auf unserer Seite zur <L to="/marketing-agentur-kaufbeuren">Marketing-Agentur in Kaufbeuren</L>.</>,
    chooseH2: 'Woran Sie eine gute Agentur in Kaufbeuren erkennen',
    choose: [
      'Fragen Sie nach einem Kunden aus der Region. Und rufen Sie den an.',
      'Wer ist Ihr Ansprechpartner? Wenn die Antwort „das Team“ ist, wissen Sie Bescheid.',
      'Lassen Sie sich einen Monatsbericht zeigen. Verstehen Sie ihn in zwei Minuten? Gut. Wenn nicht, ist es Fachchinesisch.',
      'Wie lange müssen Sie unterschreiben? 12 Monate heißt: Die verlassen sich auf den Vertrag. Wir arbeiten monatlich kündbar.',
      'Machen die SEO, Ads und Social Media? Oder nur eins davon und verkaufen es als alles?',
    ],
    tipsH2: '5 Dinge, die Sie diese Woche selbst umsetzen können',
    tipsIntro: 'Kostet nichts. Dauert einen Nachmittag. Bringt mehr als so manche Agentur im ersten Monat.',
    tips: [
      'Name, Adresse, Telefon: Steht auf Ihrer Website exakt das Gleiche wie im Google-Profil? Jeder Unterschied kostet Sie Plätze.',
      'Füllen Sie Ihr Google-Profil zu 100 % aus. Jedes leere Feld ist ein Punkt für die Konkurrenz.',
      'Schreiben Sie heute drei zufriedenen Kunden: „Würden Sie uns eine kurze Google-Bewertung schreiben?“ Mehr braucht es nicht.',
      'Fahren Sie mit der Maus über den Tab Ihrer Website. Steht da Ihre Stadt und was Sie machen? Wenn da nur „Home“ steht, wissen Sie, was zu tun ist.',
      'Laden Sie fünf neue Fotos hoch. Vom Team, von der Arbeit, vom Laden. Profile mit aktuellen Fotos werden öfter angeklickt.',
    ],
    ctaLabel: 'Lieber machen lassen?',
    ctaH2: 'Dann übernehmen wir das.',
    ctaBody: 'SEO, Google Ads, Social Media und alles dazwischen. Für Betriebe in Kaufbeuren und im ganzen Ostallgäu.',
    ctaPrimary: 'Unsere Leistungen ansehen',
    ctaSecondary: 'Kostenloses Strategiegespräch',
  },
  en: {
    back: '← Back to home',
    label: 'Guide',
    h1a: 'Online marketing in Kaufbeuren:',
    h1b: 'The honest guide',
    intro: "Before you hand anyone money, read this. Five minutes. Then you know what you need. And what you don't.",
    agencyH2: 'What does a marketing agency actually do?',
    agencyIntro: "You've probably tried doing it yourself already. That leaves three options. Honestly compared:",
    th: ['Who', 'Good', 'The catch'],
    options: [
      ['Freelancer', 'Cheap. Usually really good at one thing.', 'Only one thing. Who does the rest?'],
      ['Your own employee', 'Knows your business inside out.', "€3,400 a month plus payroll costs. And still can't do it all."],
      ['Agency', 'SEO, ads, social media and website from one place.', 'You have to trust someone. So pick one that picks up the phone.'],
    ],
    agencyOutro: "We're the third option. But small enough that you always talk to the person doing the work.",
    localH2: 'How to get found in the Ostallgäu',
    localIntro: "Kaufbeuren sits between Kempten, Memmingen and Augsburg. The moment someone widens their search a little, you're suddenly competing with businesses from all three cities. Then two things decide:",
    localPoints: [
      ['1. Your Google profile.', "Right category, complete details, new reviews coming in regularly. That's what separates position 1 from page 2."],
      ['2. The right search terms.', `Hundreds fight over "marketing agency Bavaria". Three fight over "tiler Kaufbeuren". That's where you win.`],
    ],
    localOutro: <>Foundation first. Then ad budget. The other way round, you burn money. More on our page about our <L to="/marketing-agentur-kaufbeuren">marketing agency in Kaufbeuren</L>.</>,
    chooseH2: 'How to spot a good agency in Kaufbeuren',
    choose: [
      'Ask for a client from the region. And call them.',
      `Who's your contact person? If the answer is "the team", you know enough.`,
      "Ask to see a monthly report. Do you understand it in two minutes? Good. If not, it's jargon.",
      "How long do you have to sign for? 12 months means they're relying on the contract. We work month to month.",
      'Do they do SEO, ads and social media? Or just one of them, sold as everything?',
    ],
    tipsH2: '5 things you can do yourself this week',
    tipsIntro: 'Costs nothing. Takes an afternoon. Gets you more than some agencies do in their first month.',
    tips: [
      'Name, address, phone: Does your website show exactly the same as your Google profile? Every difference costs you positions.',
      'Fill out your Google profile 100%. Every empty field is a point for the competition.',
      `Message three happy customers today: "Would you leave us a short Google review?" That's all it takes.`,
      `Hover over your website's browser tab. Does it say your city and what you do? If it just says "Home", you know what to do.`,
      'Upload five new photos. Of the team, the work, the shop. Profiles with recent photos get clicked more.',
    ],
    ctaLabel: 'Rather have it done for you?',
    ctaH2: "Then we'll take it from here.",
    ctaBody: 'SEO, Google Ads, social media and everything in between. For businesses in Kaufbeuren and across the Ostallgäu.',
    ctaPrimary: 'See our services',
    ctaSecondary: 'Free strategy call',
  },
}

export default function RatgeberPage() {
  const { lang } = useLanguage()
  const c = copy[lang] || copy.de


  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
            {c.back}
          </Link>
          <div className="section-label mb-6">{c.label}</div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-gray-900 tracking-tight leading-tight mb-6">
            {c.h1a}<br />
            <span style={{ color: accentColor }}>{c.h1b}</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">{c.intro}</p>
        </div>
      </section>

      {/* What is an agency */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">{c.agencyH2}</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">{c.agencyIntro}</p>
          <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid #e2e8f0' }}>
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  {c.th.map((h) => (
                    <th key={h} className="px-5 py-4 font-display font-bold text-gray-900">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.options.map(([option, strength, limit], i) => (
                  <tr key={option} className={i !== c.options.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="px-5 py-4 font-semibold text-gray-900 align-top whitespace-nowrap">{option}</td>
                    <td className="px-5 py-4 text-gray-500 align-top">{strength}</td>
                    <td className="px-5 py-4 text-gray-500 align-top">{limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed mt-6">{c.agencyOutro}</p>
        </div>
      </section>

      {/* Local scene */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">{c.localH2}</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">{c.localIntro}</p>
          <ol className="space-y-4 mb-4">
            {c.localPoints.map(([lead, text]) => (
              <li key={lead} className="text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-900">{lead}</span> {text}
              </li>
            ))}
          </ol>
          <p className="text-gray-500 text-lg leading-relaxed">{c.localOutro}</p>
        </div>
      </section>

      {/* How to choose */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-6">{c.chooseH2}</h2>
          <div className="rounded-2xl p-7 md:p-9" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <div className="space-y-4">
              {c.choose.map((item, i) => (
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
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">{c.tipsH2}</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">{c.tipsIntro}</p>
          <ol className="space-y-4">
            {c.tips.map((tip, i) => (
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
          <div className="section-label justify-center mb-6">{c.ctaLabel}</div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">{c.ctaH2}</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">{c.ctaBody}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/leistungen" className="btn-primary inline-flex px-8 py-4 text-base">
              <span>{c.ctaPrimary}</span>
              <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/#contact" className="btn-outline inline-flex px-8 py-4 text-base">
              {c.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
