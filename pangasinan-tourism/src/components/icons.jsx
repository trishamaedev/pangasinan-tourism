// Small line-icon set shared across the site. Kept together so every icon
// follows the same stroke weight and style.

const common = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IslandsIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M4 34c4-8 8-8 12 0s8 8 12 0 8-8 12 0" />
      <path d="M4 40c4-8 8-8 12 0s8 8 12 0 8-8 12 0" opacity="0.5" />
      <circle cx="30" cy="12" r="5" />
    </svg>
  )
}

export function LandmarkIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M8 42h32" />
      <path d="M12 42V20M20 42V20M28 42V20M36 42V20" />
      <path d="M6 20l18-10 18 10" />
    </svg>
  )
}

export function SpringIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M6 32c4-6 8-6 12 0s8 6 12 0 8-6 12 0" />
      <path d="M6 40c4-6 8-6 12 0s8 6 12 0 8-6 12 0" opacity="0.5" />
      <path d="M18 8c-3 4-3 7 0 10M24 6c-3 4-3 7 0 10M30 8c-3 4-3 7 0 10" />
    </svg>
  )
}

export function BeachIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M4 40h40" />
      <path d="M24 40c0-12-6-20-16-24" />
      <path d="M24 40c0-8 5-13 13-15" />
      <circle cx="36" cy="12" r="5" />
    </svg>
  )
}

export function LighthouseIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M19 44h10l-2-30h-6z" />
      <path d="M17 14h14l-2-6H19z" />
      <path d="M24 4v4" />
      <path d="M9 24l6-2M39 24l-6-2" />
      <path d="M4 44h40" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M24 44s14-13.6 14-24a14 14 0 1 0-28 0c0 10.4 14 24 14 24z" />
      <circle cx="24" cy="20" r="5" />
    </svg>
  )
}

export function CompassIcon(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="24" cy="24" r="18" />
      <path d="M30 18l-4 10-10 4 4-10z" />
    </svg>
  )
}
