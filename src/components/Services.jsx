import { Carousel } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

const services = [
  {
    img: '/images/wood.png',
    title: 'Wood Privacy Fencing',
    desc: "Classic cedar, pine, or treated wood panels built for Manitoba's climate. Stained, painted, or left natural.",
    price: 'From $28 / linear ft',
    color: 'svc-wood',
  },
  {
    img: '/images/chain.png',
    title: 'Chain-Link Fencing',
    desc: 'Galvanized or vinyl-coated chain-link for security without sacrificing sightlines. Residential and commercial.',
    price: 'From $22 / linear ft',
    color: 'svc-steel',
  },
  {
    img: '/images/vinil.png',
    title: 'Vinyl & PVC Fencing',
    desc: 'Low-maintenance, rot-proof vinyl panels that look great year after year. Never paint, never splinter.',
    price: 'From $35 / linear ft',
    color: 'svc-vinyl',
  },
  {
    img: '/images/ornamental-iron.png',
    title: 'Ornamental Iron & Aluminum',
    desc: 'Elegant powder-coated steel or lightweight aluminum fencing. Adds curb appeal and lasting prestige.',
    price: 'From $45 / linear ft',
    color: 'svc-iron',
  },
  {
    img: '/images/farm.png',
    title: 'Farm & Ranch Fencing',
    desc: 'Post-and-rail, wire, and electric fencing for livestock containment and large rural properties.',
    price: 'From $18 / linear ft',
    color: 'svc-farm',
  },
  {
    img: '/images/gate.png',
    title: 'Gate Installation & Automation',
    desc: 'Swing, slide, and cantilever gates with optional keypad, remote, or intercom automation systems.',
    price: 'From $850 / gate',
    color: 'svc-gate',
  },
]

const chunks = []
for (let i = 0; i < services.length; i += 3) {
  chunks.push(services.slice(i, i + 3))
}

const Services = () => (
  <section id="services" className="services-section">
    <Container>
      <div className="text-center mb-5">
        <span className="section-label">What We Build</span>
        <h2 className="section-title">Our Fencing Services</h2>
        <p className="section-desc">
          From a backyard privacy fence to a full commercial perimeter — we handle every scope with the same level of precision.
        </p>
      </div>

      <div className="svc-carousel-wrapper">
        <Carousel interval={4500} indicators controls className="svc-carousel">
          {chunks.map((chunk, ci) => (
            <Carousel.Item key={ci}>
              <Row className="g-4 justify-content-center px-5">
                {chunk.map(svc => (
                  <Col key={svc.title} xs={12} sm={6} lg={4}>
                    <div className="service-card">
                      <div className={`service-card-img ${svc.color}`}>
                        <img src={svc.img} alt={svc.title} className="service-img" loading="lazy" />
                      </div>
                      <div className="service-body">
                        <h3 className="service-title">{svc.title}</h3>
                        <p className="service-desc">{svc.desc}</p>
                        <span className="service-price">{svc.price}</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  </section>
)

export default Services
