import './Hero.css'
import { PinIcon } from './icons.jsx'

export default function Hero({
  id,
  eyebrow,
  title,
  subtitle,
  description,
  location,
  backgroundImage,
  imageAlt,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section
      id={id}
      className={`hero${backgroundImage ? '' : ' hero--no-image'}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      role="img"
      aria-label={imageAlt}
    >
      <div className="hero__scrim" />
      <div className="container hero__content">
        {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {description && <p className="hero__description">{description}</p>}
        {location && (
          <p className="hero__location">
            <PinIcon width={16} height={16} />
            {location}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="hero__actions">
            {primaryCta && (
              <a href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
