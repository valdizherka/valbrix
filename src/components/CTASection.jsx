import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../context/LanguageContext'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function CTASection() {
  const { t } = useLanguage()
  const c = t.cta

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const templateParams = {
      from_name: 'Free Video Request',
      reply_to: email,
      business: '',
      service: 'Free Video Request',
      message: `Requested the free "Top 3 on Google" video. Email: ${email}`,
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError(c.form.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="free-video" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
          style={{
            background: 'rgba(184,134,10,0.1)',
            border: '1px solid rgba(184,134,10,0.25)',
            color: '#b8860a',
          }}
        >
          <div className="glow-dot" />
          {c.badge}
        </div>

        <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-[1.15] mb-6">
          {c.heading1} <span style={{ color: '#b8860a' }}>{c.headingGradient}</span>
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          {c.body}
        </p>

        {submitted ? (
          <div className="rounded-2xl p-8" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <p className="font-display font-bold text-gray-900 text-lg mb-2">{c.form.successHeading}</p>
            <p className="text-gray-500 text-sm">{c.form.successBody}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (error) setError('') }}
              placeholder={c.form.placeholder}
              className="flex-1 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-300"
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
              onFocus={(e) => { e.target.style.border = '1px solid #b8860a' }}
              onBlur={(e) => { e.target.style.border = '1px solid #e2e8f0' }}
            />
            <button
              type="submit"
              disabled={loading}
              className={`btn-primary px-6 py-3.5 text-sm whitespace-nowrap ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <span>{loading ? c.form.sending : c.form.submitButton}</span>
            </button>
          </form>
        )}

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <p className="text-gray-400 text-xs mt-4">{c.form.noSpam}</p>
      </div>
    </section>
  )
}
