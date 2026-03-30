import { Container, Row, Col, Button } from 'react-bootstrap'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80',
    alt: 'Cedar wood privacy fence – residential backyard',
    span: 'col-lg-8',
  },
  {
    src: 'https://images.unsplash.com/photo-1621873495884-4e24baffb10a?w=600&h=600&fit=crop&q=80',
    alt: 'Ornamental iron fence – front yard',
    span: 'col-lg-4',
  },
  {
    src: 'https://images.unsplash.com/photo-1580063665421-38b1e55b92c1?w=600&h=500&fit=crop&q=80',
    alt: 'White vinyl PVC fence – property boundary',
    span: 'col-lg-4',
  },
  {
    src: 'https://images.unsplash.com/photo-1591584948762-5fc2be6fb4b0?w=600&h=500&fit=crop&q=80',
    alt: 'Chain-link security fencing – commercial property',
    span: 'col-lg-4',
  },
  {
    src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=500&fit=crop&q=80',
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
            <img src={img.src} alt={img.alt} loading="lazy" />
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
