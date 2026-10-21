import { useLanguage } from '../context/LanguageContext'

// Set to e.g. '/hero-video.mp4' (file in public/) once the video is recorded.
const HERO_VIDEO = null

function HeroVideo() {
  if (HERO_VIDEO) {
    return (
      <video
        src={HERO_VIDEO}
        controls
        playsInline
        preload="metadata"
        className="w-full rounded-3xl bg-black"
        style={{ aspectRatio: '16 / 9', boxShadow: '0 30px 60px -20px rgba(15,23,42,0.35)' }}
      />
    )
  }

  return (
    <div
      className="w-full rounded-3xl flex flex-col items-center justify-center gap-4"
      style={{
        aspectRatio: '16 / 9',
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 60%, #3b2a06 100%)',
        boxShadow: '0 30px 60px -20px rgba(15,23,42,0.35)',
      }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{ background: '#b8860a', boxShadow: '0 0 0 12px rgba(184,134,10,0.18)' }}
      >
        <svg className="w-8 h-8 ml-1 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <p className="text-white/70 text-sm">Video folgt in Kürze</p>
    </div>
  )
}

export default function Hero() {
  const { t, lang } = useLanguage()
  const h = t.hero

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-36 pb-24">
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 xl:gap-16 items-center">
          <div className="space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
            <p
              className="inline-flex items-start gap-2 text-lg md:text-xl font-bold"
              style={{ color: '#b8860a' }}
            >
              <span aria-hidden="true">✓</span>
              <span>{h.guarantee}<br className="hidden sm:block" /> {h.guaranteeLine2}</span>
            </p>

            <h1 className="font-display font-black leading-[1.02] text-6xl sm:text-7xl xl:text-8xl text-gray-900 tracking-tight">
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

            <p className="text-gray-500 text-xl leading-relaxed max-w-md">
              {h.subheadline}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center pt-2">
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

          <HeroVideo />
        </div>
      </div>
    </section>
  )
}
