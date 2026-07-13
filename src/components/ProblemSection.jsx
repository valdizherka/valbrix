import { useLanguage } from '../context/LanguageContext'

const accentColor = '#b8860a'

export default function ProblemSection() {
  const { t } = useLanguage()
  const p = t.problem

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="section-label mb-6">{p.sectionLabel}</div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 leading-tight tracking-tight mb-6">
            {p.heading}
            <br />
            <span className="text-gray-400">{p.headingGradient}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">{p.subheading}</p>
        </div>

        <div>
          {p.problems.map((prob, i) => (
            <div key={i} className="flex gap-6 md:gap-10 py-10 border-t border-gray-100 first:border-t-0">
              <span
                className="font-display font-black text-4xl md:text-5xl shrink-0 w-16 md:w-20"
                style={{ color: accentColor }}
              >
                0{i + 1}
              </span>
              <div>
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ background: `${accentColor}15`, color: accentColor, border: `1px solid ${accentColor}30` }}
                >
                  {prob.tag}
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 mb-3 leading-tight">{prob.title}</h3>
                <p className="text-gray-500 leading-relaxed max-w-xl">{prob.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
