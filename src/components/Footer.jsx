import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useLanguage } from '../context/LanguageContext'

const serviceLinkSlugs = [
  'seo-optimization',
  'google-ads',
  'meta-ads',
  'social-media-management',
  'brand-strategy',
  'content-creation',
  'lead-generation',
  'website-landing-page-strategy',
  'analytics-reporting',
]

export default function Footer() {
  const { t } = useLanguage()
  const services = t.servicePages.items

  return (
    <footer className="relative overflow-hidden">
      <div className="section-divider" />
      <div
        className="relative py-10"
        style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-8 pb-8 mb-6 border-b border-gray-100">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-3">{t.footer.servicesTitle}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {serviceLinkSlugs.map((slug) => (
                  <Link
                    key={slug}
                    to={`/leistungen/${slug}`}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {services[slug]?.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-3">{t.footer.areasTitle}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Link to="/marketing-agentur-kaufbeuren" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200">
                  Kaufbeuren
                </Link>
                <Link to="/einsatzgebiete" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200">
                  {t.footer.allAreasLink}
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-xs pb-4">
            Valbrix Digital · Kaufbeuren & Ostallgäu ·{' '}
            <a href="tel:+4917660154700" className="hover:text-gray-900 transition-colors duration-200">
              0176 60154700
            </a>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <Logo size="sm" />
            <div className="flex items-center gap-5">
              <p className="text-gray-400 text-xs">
                © {new Date().getFullYear()} Valbrix Digital. All rights reserved.
              </p>
              <Link to="/impressum" className="text-gray-400 hover:text-gray-900 text-xs transition-colors duration-200">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-gray-400 hover:text-gray-900 text-xs transition-colors duration-200">
                Datenschutz
              </Link>
              <a
                href="https://instagram.com/valbrix.digital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Valbrix Digital on Instagram"
                className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
