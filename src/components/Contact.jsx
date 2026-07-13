import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../context/LanguageContext'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function InputField({ label, name, type = 'text', placeholder, required, value, onChange }) {
  return (
    <div className="group">
      <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
        {label} {required && <span style={{ color: '#c8850a' }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-300"
        style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
        onFocus={(e) => {
          e.target.style.border = '1px solid #b8860a'
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
          <p className="text-gray-500 text-lg leading-relaxed">{c.subheading}</p>
        </div>

        <div className="max-w-2xl mx-auto">
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
                        e.target.style.border = '1px solid #b8860a'
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
    </section>
  )
}
