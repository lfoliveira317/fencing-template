import { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'

const slides = [
  {
    src: '/images/background-hero1.png',
    label: 'Cedar & Wood Fencing',
  },
  {
    src: '/images/background-hero2.png',
    label: 'Ornamental Iron & Aluminum',
  },
  {
    src: '/images/background-hero3.png',
    label: 'Vinyl & PVC Fencing',
  },
]

const Hero = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero-section">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-bg ${i === active ? 'hero-bg-active' : ''}`}
          style={{ backgroundImage: `url(${slide.src})` }}
        />
      ))}
      <div className="hero-overlay" />

      <Container>
        <div className="hero-content text-center">
          <span className="hero-badge">🏆 Certified Fencing Professionals — Winnipeg, MB</span>

          <h1 className="hero-title">
            Built to Last.<br />
            <em>Installed to Impress.</em>
          </h1>

          <p className="hero-subtitle">
            From residential wood privacy fences to ornamental iron and farm fencing —
            we deliver premium craftsmanship with a lifetime workmanship guarantee.
          </p>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button href="#contact" className="btn-hero-primary">Get a Free Estimate</Button>
            <Button href="#services" className="btn-hero-outline">View Services</Button>
          </div>

          <div className="hero-stats">
            <div>
              <span className="hero-stat-number">1,200+</span>
              <span className="hero-stat-label">Projects Done</span>
            </div>
            <div>
              <span className="hero-stat-number">15 Yrs</span>
              <span className="hero-stat-label">Experience</span>
            </div>
            <div>
              <span className="hero-stat-number">4.8 ★</span>
              <span className="hero-stat-label">Avg Rating</span>
            </div>
          </div>

          <div className="hero-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === active ? 'hero-dot-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
