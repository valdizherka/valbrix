import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="section-divider" />
      <div
        className="relative py-6"
        style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 text-xs pb-4">
            Valbrix Digital · Merowingerstraße 2, 87600 Kaufbeuren ·{' '}
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
