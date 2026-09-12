import './FeaturedCard.css'

export default function FeaturedCard({ destination }) {
  return (
    <article className="featured-card">
      <div className="featured-card__media">
        {destination.cardImage ? (
          <img src={destination.cardImage} alt={destination.cardAlt} loading="lazy" />
        ) : (
          <div className="featured-card__placeholder" aria-hidden="true" />
        )}
      </div>
      <div className="featured-card__body">
        <p className="featured-card__location">{destination.location}</p>
        <h3>{destination.name}</h3>
        <p>{destination.shortDescription}</p>
        <a href={destination.route} className="btn-primary">
          View Destination
        </a>
      </div>
    </article>
  )
}
