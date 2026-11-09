import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import NotFoundPage from './NotFoundPage'
import FAQItem from '../components/FAQItem'
import withLinks from '../components/withLinks'

export default function ServicePage() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const sp = t.servicePages
  const service = sp.items[slug]


  if (!service) return <NotFoundPage />

  const otherServices = Object.entries(sp.items).filter(([itemSlug]) => itemSlug !== slug)

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
          ← {sp.backLink}
        </Link>

        <div className="section-label mb-5">{t.services.sectionLabel}</div>
        <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight mb-6">
          {service.h1 || service.title}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-4 max-w-2xl">
          {service.intro}
        </p>
        <p className="text-gray-500 leading-relaxed mb-12 max-w-2xl">
          {service.areaMention ? withLinks(service.areaMention) : (
            <>
              {sp.areaMentionPrefix}{' '}
              <Link to="/marketing-agentur-kaufbeuren" className="font-semibold hover:underline" style={{ color: '#b8860a' }}>
                Kaufbeuren
              </Link>{' '}
              {sp.areaMentionSuffix}
            </>
          )}
        </p>

        <div className="rounded-2xl p-7 md:p-9 mb-8" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <h2 className="font-display font-bold text-gray-900 text-lg mb-5">{sp.includesLabel}</h2>
          <div className="space-y-3">
            {service.includes.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #7c3aed)' }}
                >
                  ✓
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-gray-900 text-lg mb-3">{sp.whyLabel}</h2>
          <p className="text-gray-500 leading-relaxed">{service.whyItMatters}</p>
        </div>

        {service.sections?.map((section, i) => (
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

        {service.faq && (
          <div className="mb-12">
            <h2 className="font-display font-bold text-gray-900 text-2xl mb-2">{service.faqTitle}</h2>
            {service.faq.map((item, i) => (
              <FAQItem key={i} item={{ question: item.question, answer: withLinks(item.answer) }} />
            ))}
          </div>
        )}

        <div className="rounded-2xl p-8 text-center mb-12" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <h2 className="font-display font-bold text-gray-900 text-xl mb-5">
            {sp.ctaHeading} {service.title}?
          </h2>
          <Link to="/#contact" className="btn-primary inline-flex px-7 py-4 text-base">
            <span>{sp.ctaButton}</span>
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="font-display font-bold text-gray-900 text-lg mb-4">{sp.relatedLabel}</h2>
          <div className="flex flex-wrap gap-3">
            {otherServices.slice(0, 4).map(([itemSlug, item]) => (
              <Link
                key={itemSlug}
                to={`/leistungen/${itemSlug}`}
                className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full transition-colors duration-200"
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display font-bold text-gray-900 text-lg mb-4">{sp.areasLabel}</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/marketing-agentur-kaufbeuren"
              className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full transition-colors duration-200"
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
            >
              Kaufbeuren
            </Link>
            <Link
              to="/einsatzgebiete"
              className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full transition-colors duration-200"
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
            >
              {sp.allAreasLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
