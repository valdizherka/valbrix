import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="section-divider" />
      <div
        className="relative py-6"
        style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Logo size="sm" />
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Valbrix Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
