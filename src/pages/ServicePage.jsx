import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function ServicePage() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const sp = t.servicePages
  const service = sp.items[slug]

  useEffect(() => {
    if (service) {
      document.title = `${service.title} - Valbrix Digital`
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', service.metaDescription)
    }
  }, [service])

  if (!service) return <Navigate to="/" replace />

  const otherServices = Object.entries(sp.items).filter(([itemSlug]) => itemSlug !== slug)

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
          ← {sp.backLink}
        </Link>

        <div className="section-label mb-5">{t.services.sectionLabel}</div>
        <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight mb-6">
          {service.title}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-2xl">
          {service.intro}
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

        <div className="rounded-2xl p-8 text-center mb-12" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <h2 className="font-display font-bold text-gray-900 text-xl mb-5">
            {sp.ctaHeading} {service.title}?
          </h2>
          <Link to="/#contact" className="btn-primary inline-flex px-7 py-4 text-base">
            <span>{sp.ctaButton}</span>
          </Link>
        </div>

        <div>
          <h2 className="font-display font-bold text-gray-900 text-lg mb-4">{sp.relatedLabel}</h2>
          <div className="flex flex-wrap gap-3">
            {otherServices.map(([itemSlug, item]) => (
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
      </div>
    </section>
  )
}
