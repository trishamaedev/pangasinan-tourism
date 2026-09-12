import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import HundredIslands from './pages/HundredIslands.jsx'
import BolinaoLighthouse from './pages/BolinaoLighthouse.jsx'
import BalungaoHotSpring from './pages/BalungaoHotSpring.jsx'

export const routes = {
  home: { path: '#/', label: 'Home' },
  'hundred-islands': { path: '#/hundred-islands', label: 'Hundred Islands' },
  'bolinao-lighthouse': { path: '#/bolinao-lighthouse', label: 'Bolinao Lighthouse' },
  'balungao-hot-spring': { path: '#/balungao-hot-spring', label: 'Balungao Hot Spring' },
}

function pageFromHash(hash) {
  const clean = hash.replace(/^#\/?/, '')
  if (clean.startsWith('hundred-islands')) return 'hundred-islands'
  if (clean.startsWith('bolinao-lighthouse')) return 'bolinao-lighthouse'
  if (clean.startsWith('balungao-hot-spring')) return 'balungao-hot-spring'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(() => pageFromHash(window.location.hash))

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash
      
      if (!hash.startsWith('#/')) return
      setPage(pageFromHash(hash))
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  let PageComponent = Home
  if (page === 'hundred-islands') PageComponent = HundredIslands
  if (page === 'bolinao-lighthouse') PageComponent = BolinaoLighthouse
  if (page === 'balungao-hot-spring') PageComponent = BalungaoHotSpring

  return (
    <>
      <Navbar activePage={page} />
      <main>
        <PageComponent />
      </main>
      <Footer />
    </>
  )
}
