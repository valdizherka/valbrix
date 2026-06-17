import { useLanguage } from '../context/LanguageContext'

const tagColors = ['#f87171', '#fbbf24', '#a78bfa']

const icons = [
  (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
]

export default function ProblemSection() {
  const { t } = useLanguage()
  const p = t.problem

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#04060f]" />
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-0 right-0 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="section-label mb-6">{p.sectionLabel}</div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight tracking-tight mb-6">
            {p.heading}
            <br />
            <span className="gradient-text">{p.headingGradient}</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">{p.subheading}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {p.problems.map((prob, i) => (
            <div key={i} className="glass-card-hover rounded-2xl p-7 group cursor-default">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${tagColors[i]}15`, color: tagColors[i] }}
              >
                {icons[i]}
              </div>

              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: `${tagColors[i]}15`, color: tagColors[i], border: `1px solid ${tagColors[i]}30` }}
              >
                {prob.tag}
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-3 leading-tight">{prob.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{prob.body}</p>

              <div
                className="mt-6 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${tagColors[i]}, transparent)` }}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold text-white/80"
            style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}
          >
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {p.bridge}
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
