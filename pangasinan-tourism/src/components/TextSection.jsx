import './TextSection.css'

export default function TextSection({ kicker, heading, text, tone = 'light' }) {
  return (
    <section className={`text-section text-section--${tone}`}>
      <div className="container text-section__inner">
        {kicker && <p className="text-section__kicker">{kicker}</p>}
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </section>
  )
}
