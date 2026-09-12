import heroImage from '../assets/images/pangasinan-hero.jpg'
import Hero from '../components/Hero.jsx'
import FeaturedCard from '../components/FeaturedCard.jsx'
import { destinations } from '../data/destinations.js'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Hero
        id="home"
        title="PANGASINAN"
        subtitle="Discover the Beauty Beyond the Horizon"
        description="Explore breathtaking islands, historic landmarks, and peaceful natural destinations in Pangasinan, Philippines."
        backgroundImage={heroImage}
        imageAlt="Panoramic view of Pangasinan"
        primaryCta={{ label: 'Explore Pangasinan', href: '#destinations' }}
      />

      <section className="intro">
        <div className="container intro__grid">
          
          <div className="intro__text">
            <p className="section-heading__kicker">The province</p>

            <h2>A Journey Through Pangasinan</h2>

            <p>
              Pangasinan is a province in the northern Philippines known for its remarkable
              landscapes, historical landmarks, coastal scenery, and natural attractions. From the
              islands of Alaminos to the historic lighthouse of Bolinao and the warm waters of
              Balungao, every destination offers a different glimpse of the province&rsquo;s
              beauty.
            </p>
          </div>

          <div className="intro__image">
            <img 
              src={heroImage} 
              alt="Beautiful view of Pangasinan"
            />
          </div>

        </div>
      </section>

      <section id="destinations" className="destinations">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="section-heading__kicker">Where to go</p>
            <h2>Featured Destinations</h2>
          </div>
        </div>

        <div className="container destinations__grid">
          {destinations.map((destination) => (
            <FeaturedCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </section>
    </div>
  )
}