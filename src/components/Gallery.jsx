import { Container, Row, Col, Button } from 'react-bootstrap'

const images = [
  {
    src: '/images/wood.png',
    alt: 'Cedar wood privacy fence – residential backyard',
    span: 'col-lg-8',
  },
  {
    src: '/images/ornamental-iron.png',
    alt: 'Ornamental iron fence – front yard',
    span: 'col-lg-4',
  },
  {
    src: '/images/vinil.png',
    alt: 'White vinyl PVC fence – property boundary',
    span: 'col-lg-4',
  },
  {
    src: '/images/chain.png',
    alt: 'Chain-link security fencing – commercial property',
    span: 'col-lg-4',
  },
  {
    src: '/images/farm.png',
    alt: 'Farm and ranch post-and-rail fencing',
    span: 'col-lg-4',
  },
]

const Gallery = () => (
  <section id="gallery" className="gallery-section">
    <Container>
      <div className="text-center mb-5">
        <span className="section-label">Our Work</span>
        <h2 className="section-title">Projects We're Proud Of</h2>
        <p className="section-desc">
          Every fence tells the story of a job done right. Browse a sample of our recent installations across Winnipeg and surrounding areas.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className={`gallery-item ${img.span}`}>
            <img src={img.src} alt={img.alt} />
            <div className="gallery-overlay">
              <span>{img.alt}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Button href="#contact" className="btn-primary-cta">
          Get Your Free Estimate
        </Button>
      </div>
    </Container>
  </section>
)

export default Gallery
