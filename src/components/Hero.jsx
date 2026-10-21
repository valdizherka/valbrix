import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t, lang } = useLanguage()
  const h = t.hero

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-40 pb-32">
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative max-w-4xl mx-auto px-6 w-full">
        <div className="text-center">

          <div className="space-y-10 flex flex-col items-center">
            <div className="flex flex-col items-center gap-2">
              <p
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base md:text-lg font-bold text-white"
                style={{ background: '#b8860a', boxShadow: '0 8px 24px -8px rgba(184,134,10,0.55)' }}
              >
                <span aria-hidden="true">✓</span>
                {h.guarantee}
              </p>
              <Link to="/faq" className="text-xs text-gray-400 hover:text-gray-700 underline">
                {h.guaranteeTerms}
              </Link>
            </div>

            <h1 className="font-display font-black leading-[1.08] text-6xl sm:text-7xl xl:text-8xl text-gray-900 tracking-tight">
              {lang === 'de' ? (
                <>
                  {h.headline1}
                  <br />
                  <span style={{ color: '#b8860a' }}>{h.headline2}</span>
                </>
              ) : (
                <>
                  {h.headline1}
                  <br />
                  {h.headline2}
                  <br />
                  <span style={{ color: '#b8860a' }}>{h.headline3}</span>
                </>
              )}
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              {h.subheadline}
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary px-7 py-4 text-base"
              >
                <span>{h.ctaPrimary}</span>
                <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#free-video"
                onClick={(e) => { e.preventDefault(); document.querySelector('#free-video')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline px-7 py-4 text-base"
              >
                {h.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
