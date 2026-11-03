import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const copy = {
  de: {
    back: '← Zurück zur Startseite',
    label: 'Rechtliches',
    h1: 'Impressum',
    note: null,
    infoH2: 'Angaben gemäß § 5 DDG',
    country: 'Deutschland',
    contactH2: 'Kontakt',
    email: 'E-Mail',
    phone: 'Telefon',
    disputeH2: 'Verbraucherstreitbeilegung',
    dispute: 'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
  },
  en: {
    back: '← Back to home',
    label: 'Legal',
    h1: 'Legal Notice (Impressum)',
    note: 'This is an English translation for your convenience. The German version is the legally binding one.',
    infoH2: 'Information pursuant to § 5 DDG',
    country: 'Germany',
    contactH2: 'Contact',
    email: 'Email',
    phone: 'Phone',
    disputeH2: 'Consumer dispute resolution',
    dispute: 'We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.',
  },
}

export default function ImpressumPage() {
  const { lang } = useLanguage()
  const c = copy[lang] || copy.de


  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
          {c.back}
        </Link>

        <div className="mb-12">
          <div className="section-label mb-6">{c.label}</div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
            {c.h1}
          </h1>
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          {c.note && (
            <p className="text-sm rounded-xl px-4 py-3" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              {c.note}
            </p>
          )}

          <div>
            <h2 className="font-display font-bold text-gray-900 text-xl mb-3">{c.infoH2}</h2>
            <p>
              Valdi Zherka<br />
              Valbrix Digital<br />
              Merowingerstraße 2<br />
              87600 Kaufbeuren<br />
              {c.country}
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-gray-900 text-xl mb-3">{c.contactH2}</h2>
            <p>
              {c.email}: <a href="mailto:team@valbrixdigital.com" className="hover:text-gray-900 underline">team@valbrixdigital.com</a><br />
              {c.phone}: <a href="tel:+4917660154700" className="hover:text-gray-900 underline">0176 60154700</a>
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-gray-900 text-xl mb-3">{c.disputeH2}</h2>
            <p>{c.dispute}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
