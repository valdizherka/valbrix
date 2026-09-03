import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ImpressumPage() {
  useEffect(() => {
    document.title = 'Impressum | Valbrix Digital'
  }, [])

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
          ← Zurück zur Startseite
        </Link>

        <div className="mb-12">
          <div className="section-label mb-6">Rechtliches</div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
            Impressum
          </h1>
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="font-display font-bold text-gray-900 text-xl mb-3">Angaben gemäß § 5 DDG</h2>
            <p>
              Valdi Zherka<br />
              Valbrix Digital<br />
              Merowingerstraße 2<br />
              87600 Kaufbeuren<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-gray-900 text-xl mb-3">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:team@valbrixdigital.com" className="hover:text-gray-900 underline">team@valbrixdigital.com</a><br />
              Telefon: <a href="tel:+4917660154700" className="hover:text-gray-900 underline">0176 60154700</a>
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold text-gray-900 text-xl mb-3">Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
