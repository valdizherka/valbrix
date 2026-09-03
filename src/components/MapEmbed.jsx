import { useState } from 'react'

const accentColor = '#b8860a'

export default function MapEmbed({ height = 280 }) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #e2e8f0' }}>
        <iframe
          title="Valbrix Digital auf Google Maps - Merowingerstraße 2, 87600 Kaufbeuren"
          src="https://www.google.com/maps?q=Merowingerstra%C3%9Fe+2,+87600+Kaufbeuren&output=embed"
          width="100%"
          height={height}
          style={{ border: 0, display: 'block' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    )
  }

  return (
    <div
      className="rounded-2xl flex flex-col items-center justify-center text-center px-6 py-10"
      style={{ height, background: '#f8fafc', border: '1px solid #e2e8f0' }}
    >
      <svg className="w-8 h-8 mb-3" viewBox="0 0 24 24" fill="none" style={{ color: accentColor }}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" fill="currentColor" />
      </svg>
      <p className="text-gray-600 text-sm mb-4 max-w-xs">
        Beim Laden der Karte wird eine Verbindung zu Google hergestellt und Ihre IP-Adresse übertragen.
      </p>
      <button
        onClick={() => setLoaded(true)}
        className="btn-outline text-sm px-5 py-2.5"
      >
        Google Maps laden
      </button>
    </div>
  )
}
