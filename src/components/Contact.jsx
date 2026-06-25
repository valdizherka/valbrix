import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../context/LanguageContext'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactInfoMeta = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    value: 'hello@valbrixdigital.com',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-purple-500 to-violet-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    gradient: 'from-emerald-400 to-teal-400',
  },
]

const contactInfoValues = ['team@valbrixdigital.com']

function InputField({ label, name, type = 'text', placeholder, required, value, onChange }) {
  return (
    <div className="group">
      <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
        {label} {required && <span className="text-blue-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500/30"
        style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
        onFocus={(e) => {
          e.target.style.border = '1px solid #3b82f6'
          e.target.style.background = '#ffffff'
        }}
        onBlur={(e) => {
          e.target.style.border = '1px solid #e2e8f0'
          e.target.style.background = '#f8fafc'
        }}
      />
    </div>
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const f = c.form

  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', business: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const templateParams = {
      from_name: formData.name,
      reply_to:  formData.email,
      business:  formData.business,
      service:   formData.service,
      message:   formData.message,
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      const msg = err?.text || err?.message || JSON.stringify(err)
      setError(`Error: ${msg}`)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSubmitted(false)
    setError('')
    setFormData({ name: '', email: '', business: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="section-label mb-6">{c.sectionLabel}</div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight mb-5">
            {c.heading} <span className="gradient-text">{c.headingGradient}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">{c.subheading}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12">
          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-5">
            {c.infoLabels.map((label, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 flex items-center gap-4"
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 bg-gradient-to-br ${contactInfoMeta[i].gradient}`}>
                  {contactInfoMeta[i].icon}
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium mb-0.5">{label}</p>
                  <p className="text-gray-900 font-semibold text-sm">{c.infoValues[i]}</p>
                </div>
              </div>
            ))}

            <div
              className="rounded-2xl p-6 mt-4"
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
            >
              <h3 className="font-display font-bold text-gray-900 text-sm mb-4">{c.whatNext}</h3>
              <div className="space-y-3">
                {c.nextSteps.map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5"
                      style={{ background: 'linear-gradient(135deg, #3b82f6, #7c3aed)' }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-7 md:p-9 relative overflow-hidden"
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-display font-black text-2xl text-gray-900 mb-3">{c.success.heading}</h3>
                  <p className="text-gray-500 text-base max-w-sm">{c.success.body}</p>
                  <button onClick={handleReset} className="mt-8 btn-outline text-sm px-5 py-2.5">
                    {c.success.reset}
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label={f.fullName}
                      name="name"
                      placeholder={f.placeholderName}
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <InputField
                      label={f.emailAddress}
                      name="email"
                      type="email"
                      placeholder={f.placeholderEmail}
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <InputField
                    label={f.businessName}
                    name="business"
                    placeholder={f.placeholderBusiness}
                    required
                    value={formData.business}
                    onChange={handleChange}
                  />


                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                      {f.businessDesc}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={f.placeholderMessage}
                      rows={5}
                      className="w-full rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 resize-none"
                      style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
                      onFocus={(e) => {
                        e.target.style.border = '1px solid #3b82f6'
                        e.target.style.background = '#ffffff'
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '1px solid #e2e8f0'
                        e.target.style.background = '#f8fafc'
                      }}
                    />
                  </div>

                  {error && (
                    <div
                      className="flex items-start gap-3 px-4 py-3 rounded-xl text-sm"
                      style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', color: '#fca5a5' }}
                    >
                      <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className={`btn-primary w-full py-4 text-base transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 relative z-10 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>{f.sending}</span>
                      </>
                    ) : (
                      <>
                        <span>{f.submitButton}</span>
                        <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-400 text-xs">{f.privacyNote}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
