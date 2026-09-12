import './Gallery.css'
import { CompassIcon } from './icons.jsx'

export default function Gallery({ heading, destinationName, items }) {
  return (
    <section className="gallery-section">
      <div className="container">
        <div className="section-heading">
          <h2>{heading}</h2>
        </div>
      </div>

      <div className="container gallery-grid">
        {items.map((item) => (
          <figure key={item.caption} className={`gallery-item gallery-item--${item.size}`}>
            {item.src ? (
              <img src={item.src} alt={item.alt} loading="lazy" />
            ) : (
              <div className="gallery-item__placeholder">
                <CompassIcon width={32} height={32} />
                <span>Add photo: {item.filename}</span>
              </div>
            )}
            <figcaption className="gallery-item__overlay">
              {destinationName} — {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
