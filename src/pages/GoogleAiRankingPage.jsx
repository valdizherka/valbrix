import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import withLinks from '../components/withLinks'

// Blog post: Google's AI Overview for "SEO Agentur Kaufbeuren" names Valbrix Digital first.
// Facts come from Valdi's own incognito screenshot (location Kaufbeuren).
const copy = {
  de: {
    back: '← Zurück zur Startseite',
    label: 'Valbrix Digital · Blog',
    h1: 'SEO Agentur Kaufbeuren: Googles KI nennt uns zuerst',
    alt: 'Google-Suche nach „SEO Agentur Kaufbeuren“: Die KI-Übersicht nennt Valbrix Digital an erster Stelle',
    intro: [
      'Neulich habe ich ein Inkognito-Fenster aufgemacht und „SEO Agentur Kaufbeuren“ bei Google eingegeben.',
      'Ganz oben steht die KI-Übersicht. Google fasst dort selbst zusammen, welche SEO- und Online-Marketing-Agenturen es in Kaufbeuren gibt.',
      'Erster Name auf der Liste: Valbrix Digital. Mit unseren Leistungen und unserer Adresse.',
      'Ich habe zweimal hingeschaut. (Und dann natürlich sofort einen Screenshot gemacht.)',
    ],
    sections: [
      {
        h2: 'Kurz ehrlich bleiben',
        paragraphs: [
          'Das ist die KI-Übersicht. Nicht das erste normale Suchergebnis. Und Google zeigt jedem etwas andere Ergebnisse, je nach Standort, Gerät und Tag.',
          'Aber die KI hat sich ihre Liste selbst zusammengesucht. Vier Agenturen aus Kaufbeuren. Und uns zuerst genannt.',
        ],
      },
      {
        h2: 'Warum mich das mehr freut als jede Anzeige',
        paragraphs: [
          'Für die KI-Übersicht kann man nicht bezahlen. Kein Budget, kein Trick, kein „Gesponsert“ daneben.',
          'Google nennt dort die Firmen, bei denen es SICHER ist: wer sie sind, was sie machen und wo sie sitzen.',
          'Und immer mehr Leute lesen genau diese Box zuerst. Bevor sie überhaupt irgendwo draufklicken.',
        ],
      },
      {
        h2: 'Was ich gemacht habe',
        paragraphs: [
          'Nichts Geheimes. Vier Dinge, die jeder Betrieb in Kaufbeuren genauso machen kann.',
          'Erstens: das Google-Unternehmensprofil komplett ausgefüllt. Jedes Feld. Kategorien, Leistungen mit Beschreibung, Telefonnummer, Website, Terminbuchung.',
          'Zweitens: überall derselbe Name, dieselbe Adresse, dieselbe Telefonnummer. Auf der Website, bei Google, auf LinkedIn, in den Branchenverzeichnissen. Klingt langweilig. Ist es auch. Aber wenn Google an drei Stellen drei verschiedene Schreibweisen findet, weiß es nicht, ob das dieselbe Firma ist.',
          '(Ganz fertig bin ich da selbst noch nicht. Das Telefonbuch kennt mich zum Beispiel noch als „Zherka Valdi“. Wird gerade korrigiert.)',
          'Drittens: eine eigene Seite für jede Stadt. [Kaufbeuren](/marketing-agentur-kaufbeuren), [Kempten](/werbeagentur-kempten), [Memmingen](/werbeagentur-memmingen). So weiß Google genau, wo wir arbeiten.',
          'Viertens: strukturierte Daten. Ein Stück Code auf der Website, das Google sagt: Das ist Valbrix Digital, das ist die Adresse, das sind die Leistungen, hier ist das Google-Profil, hier LinkedIn.',
          'Das war\'s.',
        ],
      },
      {
        h2: 'Was das für Sie heißt',
        paragraphs: [
          'Ihre Kunden fragen Google. Und immer öfter antwortet die KI, bevor jemand auf eine Website klickt.',
          'Wenn Google nicht genau weiß, wer Sie sind, nennt es eben jemand anderen. So einfach ist das.',
          'Die gute Nachricht: Das meiste davon ist Fleißarbeit. Profil ausfüllen. Daten angleichen. Seiten bauen. Dranbleiben.',
          'Eine Garantie dafür gibt es nicht. Von niemandem. Wer Ihnen Platz 1 garantiert, verkauft Ihnen etwas, das er nicht in der Hand hat.',
          'Was ich Ihnen sagen kann: Genau diese Arbeit mache ich jeden Tag. Für mich selbst, und für Betriebe im Ostallgäu. Mehr dazu auf der Seite zur [lokalen SEO](/leistungen/seo-optimization).',
        ],
      },
    ],
    ctaHeading: 'Wo steht Ihr Betrieb bei Google?',
    ctaText: 'Ich schaue mir Ihr Google-Profil kostenlos an und sage Ihnen, was fehlt. Ehrlich, ohne Fachchinesisch.',
    ctaButton: 'Kostenlosen Profil-Check anfragen',
  },
  en: {
    back: '← Back to Home',
    label: 'Valbrix Digital · Blog',
    h1: 'SEO Agency Kaufbeuren: Google\'s AI names us first',
    alt: 'Google search for "SEO Agentur Kaufbeuren": the AI Overview names Valbrix Digital first',
    intro: [
      'The other day I opened an incognito window and typed "SEO Agentur Kaufbeuren" into Google.',
      'Right at the top sits the AI Overview. Google sums up, on its own, which SEO and online marketing agencies there are in Kaufbeuren.',
      'First name on the list: Valbrix Digital. With our services and our address.',
      'I looked twice. (Then took a screenshot, obviously.)',
    ],
    sections: [
      {
        h2: 'Staying honest for a second',
        paragraphs: [
          'This is the AI Overview. Not the first regular search result. And Google shows everyone slightly different results, depending on location, device and day.',
          'But the AI put its list together by itself. Four agencies from Kaufbeuren. And named us first.',
        ],
      },
      {
        h2: 'Why this beats any ad',
        paragraphs: [
          'You can\'t pay for the AI Overview. No budget, no trick, no "Sponsored" label next to it.',
          'Google names the businesses it is SURE about: who they are, what they do and where they are.',
          'And more and more people read exactly that box first. Before they click on anything.',
        ],
      },
      {
        h2: 'What I did',
        paragraphs: [
          'Nothing secret. Four things any business in Kaufbeuren can do too.',
          'One: filled in the Google Business Profile completely. Every field. Categories, services with descriptions, phone number, website, booking link.',
          'Two: the same name, the same address, the same phone number everywhere. On the website, on Google, on LinkedIn, in the business directories. Sounds boring. It is. But when Google finds three spellings in three places, it can\'t tell if that\'s one business.',
          '(I\'m not fully there myself yet. The phone book still knows me as "Zherka Valdi". Being fixed right now.)',
          'Three: a page for every town. [Kaufbeuren](/marketing-agentur-kaufbeuren), [Kempten](/werbeagentur-kempten), [Memmingen](/werbeagentur-memmingen). So Google knows exactly where we work.',
          'Four: structured data. A bit of code on the website that tells Google: this is Valbrix Digital, this is the address, these are the services, here\'s the Google profile, here\'s LinkedIn.',
          'That\'s it.',
        ],
      },
      {
        h2: 'What this means for you',
        paragraphs: [
          'Your customers ask Google. And more and more often the AI answers before anyone clicks on a website.',
          'If Google isn\'t sure who you are, it names someone else. Simple as that.',
          'The good news: most of this is just work. Fill in the profile. Line up your details. Build the pages. Keep going.',
          'Nobody can guarantee a result like this. Nobody. Anyone who guarantees you the top spot is selling you something they don\'t control.',
          'What I can tell you: this is exactly the work I do every day. For myself, and for businesses in the Ostallgäu. More on the [local SEO](/leistungen/seo-optimization) page.',
        ],
      },
    ],
    ctaHeading: 'Where does your business stand on Google?',
    ctaText: 'I\'ll check your Google profile for free and tell you what\'s missing. Straight, no jargon.',
    ctaButton: 'Request a free profile check',
  },
}

export default function GoogleAiRankingPage() {
  const { lang } = useLanguage()
  const c = copy[lang] || copy.de

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
          {c.back}
        </Link>

        <div className="section-label mb-6">{c.label}</div>
        <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight mb-8">
          {c.h1}
        </h1>

        <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
          {c.intro.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <img
          src="/google-suche-seo-agentur-kaufbeuren-screenshot.jpg"
          alt={c.alt}
          width="2000"
          height="1136"
          className="w-full h-auto rounded-xl my-10 border border-gray-200"
        />

        <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
          {c.sections.map((s, i) => (
            <div key={i} className="space-y-5">
              <h2 className="font-display font-bold text-gray-900 text-2xl pt-4">{s.h2}</h2>
              {s.paragraphs.map((p, j) => <p key={j}>{withLinks(p)}</p>)}
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-8 text-center mt-14" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <h2 className="font-display font-bold text-gray-900 text-xl mb-5">{c.ctaHeading}</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">{c.ctaText}</p>
          <Link to="/#contact" className="btn-primary inline-flex px-7 py-4 text-base">
            <span>{c.ctaButton}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
