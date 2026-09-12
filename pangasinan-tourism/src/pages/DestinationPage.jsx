import Hero from '../components/Hero.jsx'
import TextSection from '../components/TextSection.jsx'
import LocationSection from '../components/LocationSection.jsx'
import Gallery from '../components/Gallery.jsx'
import ExploreMore from '../components/ExploreMore.jsx'
import { getDestination } from '../data/destinations.js'
import './DestinationPage.css'

export default function DestinationPage({ destinationId }) {
  const d = getDestination(destinationId)

  return (
    <div className="destination-page">
      <Hero
        id={d.id}
        title={d.heroTitle}
        subtitle={d.subtitle}
        location={d.location}
        backgroundImage={d.heroImage ?? undefined}
        imageAlt={d.heroAlt}
        primaryCta={{ label: 'View Gallery', href: '#gallery' }}
      />

      {!d.heroImage && (
        <div className="destination-page__hero-note">
          <div className="container">
            <p>
              Hero photograph pending &mdash; drop a licensed image of {d.name} into
              <code> src/assets/images/</code> and pass it as this page&rsquo;s{' '}
              <code>heroImage</code>.
            </p>
          </div>
        </div>
      )}

      <TextSection heading={d.famousForHeading} text={d.famousFor} tone="light" />

      <LocationSection location={d.location} />

      <TextSection
        kicker="Overview"
        heading={d.descriptionHeading}
        text={d.description}
        tone="sand"
      />

      <div id="gallery">
        <Gallery heading={d.galleryHeading} destinationName={d.name} items={d.gallery} />
      </div>

      <TextSection kicker="Why visit" heading={d.extraHeading} text={d.extraText} tone="light" />

      <ExploreMore currentId={d.id} />
    </div>
  )
}
