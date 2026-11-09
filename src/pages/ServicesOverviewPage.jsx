import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import FAQItem from '../components/FAQItem'

const accentColor = '#b8860a'

const L = ({ to, children }) => (
  <Link to={to} className="font-semibold hover:underline" style={{ color: accentColor }}>
    {children}
  </Link>
)

const slugs = ['seo-optimization', 'google-ads', 'meta-ads', 'social-media-management', 'brand-strategy', 'content-creation', 'lead-generation', 'webdesign', 'website-optimierung', 'website-landing-page-strategy', 'analytics-reporting']

const copy = {
  de: {
    back: '← Zurück zur Startseite',
    label: 'Werbeagentur Kaufbeuren',
    h1a: 'Werbeagentur Kaufbeuren:',
    h1b: 'Was wir machen. Und was es bringt.',
    intro: 'Sie haben gerade „Werbeagentur Kaufbeuren“ gegoogelt. Und hier sind Sie. (Funktioniert also.) Auf dieser Seite steht, was wir machen, wie lange es dauert und was es Ihnen bringt. Ohne Fachchinesisch.',
    whyH2: 'Warum in Kaufbeuren nur die Top 3 angerufen werden',
    why: [
      'Jemand in Neugablonz hat einen Rohrbruch. Er nimmt das Handy und googelt „Klempner Kaufbeuren“. Ganz oben zwei Anzeigen. Die scrollt er weg. Darunter die Karte mit drei Betrieben, die da ohne Werbung stehen. Einen davon ruft er an.',
      'Wer auf Seite 2 steht, bekommt den Anruf nicht. Egal, wie gut der Betrieb ist.',
      'Genau da verlieren die meisten Betriebe im Ostallgäu ihre Kunden. Gute Arbeit, schwacher Google-Auftritt. Und oben steht die Konkurrenz aus Kempten oder Augsburg, weil die sich darum kümmert.',
    ],
    servicesH2: 'Unsere Leistungen, ehrlich eingeordnet',
    servicesIntro: 'Was wofür gut ist. Und wie lange es dauert, bis Sie etwas merken.',
    th: ['Leistung', 'Wofür', 'Bis Sie es merken'],
    rows: [
      ['SEO-Optimierung', 'Anfragen über Google, ohne für jeden Klick zu zahlen.', '3 bis 6 Monate'],
      ['Google Ads', 'Anfragen von Leuten, die genau jetzt suchen.', 'Ein paar Tage'],
      ['Meta Ads', 'Auf Facebook und Instagram gesehen werden, bevor jemand sucht.', 'Ein paar Tage'],
      ['Social-Media-Management', 'Vertrauen, bevor der erste Anruf kommt.', 'Laufend'],
      ['Markenstrategie', 'Klar sagen, wofür Sie stehen.', 'Einmal machen, wirkt überall'],
      ['Content-Erstellung', 'Fotos, Videos und Texte, die nach Ihnen aussehen.', 'Laufend'],
      ['Lead-Generierung', 'Anfragen, die nicht vom Zufall abhängen.', 'Ein paar Wochen'],
      ['Webdesign', 'Eine neue Website, die gefunden wird und Anfragen bringt.', 'Ein paar Wochen'],
      ['Website-Check & Optimierung', 'Fehler finden und beheben, damit Google Ihre Seite zeigt.', 'Ein paar Tage bis Wochen'],
      ['Website- & Landing-Page-Strategie', 'Aus Besuchern werden Anrufe.', 'Sofort messbar'],
      ['Analytics & Reporting', 'Wissen, wohin jeder Euro geht.', 'Ab dem ersten Monat'],
    ],
    details: [
      {
        h: 'Gefunden werden: SEO & Google-Unternehmensprofil',
        body: <>Für fast jeden Betrieb in Kaufbeuren ist das der wichtigste Punkt. Wer bei Google Maps oben steht, bekommt Anrufe. Jeden Tag. Ohne für jeden Klick zu zahlen. Dafür braucht es mehr als ein paar Keywords auf der Website: ein vollständiges Google-Profil, überall die gleichen Kontaktdaten, eine saubere Website und Seiten, die beantworten, was die Leute hier wirklich suchen. Alles dazu auf der <L to="/leistungen/seo-optimization">SEO-Optimierung</L>-Seite.</>,
      },
      {
        h: 'Sofort sichtbar: Google Ads & Meta Ads',
        body: <>SEO braucht ein paar Monate. <L to="/leistungen/google-ads">Google Ads</L> und <L to="/leistungen/meta-ads">Meta Ads</L> bringen Anfragen in ein paar Tagen. Google Ads erwischt die Leute, die gerade suchen. Meta Ads zeigt Sie auf Facebook und Instagram, bevor überhaupt jemand sucht. Der Haken: Budget aus, Anfragen weg. Am selben Tag. Deshalb ist Werbung bei uns der Turbo. Der Motor ist SEO.</>,
      },
      {
        h: 'Vertrauen aufbauen: Social-Media-Management',
        body: <>Bevor jemand anruft, schaut er auf Instagram. Ist da seit 2022 nichts mehr passiert, ruft er den Nächsten an. Wir sorgen dafür, dass Ihr Profil lebt. Mehr dazu auf der <L to="/leistungen/social-media-management">Social-Media-Management</L>-Seite.</>,
      },
      {
        h: 'Das Fundament: Markenstrategie, Content & Website',
        body: <>Die beste Anzeige bringt nichts, wenn die Website danach aussieht wie 2009. Deshalb gehören eine klare <L to="/leistungen/brand-strategy">Markenstrategie</L>, guter <L to="/leistungen/content-creation">Content</L> und eine Website, die Anrufe bringt, dazu (siehe <L to="/leistungen/website-landing-page-strategy">Website- & Landing-Page-Strategie</L>). Sonst zahlen Sie für Klicks, die nirgendwo hinführen.</>,
      },
    ],
    ratgeber: <>Sie wollen erst verstehen, wie das alles zusammenhängt? Agentur oder Freelancer, woran Sie eine gute Agentur erkennen, was Sie selbst machen können: Steht alles in unserem <L to="/ratgeber">Ratgeber für Online-Marketing in Kaufbeuren</L>.</>,
    faqLabel: 'Häufig gestellte Fragen',
    faqH2: 'Fragen zu unseren Leistungen',
    faq: [
      ['Welche Leistung passt zu meinem Unternehmen?', 'Kommt drauf an, wo Sie stehen. Bei Google kaum sichtbar? Dann zuerst SEO und Ihr Google-Profil. Sie brauchen nächste Woche Anfragen? Dann Google Ads. Im Gespräch sagen wir Ihnen ehrlich, was zuerst kommt.'],
      ['Was kostet Online-Marketing für ein Unternehmen in Kaufbeuren?', 'Das sagen wir Ihnen nach dem Erstgespräch. Mit einer konkreten Zahl. Keine Pakete von der Stange, keine versteckten Kosten.'],
      ['Muss ich alle Leistungen gleichzeitig buchen?', 'Nein. Die meisten starten mit einer oder zwei Sachen. Wenn die laufen, kommt der Rest.'],
      ['Was ist der Unterschied zwischen SEO und bezahlter Werbung?', 'SEO braucht Zeit und bringt dafür dauerhaft Anfragen. Werbung bringt sofort Anfragen und hört auf, sobald Sie aufhören zu zahlen. Am besten beides.'],
      ['Arbeiten Sie auch mit Handwerksbetrieben und kleinen Unternehmen?', 'Ja. Das sind sogar unsere Lieblingskunden. Inhabergeführt, gute Arbeit, nur bei Google unsichtbar.'],
      ['Wie schnell sehe ich erste Ergebnisse?', 'Bei Werbung in ein paar Tagen. Bei SEO nach ein paar Monaten. Und bei Google Maps garantieren wir Ihnen für Ihr Haupt-Keyword die Top 3 in 90 Tagen.'],
      ['Arbeiten Sie nur mit Unternehmen direkt in Kaufbeuren?', 'Nein. Wir sitzen in Kaufbeuren, arbeiten aber mit Betrieben im ganzen Allgäu und darüber hinaus. Das meiste läuft sowieso über Telefon und Video.'],
      ['Was, wenn ich nicht weiß, welche Leistung ich brauche?', 'Dann sind Sie wie fast alle, die uns schreiben. Im Erstgespräch schauen wir uns Ihre Situation an und sagen Ihnen, wo Sie anfangen sollten. Kostet nichts.'],
    ],
    ctaLabel: 'Kostenlos. Ohne Haken.',
    ctaH2: 'Bereit, in Kaufbeuren gefunden zu werden?',
    ctaBody: 'Im kostenlosen Strategiegespräch schauen wir uns Ihren Google-Auftritt an. Sie erfahren, warum Sie gerade nicht oben stehen. Und was wir dagegen machen. 30 Minuten, dann wissen Sie Bescheid.',
    ctaButton: 'Kostenloses Strategiegespräch buchen',
  },
  en: {
    back: '← Back to home',
    label: 'Marketing Agency Kaufbeuren',
    h1a: 'Marketing Agency Kaufbeuren:',
    h1b: 'What we do. And what it gets you.',
    intro: 'You just googled "marketing agency Kaufbeuren". And here you are. (So it works.) This page tells you what we do, how long it takes and what it gets you. No jargon.',
    whyH2: 'Why only the top 3 get the call in Kaufbeuren',
    why: [
      'Someone in Neugablonz has a burst pipe. He grabs his phone and googles "plumber Kaufbeuren". Two ads at the very top. He scrolls right past them. Below that, the map with three businesses that are there without paying for ads. He calls one of them.',
      "If you're on page 2, you don't get the call. No matter how good you are.",
      "That's exactly where most businesses in the Ostallgäu lose their customers. Great work, weak Google presence. And the competition from Kempten or Augsburg sits on top, because they take care of it.",
    ],
    servicesH2: 'Our services, honestly explained',
    servicesIntro: 'What each one is good for. And how long until you notice.',
    th: ['Service', 'What for', 'Until you notice'],
    rows: [
      ['SEO Optimization', 'Inquiries through Google, without paying for every click.', '3 to 6 months'],
      ['Google Ads', 'Inquiries from people searching right now.', 'A few days'],
      ['Meta Ads', 'Get seen on Facebook and Instagram before anyone searches.', 'A few days'],
      ['Social Media Management', 'Trust before the first call comes in.', 'Ongoing'],
      ['Brand Strategy', 'Say clearly what you stand for.', 'Do it once, works everywhere'],
      ['Content Creation', 'Photos, videos and copy that look like you.', 'Ongoing'],
      ['Lead Generation', "Inquiries that don't depend on luck.", 'A few weeks'],
      ['Web Design', 'A new website that gets found and brings enquiries.', 'A few weeks'],
      ['Website Check & Optimisation', 'Find and fix the errors so Google shows your site.', 'A few days to weeks'],
      ['Website & Landing Page Strategy', 'Turns visitors into calls.', 'Measurable right away'],
      ['Analytics & Reporting', 'Know where every euro goes.', 'From month one'],
    ],
    details: [
      {
        h: 'Getting found: SEO & Google Business Profile',
        body: <>For almost every business in Kaufbeuren, this is the big one. If you're at the top of Google Maps, you get calls. Every day. Without paying per click. That takes more than a few keywords on your website: a complete Google profile, the same contact details everywhere, a clean website and pages that answer what people here actually search for. All of it on our <L to="/leistungen/seo-optimization">SEO Optimization</L> page.</>,
      },
      {
        h: 'Visible right away: Google Ads & Meta Ads',
        body: <>SEO takes a few months. <L to="/leistungen/google-ads">Google Ads</L> and <L to="/leistungen/meta-ads">Meta Ads</L> bring inquiries within days. Google Ads catches the people who are searching right now. Meta Ads shows you on Facebook and Instagram before anyone searches at all. The catch: budget off, inquiries gone. Same day. That's why ads are the turbo for us. The engine is SEO.</>,
      },
      {
        h: 'Building trust: Social Media Management',
        body: <>Before anyone calls, they check your Instagram. Nothing posted since 2022? They call the next one. We keep your profile alive. More on our <L to="/leistungen/social-media-management">Social Media Management</L> page.</>,
      },
      {
        h: 'The foundation: brand strategy, content & website',
        body: <>The best ad is worthless if the website it leads to looks like 2009. That's why a clear <L to="/leistungen/brand-strategy">brand strategy</L>, good <L to="/leistungen/content-creation">content</L> and a website that brings in calls belong in the mix (see <L to="/leistungen/website-landing-page-strategy">Website & Landing Page Strategy</L>). Otherwise you pay for clicks that go nowhere.</>,
      },
    ],
    ratgeber: <>Want to understand how it all fits together first? Agency or freelancer, how to spot a good agency, what you can do yourself: it's all in our <L to="/ratgeber">guide to online marketing in Kaufbeuren</L>.</>,
    faqLabel: 'Frequently asked questions',
    faqH2: 'Questions about our services',
    faq: [
      ['Which service fits my business?', 'Depends where you stand. Barely visible on Google? Then SEO and your Google profile first. Need inquiries next week? Then Google Ads. On the call we tell you honestly what comes first.'],
      ['What does online marketing cost for a business in Kaufbeuren?', 'We tell you after the first call. With a real number. No off-the-shelf packages, no hidden costs.'],
      ['Do I have to book all services at once?', 'No. Most start with one or two things. Once those work, the rest follows.'],
      ["What's the difference between SEO and paid ads?", 'SEO takes time and then brings in inquiries for the long run. Ads bring inquiries right away and stop the moment you stop paying. Best is both.'],
      ['Do you work with trades and small businesses?', "Yes. They're actually our favourite clients. Owner-run, great work, just invisible on Google."],
      ['How fast will I see results?', 'With ads, in a few days. With SEO, after a few months. And on Google Maps we guarantee you the top 3 for your main keyword within 90 days.'],
      ['Do you only work with businesses in Kaufbeuren?', "No. We're based in Kaufbeuren but work with businesses across the Allgäu and beyond. Most of it happens over phone and video anyway."],
      ["What if I don't know which service I need?", "Then you're like almost everyone who writes to us. On the first call we look at where you stand and tell you where to start. Costs nothing."],
    ],
    ctaLabel: 'Free. No catch.',
    ctaH2: 'Ready to get found in Kaufbeuren?',
    ctaBody: "On the free strategy call we look at how you show up on Google. You find out why you're not at the top right now. And what we do about it. 30 minutes, then you know.",
    ctaButton: 'Book a free strategy call',
  },
}

