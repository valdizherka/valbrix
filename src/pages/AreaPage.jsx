import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import NotFoundPage from './NotFoundPage'
import FAQItem from '../components/FAQItem'
import withLinks from '../components/withLinks'

const chip = 'text-sm text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full transition-colors duration-200'
const chipStyle = { background: '#f8fafc', border: '1px solid #e2e8f0' }

// One page per town outside Kaufbeuren. Copy lives in t.areaPages.items[slug].
export default function AreaPage({ slug }) {
  const { t } = useLanguage()
  const ap = t.areaPages
  const area = ap.items[slug]

  if (!area) return <NotFoundPage />

  const otherAreas = Object.entries(ap.items).filter(([itemSlug]) => itemSlug !== slug)

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/einsatzgebiete" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
          ← {ap.backLink}
        </Link>

        <div className="section-label mb-5">{area.label}</div>
        <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight mb-6">
          {area.h1}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-2xl">
          {withLinks(area.intro)}
        </p>

        {area.sections.map((section, i) => (
          <div key={i} className="mb-12">
            <h2 className="font-display font-bold text-gray-900 text-2xl mb-4">{section.h2}</h2>
            <div className="space-y-4">
              {section.paragraphs?.map((p, j) => (
                <p key={j} className="text-gray-600 leading-relaxed">{withLinks(p)}</p>
              ))}
              {section.list && (
                <ul className="space-y-3 pl-5 list-disc marker:text-gray-400">
                  {section.list.map((item, j) => (
                    <li key={j} className="text-gray-600 leading-relaxed">{withLinks(item)}</li>
                  ))}
                </ul>
              )}
              {section.after?.map((p, j) => (
                <p key={j} className="text-gray-600 leading-relaxed">{withLinks(p)}</p>
              ))}
            </div>
          </div>
        ))}

        <div className="mb-12">
          <h2 className="font-display font-bold text-gray-900 text-2xl mb-2">{area.faqTitle}</h2>
          {area.faq.map((item, i) => (
            <FAQItem key={i} item={{ question: item.question, answer: withLinks(item.answer) }} />
          ))}
        </div>

        <div className="rounded-2xl p-8 text-center mb-12" style={chipStyle}>
          <h2 className="font-display font-bold text-gray-900 text-xl mb-5">{area.ctaHeading}</h2>
          <Link to="/#contact" className="btn-primary inline-flex px-7 py-4 text-base">
            <span>{ap.ctaButton}</span>
          </Link>
        </div>

        <div>
          <h2 className="font-display font-bold text-gray-900 text-lg mb-4">{ap.areasLabel}</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/marketing-agentur-kaufbeuren" className={chip} style={chipStyle}>Kaufbeuren</Link>
            {otherAreas.map(([itemSlug, item]) => (
              <Link key={itemSlug} to={`/werbeagentur-${itemSlug}`} className={chip} style={chipStyle}>{item.title}</Link>
            ))}
            <Link to="/einsatzgebiete" className={chip} style={chipStyle}>{ap.allAreasLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
