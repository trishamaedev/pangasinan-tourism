import './ExploreMore.css'
import { destinations } from '../data/destinations.js'

export default function ExploreMore({ currentId }) {
  const others = destinations.filter((d) => d.id !== currentId)

  return (
    <section className="explore-more">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__kicker">Keep exploring</p>
          <h2>Explore Another Destination</h2>
        </div>

        <div className="explore-more__grid">
          {others.map((d) => (
            <a key={d.id} href={d.route} className="explore-more__card">
              {d.cardImage ? (
                <img src={d.cardImage} alt={d.cardAlt} loading="lazy" />
              ) : (
                <div className="explore-more__placeholder" aria-hidden="true" />
              )}
              <div className="explore-more__card-body">
                <p className="explore-more__location">{d.location}</p>
                <h3>{d.name}</h3>
                <span className="explore-more__link">View Destination</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
