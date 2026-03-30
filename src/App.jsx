import { useEffect } from 'react'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    if (!sessionStorage.getItem('_tracked')) {
      sessionStorage.setItem('_tracked', '1')
      fetch('https://site-tracker-delta.vercel.app/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          site: window.location.hostname,
          page: window.location.pathname,
          referrer: document.referrer,
        }),
      }).catch(() => {})
    }
  }, [])

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Process />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
