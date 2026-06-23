import { useLanguage } from '../context/LanguageContext'

const differentiatorMeta = [
  {
    number: '01',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01-.007 12c0 1.547.292 3.027.82 4.39m.824 1.61A11.953 11.953 0 0012 24c1.547 0 3.027-.292 4.39-.82m1.61-.824A11.955 11.955 0 0024 12c0-1.547-.292-3.027-.82-4.39M12 12v.01" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-400',
    glowColor: 'rgba(59, 130, 246, 0.3)',
  },
  {
    number: '02',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-400',
    glowColor: 'rgba(168, 85, 247, 0.3)',
  },
  {
    number: '03',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    gradient: 'from-emerald-400 to-teal-400',
    glowColor: 'rgba(52, 211, 153, 0.3)',
  },
  {
    number: '04',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    gradient: 'from-amber-400 to-orange-400',
    glowColor: 'rgba(251, 191, 36, 0.3)',
  },
]

export default function WhyChooseUs() {
  const { t } = useLanguage()
  const w = t.why

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: '#ffffff' }} />
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="section-label mb-6">{w.sectionLabel}</div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight mb-5">
            {w.heading} <span className="gradient-text">{w.headingGradient}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">{w.subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {w.items.map((item, i) => {
            const meta = differentiatorMeta[i]
            return (
              <div
                key={i}
                className="group relative rounded-2xl p-8 overflow-hidden cursor-default transition-all duration-500"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${meta.glowColor}, transparent 60%)` }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${meta.gradient} text-white transition-transform duration-300 group-hover:scale-110`}
                    >
                      {meta.icon}
                    </div>
                    <span
                      className="font-display font-black text-5xl leading-none"
                      style={{ color: 'rgba(0,0,0,0.04)' }}
                    >
                      {meta.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-gray-900 mb-3 leading-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>

                  <div
                    className={`mt-6 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-700 bg-gradient-to-r ${meta.gradient}`}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
