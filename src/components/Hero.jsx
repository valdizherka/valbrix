import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

function DashboardMockup({ d }) {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <div className="glow-orb glow-orb-blue w-72 h-72 -top-20 -right-10 opacity-60" />
      <div className="glow-orb glow-orb-purple w-56 h-56 -bottom-10 -left-10 opacity-50" />

      <div className="relative rounded-2xl overflow-hidden border-glow animate-float">
        <div
          className="rounded-2xl p-5"
          style={{
            background: 'rgba(10, 15, 30, 0.9)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-white/40 text-xs font-medium mb-0.5">{d.overview}</p>
              <p className="text-white font-bold text-sm">{d.performance}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">{d.live}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: d.totalReach, value: '284K', change: '+47%', up: true },
              { label: d.conversions, value: '1,842', change: '+31%', up: true },
              { label: d.costPerLead, value: '$4.20', change: '-38%', up: false },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-3"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-white/40 text-[10px] mb-1">{stat.label}</p>
                <p className="text-white font-bold text-base leading-none mb-1">{stat.value}</p>
                <span className="text-[10px] font-semibold text-emerald-400">{stat.change}</span>
              </div>
            ))}
          </div>

          <div
            className="relative rounded-xl p-4 mb-4 overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', height: '100px' }}
          >
            <p className="text-white/30 text-[10px] mb-3">{d.revenueGrowth}</p>
            <svg viewBox="0 0 300 60" className="w-full h-10" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 55 L20 48 L40 45 L60 40 L80 38 L100 32 L120 28 L140 24 L160 20 L180 16 L200 14 L220 10 L240 8 L260 5 L280 4 L300 2 L300 60 L0 60 Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M0 55 L20 48 L40 45 L60 40 L80 38 L100 32 L120 28 L140 24 L160 20 L180 16 L200 14 L220 10 L240 8 L260 5 L280 4 L300 2"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="space-y-2">
            {[
              { name: 'Meta Ads — Lead Gen', status: 'Active', roas: '4.2x', bar: 84, color: '#3b82f6' },
              { name: 'Google Search — Brand', status: 'Active', roas: '6.1x', bar: 92, color: '#a855f7' },
              { name: 'Instagram Retargeting', status: 'Optimizing', roas: '3.8x', bar: 71, color: '#22d3ee' },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white/70 text-[11px] font-medium truncate">{c.name}</p>
                    <span className="text-white font-bold text-[11px] ml-2 shrink-0">{c.roas}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${c.bar}%`, background: c.color }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute -top-6 -left-8 rounded-xl px-3.5 py-2.5 animate-float-reverse hidden md:flex items-center gap-2.5"
        style={{
          background: 'rgba(10, 15, 30, 0.9)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.15)',
        }}
      >
        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
          <span className="text-sm">🎯</span>
        </div>
        <div>
          <p className="text-white text-[11px] font-semibold">{d.newLead}</p>
          <p className="text-white/50 text-[10px]">{d.fromGoogleAds}</p>
        </div>
      </div>

      <div
        className="absolute -bottom-4 -right-6 rounded-xl px-3.5 py-2.5 animate-float-slow hidden md:flex items-center gap-2.5"
        style={{
          background: 'rgba(10, 15, 30, 0.9)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.15)',
        }}
      >
        <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
          <span className="text-sm">📈</span>
        </div>
        <div>
          <p className="text-white text-[11px] font-semibold">{d.reach}</p>
          <p className="text-white/50 text-[10px]">{d.thisMonth}</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-grid opacity-100" />

      <div className="glow-orb glow-orb-blue w-[600px] h-[600px] -top-40 -left-40 opacity-40" />
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-1/2 -right-40 opacity-30" />
      <div className="glow-orb glow-orb-cyan w-[300px] h-[300px] bottom-0 left-1/3 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
              style={{
                background: 'rgba(59,130,246,0.08)',
                border: '1px solid rgba(59,130,246,0.2)',
                color: '#93c5fd'
              }}
            >
              <div className="glow-dot" />
              {h.badge}
            </div>

            <div className="space-y-2">
              <h1 className="font-display font-black leading-[1.05] text-5xl sm:text-6xl xl:text-7xl text-white tracking-tight">
                {h.headline1}
                <br />
                {h.headline2}
                <br />
                <span className="gradient-text">{h.headline3}</span>
              </h1>
            </div>

            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              {h.subheadline}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
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
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline px-7 py-4 text-base"
              >
                {h.ctaSecondary}
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: '⚡', label: h.trustBadges[0] },
                { icon: '📍', label: h.trustBadges[1] },
                { icon: '🧭', label: h.trustBadges[2] },
                { icon: '🚫', label: h.trustBadges[3] },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-white/70"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <span>{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:block">
            <DashboardMockup d={h.dashboard} />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs tracking-widest uppercase">{h.scroll}</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
