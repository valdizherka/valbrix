import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#04060f]" />
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-0 left-0 opacity-20" />
      <div className="glow-orb glow-orb-cyan w-[400px] h-[400px] bottom-0 right-0 opacity-15" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left — Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <div
                className="w-full aspect-[4/5] rounded-2xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(124,58,237,0.15) 50%, rgba(6,182,212,0.1) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #3b82f6, #7c3aed)', boxShadow: '0 0 40px rgba(59,130,246,0.4)' }}
                    >
                      <span className="text-white font-black text-3xl font-display">V</span>
                    </div>
                    <p className="text-white/30 text-sm font-medium">Founder Photo</p>
                    <p className="text-white/15 text-xs mt-1">Replace with actual image</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div
                  className="absolute top-8 left-8 w-16 h-16 rounded-full opacity-20"
                  style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
                />
                <div
                  className="absolute bottom-12 right-8 w-24 h-24 rounded-full opacity-15"
                  style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
                />
              </div>
            </div>

            {/* Floating stats card */}
            <div
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl px-5 py-4 animate-float-slow"
              style={{
                background: 'rgba(10, 15, 30, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-black text-lg leading-none">{a.floatingCard.clients}</p>
                  <p className="text-white/40 text-xs mt-0.5">{a.floatingCard.industries}</p>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div
              className="absolute -top-4 -left-4 lg:-left-8 rounded-xl px-4 py-3 animate-float"
              style={{
                background: 'rgba(10, 15, 30, 0.95)',
                border: '1px solid rgba(59,130,246,0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 30px rgba(59,130,246,0.2)',
              }}
            >
              <p className="text-blue-400 font-black text-xl leading-none">{a.floatingCard.badge}</p>
              <p className="text-white/30 text-xs mt-0.5">{a.floatingCard.badgeDesc}</p>
            </div>
          </div>

          {/* Right — Copy */}
          <div className="order-1 lg:order-2 space-y-7">
            <div>
              <div className="section-label mb-5">{a.sectionLabel}</div>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-tight leading-tight mb-5">
                {a.heading}
                <br />
                <span className="gradient-text">{a.headingGradient}</span>
              </h2>
            </div>

            <div className="space-y-4 text-white/60 text-base leading-relaxed">
              <p>{a.paragraph1}</p>
              <p>{a.paragraph2}</p>
              <p>{a.paragraph3}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {a.values.map((v, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 group hover:border-blue-500/30 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <p className="text-white font-semibold text-sm">{v.label}</p>
                  </div>
                  <p className="text-white/35 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5 pt-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
              >
                <span>{a.cta}</span>
                <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
