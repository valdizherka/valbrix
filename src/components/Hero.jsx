import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

function PhoneMockup({ p }) {
  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      <div
        className="relative rounded-[2.75rem] p-3 animate-float"
        style={{ background: '#111827', boxShadow: '0 30px 60px -15px rgba(15,23,42,0.35)' }}
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black z-10" />

        <div className="relative rounded-[2.1rem] overflow-hidden bg-white" style={{ aspectRatio: '9 / 19.5' }}>
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-semibold text-gray-900">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-2 rounded-[1px] border border-gray-900" />
              <div className="w-3.5 h-2 rounded-[2px] border border-gray-900 relative">
                <div className="absolute inset-0.5 bg-gray-900 rounded-[1px]" />
              </div>
            </div>
          </div>

          <div className="px-4 pt-2 pb-3">
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2.5"
              style={{ background: '#f1f3f4' }}
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="#5f6368" strokeWidth="2" />
                <path d="M21 21l-4.35-4.35" stroke="#5f6368" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-[11px] text-gray-700 truncate">{p.searchQuery}</span>
              <span className="w-px h-3 bg-blue-500 animate-pulse ml-0.5" />
            </div>
          </div>

          <div className="px-4 pb-4 space-y-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: '#e8f0fe' }}>
                  <span className="text-[8px] font-bold" style={{ color: '#1a73e8' }}>V</span>
                </div>
                <span className="text-[10px] text-gray-700">{p.resultUrl}</span>
              </div>
              <p className="text-[13px] leading-snug mb-1" style={{ color: '#1a0dab' }}>{p.resultTitle}</p>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[10px]" style={{ color: '#f9ab00' }}>★★★★★</span>
                <span className="text-[10px] text-gray-500">5.0 · {p.reviews}</span>
              </div>
              <p className="text-[11px] text-gray-600 leading-snug">{p.resultDesc}</p>
            </div>

            <div className="space-y-2 opacity-40">
              <div className="h-2 w-1/3 rounded bg-gray-200" />
              <div className="h-2.5 w-4/5 rounded bg-gray-300" />
              <div className="h-2 w-2/3 rounded bg-gray-200" />
            </div>
            <div className="space-y-2 opacity-30">
              <div className="h-2 w-1/4 rounded bg-gray-200" />
              <div className="h-2.5 w-3/4 rounded bg-gray-300" />
              <div className="h-2 w-1/2 rounded bg-gray-200" />
            </div>
          </div>

          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-gray-900/80" />
        </div>
      </div>

      <div
        className="absolute -top-10 -left-16 rounded-xl px-3.5 py-2.5 animate-float-reverse hidden md:flex items-center gap-2.5"
        style={{
          background: '#ffffff',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.15)',
        }}
      >
        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
          <span className="text-sm">🔍</span>
        </div>
        <div>
          <p className="text-gray-900 text-[11px] font-semibold">{p.rankBadge}</p>
          <p className="text-gray-500 text-[10px]">{p.foundVia}</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-40 pb-32">
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          <div className="space-y-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400">
              {h.badge}
            </span>

            <h1 className="font-display font-black leading-[1.08] text-6xl sm:text-7xl xl:text-8xl text-gray-900 tracking-tight">
              {h.headline1}
              <br />
              {h.headline2}
              <br />
              <span className="gradient-text">{h.headline3}</span>
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
                href="#process"
                onClick={(e) => { e.preventDefault(); document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline px-7 py-4 text-base"
              >
                {h.ctaSecondary}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-6 text-xs text-gray-400">
              {h.trustBadges.map((label, i) => (
                <span key={label} className="flex items-center gap-3">
                  {i > 0 && <span className="text-gray-300">·</span>}
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative lg:block">
            <PhoneMockup p={h.phone} />
          </div>
        </div>
      </div>
    </section>
  )
}
