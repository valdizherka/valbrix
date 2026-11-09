import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

// Google Maps embed of our Business Profile, loaded only after a click (DSGVO):
// nothing is sent to Google until the visitor presses the button.
// The profile is a service-area listing, so the map shows the area, no street address.
const EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d342882.54770873283!2d10.508482249999998!3d47.82467635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d2dc24cda103ae5%3A0xaddbf7cfb43b7976!2sValbrix%20Digital!5e0!3m2!1sde!2sde!4v1794211351786!5m2!1sde!2sde'
const PROFILE_URL = 'https://maps.google.com/?cid=12527879259915254134'

const copy = {
  de: {
    label: 'Google Maps',
    h2: 'Valbrix Digital auf Google Maps',
    intro: 'Unser Sitz ist in Kaufbeuren. Wir arbeiten für Betriebe in Kaufbeuren und im ganzen Ostallgäu, und das zeigt auch unser Google-Unternehmensprofil.',
    notice: 'Wenn Sie die Karte laden, stellt Ihr Browser eine Verbindung zu Google her. Dabei werden Daten wie Ihre IP-Adresse an Google übertragen.',
    privacy: 'Mehr dazu in der Datenschutzerklärung',
    button: 'Karte laden',
    open: 'Profil in Google Maps öffnen',
    title: 'Valbrix Digital auf Google Maps',
  },
  en: {
    label: 'Google Maps',
    h2: 'Valbrix Digital on Google Maps',
    intro: 'We are based in Kaufbeuren. We work for businesses in Kaufbeuren and across the whole Ostallgäu, and our Google Business Profile shows that too.',
    notice: 'When you load the map, your browser connects to Google. Data such as your IP address is sent to Google.',
    privacy: 'More in the privacy policy',
    button: 'Load map',
    open: 'Open profile in Google Maps',
    title: 'Valbrix Digital on Google Maps',
  },
}

export default function MapEmbed() {
  const { lang } = useLanguage()
  const c = copy[lang] || copy.de
  const [loaded, setLoaded] = useState(false)

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="max-w-2xl mb-8">
          <div className="section-label mb-6">{c.label}</div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">{c.h2}</h2>
          <p className="text-gray-500 leading-relaxed">{c.intro}</p>
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #e2e8f0', background: '#f8fafc' }}>
          {loaded ? (
            <iframe
              src={EMBED_SRC}
              title={c.title}
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center px-6 py-16" style={{ minHeight: 420 }}>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mb-2">{c.notice}</p>
              <Link to="/datenschutz" className="text-sm underline text-gray-500 hover:text-gray-900 mb-6">{c.privacy}</Link>
              <button type="button" onClick={() => setLoaded(true)} className="btn-primary inline-flex px-6 py-3 text-sm">
                <span>{c.button}</span>
              </button>
            </div>
          )}
        </div>

        <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-semibold hover:underline" style={{ color: '#b8860a' }}>
          {c.open} →
        </a>
      </div>
    </section>
  )
}
