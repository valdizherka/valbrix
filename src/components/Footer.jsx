import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="section-divider" />
      <div
        className="relative py-6"
        style={{ background: '#04060f', borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Logo size="sm" />
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Valbrix Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
