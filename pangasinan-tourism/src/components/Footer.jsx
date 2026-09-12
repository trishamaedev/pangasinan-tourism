import './Footer.css'

const links = [
  { id: 'home', label: 'Home', href: '#/' },
  { id: 'hundred-islands', label: 'Hundred Islands', href: '#/hundred-islands' },
  { id: 'bolinao-lighthouse', label: 'Cape Bolinao Lighthouse', href: '#/bolinao-lighthouse' },
  { id: 'balungao-hot-spring', label: 'Balungao Hot Spring', href: '#/balungao-hot-spring' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <h3>PANGASINAN</h3>
          <p>Discover the beauty, history, and natural destinations of Pangasinan, Philippines.</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {links.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer__note">Pangasinan, Philippines 🇵🇭</p>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>&copy; © 2026 Pangasinan Travel Guide | Developed by Trisha Mae R. Tababa.</p>
        </div>
      </div>
    </footer>
  )
}
