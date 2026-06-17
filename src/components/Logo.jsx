export default function Logo({ size = 'md', variant = 'full' }) {
  const scales = {
    sm: { width: 110, height: 52 },
    md: { width: 140, height: 66 },
    lg: { width: 180, height: 85 },
  }
  const { width, height } = scales[size] || scales.md

  if (variant === 'icon') {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="iconGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#d4a017" />
            <stop offset="100%" stopColor="#f0c040" />
          </linearGradient>
          <filter id="iconGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Sparkle star only */}
        <g filter="url(#iconGlow)">
          <path
            d="M18 4 L19.8 15.5 L31 18 L19.8 20.5 L18 32 L16.2 20.5 L5 18 L16.2 15.5 Z"
            fill="url(#iconGrad)"
          />
        </g>
      </svg>
    )
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Valbrix Digital"
    >
      <defs>
        {/* Gold gradient for "valbrix" */}
        <linearGradient id="goldGrad" x1="0" y1="0" x2="140" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c8850a" />
          <stop offset="40%" stopColor="#e9a820" />
          <stop offset="100%" stopColor="#d4a017" />
        </linearGradient>

        {/* Blue-gold mixed gradient for the star */}
        <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#f0c040" />
        </linearGradient>

        {/* Subtle glow filter for "valbrix" */}
        <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Star glow */}
        <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* "digital" label — small, white/muted, top-left */}
      <text
        x="2"
        y="16"
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="10"
        fontWeight="400"
        letterSpacing="0.04em"
        fill="rgba(255,255,255,0.65)"
      >
        digital
      </text>

      {/* Horizontal line from "digital" to star */}
      <line
        x1="42"
        y1="11"
        x2="125"
        y2="11"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.8"
      />

      {/* 4-pointed sparkle star */}
      <g filter="url(#starGlow)">
        <path
          d="M130 4 L131.4 10 L137 11 L131.4 12 L130 18 L128.6 12 L123 11 L128.6 10 Z"
          fill="url(#starGrad)"
        />
      </g>

      {/* "valbrix" — large, high-contrast serif, gold */}
      <text
        x="0"
        y="58"
        fontFamily="'Cormorant Garamond', 'Georgia', serif"
        fontSize="44"
        fontWeight="600"
        letterSpacing="-0.02em"
        fill="url(#goldGrad)"
        filter="url(#goldGlow)"
      >
        valbrix
      </text>
    </svg>
  )
}
