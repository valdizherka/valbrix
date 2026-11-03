import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const copy = {
  de: {
    label: 'Fehler 404',
    h1: 'Diese Seite gibt es nicht.',
    body: 'Vielleicht ein alter Link oder ein Tippfehler. Passiert.',
    home: 'Zur Startseite',
    services: 'Unsere Leistungen',
  },
  en: {
    label: 'Error 404',
    h1: 'This page does not exist.',
    body: 'Maybe an old link or a typo. Happens.',
    home: 'Back to home',
    services: 'Our services',
  },
}

export default function NotFoundPage() {
  const { lang } = useLanguage()
  const c = copy[lang] || copy.de

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <div className="section-label mb-5">{c.label}</div>
        <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight mb-6">
          {c.h1}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-10">{c.body}</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="btn-primary inline-flex px-7 py-4 text-base">
            <span>{c.home}</span>
          </Link>
          <Link
            to="/leistungen"
            className="inline-flex items-center px-7 py-4 text-base text-gray-700 rounded-full"
            style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
          >
            {c.services}
          </Link>
        </div>
      </div>
    </section>
  )
}