export default function ServicesOverviewPage() {
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
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">{c.intro}</p>
        </div>
      </section>

      {/* Why local marketing matters */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-6">{c.whyH2}</h2>
          {c.why.map((para, i) => (
            <p key={i} className={`text-gray-500 text-lg leading-relaxed ${i < c.why.length - 1 ? 'mb-4' : ''}`}>{para}</p>
          ))}
        </div>
      </section>

      {/* Services table */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">{c.servicesH2}</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">{c.servicesIntro}</p>
          <div className="overflow-x-auto rounded-2xl mb-8" style={{ border: '1px solid #e2e8f0' }}>
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  {c.th.map((h) => (
                    <th key={h} className="px-5 py-4 font-display font-bold text-gray-900">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.rows.map(([title, fit, speed], i) => (
                  <tr key={slugs[i]} className={i !== c.rows.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="px-5 py-4 align-top whitespace-nowrap">
                      <L to={`/leistungen/${slugs[i]}`}>{title}</L>
                    </td>
                    <td className="px-5 py-4 text-gray-500 align-top">{fit}</td>
                    <td className="px-5 py-4 text-gray-500 align-top whitespace-nowrap">{speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {c.details.map((d) => (
            <div key={d.h} className="mb-8">
              <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 mb-3">{d.h}</h3>
              <p className="text-gray-500 leading-relaxed">{d.body}</p>
            </div>
          ))}

          <p className="text-gray-500 leading-relaxed mt-10 pt-8 border-t border-gray-100">{c.ratgeber}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <div className="section-label mb-6">{c.faqLabel}</div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight">{c.faqH2}</h2>
          </div>
          <div>
            {c.faq.map(([question, answer], i) => (
              <FAQItem
                key={i}
                item={{ question, answer }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion / CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="section-label justify-center mb-6">{c.ctaLabel}</div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">{c.ctaH2}</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">{c.ctaBody}</p>
          <Link to="/#contact" className="btn-primary inline-flex px-8 py-4 text-base">
            <span>{c.ctaButton}</span>
            <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
