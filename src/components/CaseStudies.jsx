import { useLanguage } from '../context/LanguageContext'

const caseStudiesMeta = [
  {
    emoji: '🏠',
    results: [
      { metric: '+380%' },
      { metric: '4.7x' },
      { metric: '90 Days' },
    ],
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'rgba(59, 130, 246, 0.15)',
    accentColor: '#60a5fa',
  },
  {
    emoji: '👗',
    results: [
      { metric: '-44%' },
      { metric: '+210%' },
      { metric: '2.4x' },
    ],
    gradient: 'from-purple-500 to-pink-400',
    glow: 'rgba(168, 85, 247, 0.15)',
    accentColor: '#a855f7',
  },
  {
    emoji: '🎤',
    results: [
      { metric: '+520%' },
      { metric: '8x' },
      { metric: '+15' },
    ],
    gradient: 'from-emerald-400 to-teal-400',
    glow: 'rgba(52, 211, 153, 0.15)',
    accentColor: '#34d399',
  },
]

export default function CaseStudies() {
  const { t } = useLanguage()
  const c = t.caseStudies

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="section-label mb-6">{c.sectionLabel}</div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight mb-5">
            {c.heading} <span className="gradient-text">{c.headingGradient}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">{c.subheading}</p>
          <p className="text-gray-300 text-xs mt-2 italic">{c.disclaimer}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {c.items.map((cs, i) => {
            const meta = caseStudiesMeta[i]
            return (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-default"
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
              >
                <div className={`h-1 bg-gradient-to-r ${meta.gradient}`} />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${meta.glow}, transparent 60%)` }}
                />

                <div className="relative p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-2xl">{meta.emoji}</span>
                    <div>
                      <p className="text-gray-400 text-[10px] font-medium uppercase tracking-widest">{cs.category}</p>
                      <p className="text-gray-500 text-xs">{cs.industry}</p>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-gray-900 text-lg leading-tight mb-5">{cs.title}</h3>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-1 rounded-full bg-red-400" />
                      <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider">{c.challengeLabel}</p>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      <p className="text-blue-400 text-[10px] font-bold uppercase tracking-wider">{c.solutionLabel}</p>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{cs.solution}</p>
                  </div>

                  <div
                    className="rounded-xl p-4"
                    style={{ background: '#f1f5f9', border: '1px solid #e2e8f0' }}
                  >
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-3">{c.resultsLabel}</p>
                    <div className="grid grid-cols-3 gap-3">
                      {meta.results.map((r, j) => (
                        <div key={j} className="text-center">
                          <p className={`font-display font-black text-base leading-none mb-1 bg-gradient-to-br ${meta.gradient} bg-clip-text text-transparent`}>
                            {r.metric}
                          </p>
                          <p className="text-gray-400 text-[9px] leading-tight">{cs.resultLabels[j]}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-400 text-[10px]">{cs.tag}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
