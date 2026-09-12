import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { id: 'home', label: 'Home', href: '#/' },
  { id: 'hundred-islands', label: 'Hundred Islands', href: '#/hundred-islands' },
  { id: 'bolinao-lighthouse', label: 'Bolinao Lighthouse', href: '#/bolinao-lighthouse' },
  { id: 'balungao-hot-spring', label: 'Balungao Hot Spring', href: '#/balungao-hot-spring' },
]

export default function Navbar({ activePage }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [activePage])

  return (
    <header className={`nav ${solid ? 'nav--solid' : 'nav--transparent'}`}>
      <div className="container nav__inner">
        <a href="#/" className="nav__brand">
          <span className="nav__brand-title">PANGASINAN</span>
        </a>

        <nav className="nav__links nav__links--desktop" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav__link${activePage === link.id ? ' nav__link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#/hundred-islands" className="nav__cta">
          Explore
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="nav__links nav__links--mobile" aria-label="Primary mobile">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`nav__link${activePage === link.id ? ' nav__link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <a href="#/hundred-islands" className="nav__cta nav__cta--mobile" onClick={() => setOpen(false)}>
            Explore
          </a>
        </nav>
      )}
    </header>
  )
}
