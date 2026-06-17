import { useLanguage } from '../context/LanguageContext'

export default function CTASection() {
  const { t } = useLanguage()
  const c = t.cta

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#060914]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="glow-orb glow-orb-blue w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />
        <div className="glow-orb glow-orb-purple w-[400px] h-[400px] bottom-0 left-0 opacity-20" />
        <div className="glow-orb glow-orb-cyan w-[300px] h-[300px] top-0 right-0 opacity-15" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
          style={{
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.25)',
            color: '#93c5fd',
          }}
        >
          <div className="glow-dot" />
          {c.badge}
        </div>

        <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] mb-6">
          {c.heading1}
          <br />
          <span className="gradient-text">{c.headingGradient}</span>
        </h2>

        <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          {c.body}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary px-9 py-5 text-base"
          >
            <span>{c.ctaButton}</span>
            <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {c.noCreditCard}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {c.trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/40 text-sm">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
