import { useLanguage } from '../context/LanguageContext'

const testimonialsMeta = [
  { name: 'Marcus T.', role: 'Owner', company: 'Prime Renovations', avatar: 'MT', avatarGrad: 'from-blue-500 to-cyan-400', rating: 5, service: 'Lead Generation + Google Ads' },
  { name: 'Sofia L.', role: 'Founder & CEO', company: 'Lumine Skincare', avatar: 'SL', avatarGrad: 'from-purple-500 to-pink-400', rating: 5, service: 'Meta Ads + Creative Strategy' },
  { name: 'James K.', role: 'Business Coach', company: 'JK Performance Group', avatar: 'JK', avatarGrad: 'from-emerald-400 to-teal-400', rating: 5, service: 'Brand Strategy + Social Media' },
]

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLanguage()
  const tm = t.testimonials

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="section-label mb-6">{tm.sectionLabel}</div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight mb-5">
            {tm.heading} <span className="gradient-text">{tm.headingGradient}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">{tm.subheading}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {tm.items.map((item, i) => {
            const meta = testimonialsMeta[i]
            return (
              <div
                key={i}
                className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-default"
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
              >
                <div className="absolute top-5 right-5 opacity-[0.07]">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="mb-5">
                  <StarRating count={meta.rating} />
                </div>

                <div
                  className="px-3 py-2.5 rounded-lg mb-4 text-sm font-semibold text-gray-700 italic"
                  style={{ background: '#eff6ff', borderLeft: '2px solid #3b82f6' }}
                >
                  "{item.highlight}"
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">"{item.text}"</p>

                <div className="h-px bg-white/[0.06] mb-5" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white bg-gradient-to-br ${meta.avatarGrad} shrink-0`}
                    >
                      {meta.avatar}
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">{meta.name}</p>
                      <p className="text-gray-400 text-xs">{meta.role} · {meta.company}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <span
                    className="text-[10px] font-medium text-gray-400 px-2 py-1 rounded"
                    style={{ background: '#f1f5f9' }}
                  >
                    {meta.service}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {tm.socialProof.map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display font-black text-2xl text-gray-900 mb-0.5">{item.value}</p>
              <p className="text-gray-400 text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
