import './LocationSection.css'
import { PinIcon } from './icons.jsx'

export default function LocationSection({ location }) {
  return (
    <section className="location-section">
      <div className="container location-section__inner">
        <div className="location-section__text">
          <h2>Where Is It Located?</h2>
          <p className="location-section__value">
            <PinIcon width={20} height={20} />
            {location}
          </p>
        </div>

        <div className="location-section__map" role="img" aria-label={`Map marker showing ${location}`}>
          <svg viewBox="0 0 240 160" width="100%" height="100%" aria-hidden="true">
            <rect x="0" y="0" width="240" height="160" fill="var(--sand)" />
            <path d="M0 40 Q60 10 120 40 T240 40" stroke="var(--gold)" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M0 90 Q70 60 140 92 T240 88" stroke="var(--gold)" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M0 130 Q80 108 160 132 T240 124" stroke="var(--gold)" strokeWidth="1.5" fill="none" opacity="0.6" />
            <circle cx="120" cy="80" r="7" fill="var(--terracotta)" />
            <circle cx="120" cy="80" r="14" fill="none" stroke="var(--terracotta)" strokeWidth="1.5" opacity="0.5" />
          </svg>
        </div>
      </div>
    </section>
  )
}
