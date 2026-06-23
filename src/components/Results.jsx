import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const statsMeta = [
  { prefix: '+', value: 250, suffix: '%', icon: '📡', gradient: 'from-blue-500 to-cyan-400', glow: 'rgba(59, 130, 246, 0.3)' },
  { prefix: '', value: 3, suffix: 'x', icon: '🎯', gradient: 'from-purple-500 to-pink-400', glow: 'rgba(168, 85, 247, 0.3)' },
  { prefix: '', value: 40, suffix: '%', icon: '💰', gradient: 'from-emerald-400 to-teal-400', glow: 'rgba(52, 211, 153, 0.3)' },
  { prefix: '', value: 90, suffix: '-Day', icon: '🗺️', gradient: 'from-amber-400 to-orange-400', glow: 'rgba(251, 191, 36, 0.3)' },
]

function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatCard({ meta, label, description }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const count = useCounter(meta.value, 2000, visible)

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl p-8 overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2"
      style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 50%, ${meta.glow}, transparent 65%)` }}
      />
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${meta.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative text-center">
        <div className="text-3xl mb-4">{meta.icon}</div>

        <div className="flex items-end justify-center gap-0.5 mb-3">
          {meta.prefix && (
            <span className={`font-display font-black text-5xl md:text-6xl leading-none bg-gradient-to-br ${meta.gradient} bg-clip-text text-transparent`}>
              {meta.prefix}
            </span>
          )}
          <span className={`font-display font-black text-5xl md:text-6xl leading-none bg-gradient-to-br ${meta.gradient} bg-clip-text text-transparent`}>
            {count}
          </span>
          <span className={`font-display font-black text-3xl md:text-4xl leading-none pb-1 bg-gradient-to-br ${meta.gradient} bg-clip-text text-transparent`}>
            {meta.suffix}
          </span>
        </div>

        <h3 className="font-display font-bold text-gray-900 text-base mb-2">{label}</h3>
        <p className="text-gray-400 text-xs leading-relaxed max-w-[180px] mx-auto">{description}</p>
      </div>
    </div>
  )
}

export default function Results() {
  const { t } = useLanguage()
  const r = t.results

  return (
    <section id="results" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 overflow-hidden">
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="section-label mb-6">{r.sectionLabel}</div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight mb-5">
            {r.heading} <span className="gradient-text">{r.headingGradient}</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">{r.subheading}</p>
          <p className="text-gray-400 text-xs mt-2 italic">{r.disclaimer}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {r.stats.map((stat, i) => (
            <StatCard key={i} meta={statsMeta[i]} label={stat.label} description={stat.description} />
          ))}
        </div>

        <div
          className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
          style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
        >
          <div className="absolute inset-0 overflow-hidden">
          </div>
          <div className="relative text-center md:text-left">
            <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{r.bottomHeading}</h3>
            <p className="text-gray-500 text-sm">{r.bottomSubheading}</p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary relative shrink-0 px-6 py-3"
          >
            <span>{r.bottomCta}</span>
            <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
