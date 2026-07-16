import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display font-bold text-gray-900 text-lg">{item.question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '400px' : '0px' }}
      >
        <p className="text-gray-500 leading-relaxed pb-6 pr-10">{item.answer}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const { t } = useLanguage()
  const f = t.faqPage
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    document.title = 'Valbrix Digital - Digital Marketing Agency FAQ'
  }, [])

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
          ← {f.backLink}
        </Link>

        <div className="mb-16">
          <div className="section-label mb-6">{f.sectionLabel}</div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight mb-6">
            {f.heading}
            <br />
            <span style={{ color: '#b8860a' }}>{f.headingGradient}</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">{f.subheading}</p>
        </div>

        <div>
          {f.items.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="rounded-2xl p-8 text-center mt-16" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <h2 className="font-display font-bold text-gray-900 text-xl mb-3">{f.ctaHeading}</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">{f.ctaBody}</p>
          <Link to="/#free-video" className="btn-primary inline-flex px-7 py-4 text-base">
            <span>{f.ctaButton}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
