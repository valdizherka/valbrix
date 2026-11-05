import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import FAQItem from '../components/FAQItem'

const accentColor = '#b8860a'

const copy = {
  de: {
    back: '← Zurück zur Startseite',
    label: 'Einsatzgebiete',
    h1a: 'Werbeagentur für',
    h1b: 'Kaufbeuren und Umgebung',
    intro: 'Wenn Sie nach einer Werbeagentur in Kaufbeuren suchen, wollen Sie wahrscheinlich keine austauschbare Antwort von irgendeiner Agentur, die zufällig "Kaufbeuren" in ihren Titel geschrieben hat. Valbrix Digital sitzt in Kaufbeuren, arbeitet von hier aus und betreut Unternehmen in der ganzen Stadt und dem umliegenden Ostallgäu.',
    whoH2: 'Wer wir sind und wo wir arbeiten',
    who: 'Valbrix Digital ist als Service-Area-Business aufgestellt - das heißt, wir betreiben kein klassisches Ladengeschäft mit Laufkundschaft, sondern arbeiten direkt mit Unternehmen in Kaufbeuren und Umgebung zusammen, remote und bei Bedarf vor Ort. Das ist bewusst so: Die meisten unserer Kunden - Handwerksbetriebe, Praxen, lokale Dienstleister - haben selbst keine Zeit, zu einem Büro zu fahren. Wir kommen stattdessen zu Ihnen, per Videocall oder persönlich, je nachdem, was für Sie passt.',
    areasH2: 'Diese Gebiete betreuen wir',
    areasIntro: 'Innerhalb von Kaufbeuren arbeiten wir mit Unternehmen in der gesamten Stadt. Jeder Stadtteil hat eine etwas andere Unternehmensstruktur - das berücksichtigen wir bei der Strategie.',
    districts: [
      { name: 'Altstadt', body: 'Historisches Zentrum mit vielen Dienstleistern und Einzelhandel.' },
      { name: 'Neugablonz', body: 'Traditionell geprägt von Handwerk und Kleingewerbe.' },
      { name: 'Hafenberg', body: 'Wohn- und Gewerbelage im Nordosten der Stadt.' },
      { name: 'Oberbeuren', body: 'Gewerbegebiet mit vielen inhabergeführten Betrieben.' },
      { name: 'Ostend', body: 'Wachsender Stadtteil mit gemischter Unternehmensstruktur.' },
    ],
    regionH3: 'Umliegende Gemeinden im Ostallgäu',
    region: <>Kaufbeuren liegt zentral im Ostallgäu, mit <Link to="/werbeagentur-kempten" className="font-semibold hover:underline" style={{ color: accentColor }}>Kempten</Link>, <Link to="/werbeagentur-memmingen" className="font-semibold hover:underline" style={{ color: accentColor }}>Memmingen</Link> und Augsburg in erreichbarer Nähe. Viele Betriebe hier konkurrieren nicht nur lokal, sondern auch mit Anbietern aus diesen Nachbarstädten. Deshalb arbeiten wir nicht nur mit Unternehmen direkt in Kaufbeuren, sondern auch mit Betrieben in der Region, die online in diesem größeren Einzugsgebiet gefunden werden wollen.</>,
    reasonsH2: 'Warum lokale Unternehmen in Kaufbeuren uns wählen',
    reasons: [
      { title: 'Wir kennen die Konkurrenzsituation vor Ort', body: 'Wir wissen, wie hart umkämpft bestimmte Branchen in Kaufbeuren sind und wo tatsächlich Chancen liegen - statt einer generischen Strategie, die überall gleich aussieht.' },
      { title: 'Ein fester Ansprechpartner', body: 'Kein wechselnder Junior-Account-Manager - Sie sprechen immer mit jemandem, der Ihr Unternehmen kennt.' },
      { title: 'Monatlich kündbar', body: 'Wir arbeiten ohne lange Vertragsbindung, weil wir überzeugt sind, dass die Ergebnisse Sie halten, nicht der Vertrag.' },
      { title: 'Alles aus einer Hand', body: 'SEO, Google Ads, Meta Ads, Content und Social Media - abgestimmt statt isoliert voneinander betrieben.' },
    ],
    example: <>Ein Beispiel, wie das aussehen kann: Ein Betrieb in Kaufbeuren steht im Schnitt auf Platz 86 und bekommt über Google fast keine Anfragen. Mit sauberer lokaler SEO rutscht er nach oben, bis er auf der Karte unter den ersten drei steht. Wie sich das auf der Karte zeigt, sehen Sie auf unserer <Link to="/marketing-agentur-kaufbeuren" className="font-semibold hover:underline" style={{ color: accentColor }}>Kaufbeuren-Seite</Link>.</>,
    servicesH2: 'Leistungen in unserem Einsatzgebiet',
    servicesIntro: 'In Kaufbeuren und dem Ostallgäu bieten wir das volle Spektrum an digitalem Marketing an - von SEO bis Social-Media-Management.',
    services: [['seo-optimization', 'SEO-Optimierung'], ['google-ads', 'Google Ads'], ['social-media-management', 'Social-Media-Management'], ['lead-generation', 'Lead-Generierung']],
    stepsH2: 'So läuft die Zusammenarbeit ab',
    stepsIntro: 'Da wir kein Ladengeschäft betreiben, läuft die Zusammenarbeit anders ab, als Sie es vielleicht von anderen lokalen Dienstleistern gewohnt sind - und das ist ein Vorteil, kein Nachteil:',
    steps: [
      'Wir vereinbaren ein kostenloses Erstgespräch - per Video oder Telefon, ganz wie es für Sie passt.',
      'Wir lernen Ihr Unternehmen, Ihre Ziele und Ihre aktuelle Situation kennen.',
      'Sie erhalten einen klaren Plan, keine vage Absichtserklärung.',
      'Die laufende Zusammenarbeit findet remote statt - mit Terminen vor Ort in Kaufbeuren, wenn es sinnvoll ist.',
    ],
    reachH2: 'Erreichbarkeit & Termine vor Ort',
    reach: 'Wir sitzen in Kaufbeuren und arbeiten ohne Ladengeschäft oder Publikumsverkehr. Für Kunden in Kaufbeuren und im Ostallgäu kommen wir nach kurzer Terminvereinbarung gerne persönlich bei Ihnen vorbei; für alle anderen läuft die Zusammenarbeit vollständig remote, per Telefon oder Videocall.',
    faqLabel: 'Häufig gestellte Fragen',
    faqH2: 'Fragen zu unseren Einsatzgebieten',
    faq: [
      { question: 'Haben Sie ein Büro, das ich besuchen kann?', answer: 'Wir arbeiten ohne Ladengeschäft oder Publikumsverkehr. Stattdessen kommen wir zu Ihnen: Persönliche Termine in Kaufbeuren und im Ostallgäu vereinbaren wir gerne im Voraus.' },
      { question: 'Arbeiten Sie nur mit Unternehmen direkt in Kaufbeuren?', answer: 'Nein. Wir betreuen Kaufbeuren und das gesamte Ostallgäu, auch Unternehmen in Kempten, Memmingen und der weiteren Umgebung.' },
      { question: 'Kennen Sie sich mit meiner Branche aus, auch wenn ich kein typisches Kaufbeurer Gewerbe habe?', answer: 'Ja - wir arbeiten branchenübergreifend, von Handwerk über Gesundheit bis Einzelhandel. Die lokale Marktkenntnis gilt unabhängig von der Branche.' },
      { question: 'Muss ich für ein Erstgespräch zu Ihnen kommen?', answer: 'Nein, das erste Gespräch findet in der Regel per Video oder Telefon statt - unkompliziert und ohne Anfahrt.' },
      { question: 'Was, wenn mein Unternehmen außerhalb von Kaufbeuren liegt, aber in der Nähe?', answer: 'Kein Problem - wir arbeiten mit Unternehmen im gesamten Ostallgäu, nicht nur innerhalb der Stadtgrenzen.' },
      { question: 'Wie schnell kann ein Termin vor Ort stattfinden?', answer: 'Das hängt von unserer Auslastung ab, meist innerhalb weniger Tage. Sprechen Sie uns einfach an.' },
      { question: 'Betreuen Sie auch Unternehmen in Neugablonz oder anderen Stadtteilen speziell?', answer: 'Ja - wir kennen die Unterschiede zwischen den Stadtteilen und passen die Strategie entsprechend an.' },
    ],
    ctaLabel: 'Kostenlos & unverbindlich',
    ctaH2: 'Ihr Unternehmen, unsere Region',
    ctaBody: 'Egal ob Ihr Unternehmen mitten in der Kaufbeurer Altstadt sitzt, in Neugablonz, oder irgendwo im Ostallgäu - wir kennen die Region und arbeiten direkt mit Ihnen zusammen, ohne Umwege über eine anonyme Zentrale irgendwo im Land.',
    ctaPrimary: 'Kostenloses Erstgespräch buchen',
    ctaSecondary: 'Alle Leistungen ansehen',
  },
  en: {
    back: '← Back to home',
    label: 'Areas we serve',
    h1a: 'Marketing agency for',
    h1b: 'Kaufbeuren and the region',
    intro: 'If you\'re looking for a marketing agency in Kaufbeuren, you probably don\'t want a generic answer from some agency that just happened to put "Kaufbeuren" in its title. Valbrix Digital is based in Kaufbeuren, works from here and looks after businesses across the whole city and the surrounding Ostallgäu.',
    whoH2: 'Who we are and where we work',
    who: "Valbrix Digital is a service-area business. That means no shop with walk-in customers. We work directly with businesses in and around Kaufbeuren, remotely and on site when it makes sense. That's on purpose: most of our clients, trades, practices and local service providers, don't have time to drive to an office. So we come to you, by video call or in person, whatever suits you.",
    areasH2: 'The areas we cover',
    areasIntro: 'Within Kaufbeuren we work with businesses all over the city. Every district has a slightly different mix of businesses, and we take that into account in the strategy.',
    districts: [
      { name: 'Altstadt', body: 'The historic centre, with lots of service providers and retail.' },
      { name: 'Neugablonz', body: 'Traditionally shaped by trades and small businesses.' },
      { name: 'Hafenberg', body: 'Residential and commercial area in the north-east of the city.' },
      { name: 'Oberbeuren', body: 'Business district with many owner-run companies.' },
      { name: 'Ostend', body: 'A growing district with a mixed business structure.' },
    ],
    regionH3: 'Surrounding towns in the Ostallgäu',
    region: <>Kaufbeuren sits right in the middle of the Ostallgäu, with <Link to="/werbeagentur-kempten" className="font-semibold hover:underline" style={{ color: accentColor }}>Kempten</Link>, <Link to="/werbeagentur-memmingen" className="font-semibold hover:underline" style={{ color: accentColor }}>Memmingen</Link> and Augsburg within easy reach. Many businesses here don't just compete locally but with businesses from those neighbouring cities too. That's why we also work with businesses across the region that want to be found online in that wider catchment area.</>,
    reasonsH2: 'Why local businesses in Kaufbeuren choose us',
    reasons: [
      { title: 'We know the local competition', body: 'We know how competitive certain industries are in Kaufbeuren and where the real opportunities are. No generic strategy that looks the same everywhere.' },
      { title: 'One dedicated contact', body: 'No rotating junior account manager. You always talk to someone who knows your business.' },
      { title: 'Month to month', body: "No long contracts. We're convinced the results keep you, not the paperwork." },
      { title: 'Everything from one place', body: 'SEO, Google Ads, Meta Ads, content and social media, working together instead of in silos.' },
    ],
    example: <>An example of what this can look like: a business in Kaufbeuren sits at an average position of 86 and gets almost no inquiries from Google. With solid local SEO it moves up until it shows in the top three on the map. You can see how that looks on the map on our <Link to="/marketing-agentur-kaufbeuren" className="font-semibold hover:underline" style={{ color: accentColor }}>Kaufbeuren page</Link>.</>,
    servicesH2: 'Services in our area',
    servicesIntro: 'In Kaufbeuren and the Ostallgäu we offer the full range of digital marketing, from SEO to social media management.',
    services: [['seo-optimization', 'SEO Optimization'], ['google-ads', 'Google Ads'], ['social-media-management', 'Social Media Management'], ['lead-generation', 'Lead Generation']],
    stepsH2: 'How working together works',
    stepsIntro: "Since we don't run a shop, working with us is a bit different from what you might know from other local providers. That's an advantage:",
    steps: [
      'We set up a free first call, by video or phone, whatever suits you.',
      'We get to know your business, your goals and where you stand today.',
      'You get a clear plan. Not a vague statement of intent.',
      'The ongoing work happens remotely, with on-site meetings in Kaufbeuren when it makes sense.',
    ],
    reachH2: 'Availability & on-site meetings',
    reach: "We're based in Kaufbeuren and work without a shop or walk-in customers. For clients in Kaufbeuren and the Ostallgäu we're happy to come by in person after a quick appointment. For everyone else it all runs remotely, by phone or video call.",
    faqLabel: 'Frequently asked questions',
    faqH2: 'Questions about our areas',
    faq: [
      { question: 'Do you have an office I can visit?', answer: 'We work without a shop or walk-in customers. Instead we come to you: we\'re happy to set up in-person meetings in Kaufbeuren and the Ostallgäu in advance.' },
      { question: 'Do you only work with businesses in Kaufbeuren itself?', answer: 'No. We cover Kaufbeuren and the whole Ostallgäu, including clients in Kempten, Memmingen and the wider area.' },
      { question: "Do you know my industry, even if it's not a typical Kaufbeuren business?", answer: 'Yes. We work across industries, from trades to health to retail. The local market knowledge applies regardless of industry.' },
      { question: 'Do I have to come to you for the first call?', answer: 'No, the first call usually happens by video or phone. Easy, and no travel needed.' },
      { question: 'What if my business is outside Kaufbeuren but nearby?', answer: 'No problem. We work with businesses across the whole Ostallgäu, not just inside the city limits.' },
      { question: 'How soon can we meet in person?', answer: 'Depends on our workload, usually within a few days. Just get in touch.' },
      { question: 'Do you also work with businesses in Neugablonz or other districts specifically?', answer: 'Yes. We know the differences between the districts and adjust the strategy accordingly.' },
    ],
    ctaLabel: 'Free & no obligation',
    ctaH2: 'Your business, our region',
    ctaBody: 'Whether your business is in the middle of Kaufbeuren\'s Altstadt, in Neugablonz or anywhere in the Ostallgäu: we know the region and work with you directly. No detour through an anonymous head office somewhere in the country.',
    ctaPrimary: 'Book a free first call',
    ctaSecondary: 'See all services',
  },
}

