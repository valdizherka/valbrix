import { useState, useEffect } from 'react'
import Logo from './Logo'
import { useLanguage } from '../context/LanguageContext'

const navHrefs = [
  { key: 'home', href: '#home' },
  { key: 'freeVideo', href: '#free-video' },
  { key: 'contact', href: '#contact' },
]

function LanguageSwitcher({ compact = false }) {
  const { lang, switchLanguage } = useLanguage()

  return (
    <div
      className="flex items-center rounded-lg overflow-hidden"
      style={{ background: '#f1f5f9', border: '1px solid #e2e8f0' }}
    >
      {['en', 'de'].map((code) => (
        <button
          key={code}
          onClick={() => switchLanguage(code)}
          className={`px-2.5 py-1.5 text-xs font-bold tracking-wider transition-all duration-200 ${
            lang === code
              ? 'text-gray-900 bg-white'
              : 'text-gray-400 hover:text-gray-600'
          } ${compact ? 'px-2 py-1' : ''}`}
          aria-label={code === 'en' ? 'Switch to English' : 'Auf Deutsch wechseln'}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { t, lang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const navLinks = navHrefs.map((item) => ({
    label: t.nav[item.key],
    href: item.href,
  }))

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/95 backdrop-blur-xl border-b border-gray-200'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#home') }}
            className="flex items-center group transition-opacity duration-300 hover:opacity-85"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeLink === link.href
                    ? 'text-[#b8860a]'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {activeLink === link.href && (
                  <span className="absolute inset-0 rounded-lg bg-white/[0.07]" />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Desktop right side: language switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleLinkClick('#contact') }}
              className="btn-primary text-sm px-5 py-2.5"
            >
              <span>{t.nav.cta}</span>
              <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Mobile: language switcher + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher compact />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl glass-card"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-white/95 backdrop-blur-2xl"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 rounded-2xl glass-card p-6 transition-all duration-500 ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex flex-col gap-2 mb-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:text-white hover:bg-white/[0.05] transition-all duration-200 font-medium"
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
              >
                <span className="text-xs font-mono" style={{ color: '#c8850a' }}>0{i + 1}</span>
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact') }}
            className="btn-primary w-full justify-center"
          >
            <span>{t.nav.cta}</span>
          </a>
        </div>
      </div>
    </>
  )
}
