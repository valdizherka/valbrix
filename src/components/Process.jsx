import { useLanguage } from '../context/LanguageContext'

const stepsMeta = [
  {
    number: '01',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
      </svg>
    ),
    duration: 'Week 1',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    number: '02',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    duration: 'Week 1–2',
    gradient: 'from-purple-500 to-violet-400',
  },
  {
    number: '03',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    duration: 'Week 2–3',
    gradient: 'from-emerald-400 to-teal-400',
  },
  {
    number: '04',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
    duration: 'Month 1–3',
    gradient: 'from-amber-400 to-orange-400',
  },
  {
    number: '05',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    duration: 'Month 3+',
    gradient: 'from-rose-400 to-pink-400',
  },
]

export default function Process() {
  const { t } = useLanguage()
  const p = t.process

  return (
    <section id="process" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="section-label mb-6">{p.sectionLabel}</div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight mb-5">
            {p.heading} <span className="gradient-text">{p.headingGradient}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">{p.subheading}</p>
        </div>

        <div className="relative">
          <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 timeline-line hidden lg:block" />

          <div className="space-y-6">
            {p.steps.map((step, i) => {
              const meta = stepsMeta[i]
              const isLeft = i % 2 === 0
              return (
                <div key={i} className="relative grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-navy-800 z-10 hidden lg:block"
                    style={{ background: `linear-gradient(135deg, ${meta.gradient.replace('from-', '').replace(' to-', ', ')})` }}
                  />

                  <div className={`${isLeft ? 'lg:col-start-1' : 'lg:col-start-2'} order-1`}>
                    <div
                      className="group rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
                      style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
                    >
                      <div
                        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${meta.gradient}`}
                        style={{ opacity: 0.6 }}
                      />

                      <div className="flex items-start gap-4">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 bg-gradient-to-br ${meta.gradient}`}
                          style={{ boxShadow: `0 4px 20px rgba(0,0,0,0.3)` }}
                        >
                          {meta.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs font-bold font-mono bg-gradient-to-r ${meta.gradient} bg-clip-text text-transparent`}>
                              {p.stepLabel} {meta.number}
                            </span>
                            <span className="text-gray-300 text-xs">·</span>
                            <span className="text-gray-400 text-xs">{meta.duration}</span>
                          </div>
                          <h3 className="font-display font-black text-xl text-gray-900 mb-0.5 leading-tight">{step.title}</h3>
                          <p className="text-gray-400 text-xs mb-3">{step.subtitle}</p>
                          <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>

                          <div
                            className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium"
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              color: 'rgba(255,255,255,0.6)',
                            }}
                          >
                            <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {p.deliverableLabel} {step.deliverable}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`hidden lg:block ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
