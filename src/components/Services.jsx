import { useLanguage } from '../context/LanguageContext'

const serviceMeta = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    tags: ['Instagram', 'Facebook', 'TikTok', 'LinkedIn'],
    gradient: 'from-pink-500 to-rose-500',
    glow: 'rgba(244, 63, 94, 0.15)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    tags: ['Meta Ads', 'Google Ads', 'Retargeting', 'A/B Testing'],
    gradient: 'from-blue-500 to-indigo-500',
    glow: 'rgba(59, 130, 246, 0.15)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    tags: ['Brand Identity', 'Positioning', 'Messaging', 'Voice & Tone'],
    gradient: 'from-purple-500 to-violet-500',
    glow: 'rgba(168, 85, 247, 0.15)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    tags: ['Video', 'Copywriting', 'Graphics', 'Photography'],
    gradient: 'from-amber-400 to-orange-500',
    glow: 'rgba(251, 191, 36, 0.15)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
      </svg>
    ),
    tags: ['Funnels', 'Lead Magnets', 'Email Sequences', 'CRM'],
    gradient: 'from-emerald-400 to-teal-500',
    glow: 'rgba(52, 211, 153, 0.15)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    tags: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Local SEO'],
    gradient: 'from-cyan-400 to-sky-500',
    glow: 'rgba(34, 211, 238, 0.15)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    tags: ['Conversion Rate', 'UX Design', 'Landing Pages', 'A/B Testing'],
    gradient: 'from-indigo-400 to-blue-500',
    glow: 'rgba(129, 140, 248, 0.15)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    tags: ['Google Analytics', 'Meta Pixel', 'Custom Dashboards', 'KPI Tracking'],
    gradient: 'from-rose-400 to-pink-500',
    glow: 'rgba(251, 113, 133, 0.15)',
  },
]

export default function Services() {
  const { t } = useLanguage()
  const s = t.services

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#060914]" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="glow-orb glow-orb-cyan w-[400px] h-[400px] top-20 right-0 opacity-20" />
      <div className="glow-orb glow-orb-blue w-[400px] h-[400px] bottom-20 left-0 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="section-label mb-6">{s.sectionLabel}</div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-tight leading-tight mb-5">
            {s.heading}
            <br />
            <span className="gradient-text">{s.headingGradient}</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">{s.subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.items.map((service, i) => {
            const meta = serviceMeta[i]
            return (
              <div
                key={i}
                className="group relative rounded-2xl p-6 overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${meta.glow}, transparent 60%)` }}
                />

                <div className="relative">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-white mb-5 bg-gradient-to-br ${meta.gradient} transition-all duration-300 group-hover:scale-110`}
                    style={{ boxShadow: `0 4px 20px ${meta.glow}` }}
                  >
                    {meta.icon}
                  </div>

                  <h3 className="font-display font-bold text-white text-base mb-2.5 leading-tight">{service.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed mb-4">{service.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-medium text-white/50"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className="mt-5 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                    style={{ color: '#60a5fa' }}
                  >
                    {s.learnMore}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-white/40 text-sm mb-5">{s.notSure}</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary inline-flex px-7 py-3.5"
          >
            <span>{s.ctaButton}</span>
            <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