export default function EinsatzgebietePage() {
  const { lang } = useLanguage()
  const c = copy[lang] || copy.de

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
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
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            {c.intro}
          </p>
        </div>
      </section>

      {/* Who / where */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            {c.whoH2}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {c.who}
          </p>
        </div>
      </section>

      {/* Districts */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            {c.areasH2}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            {c.areasIntro}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {c.districts.map((d) => (
              <div key={d.name} className="rounded-2xl p-6" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{d.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
          <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{c.regionH3}</h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            {c.region}
          </p>
        </div>
      </section>

      {/* Why locals choose us */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-8">
            {c.reasonsH2}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {c.reasons.map((r) => (
              <div key={r.title} className="rounded-2xl p-7" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-lg leading-relaxed">{c.example}</p>
        </div>
      </section>

      {/* Services offered here */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            {c.servicesH2}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            {c.servicesIntro}
          </p>
          <div className="flex flex-wrap gap-3">
            {c.services.map(([slug, label]) => (
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
            {c.stepsH2}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            {c.stepsIntro}
          </p>
          <ol className="space-y-4">
            {c.steps.map((step, i) => (
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
            {c.reachH2}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {c.reach}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <div className="section-label mb-6">{c.faqLabel}</div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight">
              {c.faqH2}
            </h2>
          </div>
          <div>
            {c.faq.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion / CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="section-label justify-center mb-6">{c.ctaLabel}</div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
            {c.ctaH2}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            {c.ctaBody}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contact" className="btn-primary inline-flex px-8 py-4 text-base">
              <span>{c.ctaPrimary}</span>
              <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/leistungen" className="btn-outline inline-flex px-8 py-4 text-base">
              {c.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
