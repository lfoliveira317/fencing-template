import { Container, Row, Col } from 'react-bootstrap'
import { FiShield, FiTool, FiThumbsUp, FiClock, FiFileText, FiHome } from 'react-icons/fi'

const reasons = [
  {
    icon: <FiShield size={32} />,
    title: 'Lifetime Workmanship Guarantee',
    desc: 'Every fence we build is backed by our lifetime workmanship guarantee — if it fails due to our installation, we fix it at no charge.',
  },
  {
    icon: <FiTool size={32} />,
    title: 'Expert Certified Crew',
    desc: 'Our installers are fully licensed, insured, and trained on the latest fencing techniques and materials. No subcontractors.',
  },
  {
    icon: <FiThumbsUp size={32} />,
    title: 'Premium Materials Only',
    desc: 'We source pressure-treated lumber, hot-dipped galvanized hardware, and Grade-A vinyl — materials that survive Manitoba winters.',
  },
  {
    icon: <FiClock size={32} />,
    title: 'On-Time Completion',
    desc: 'We commit to a start date and finish on schedule. Our projects average 1–3 days from post-set to final walkthrough.',
  },
  {
    icon: <FiFileText size={32} />,
    title: 'Free Detailed Estimates',
    desc: 'No hidden fees. Every estimate is itemized with materials, labour, and timeline so you know exactly what you\'re paying for.',
  },
  {
    icon: <FiHome size={32} />,
    title: 'Property Value Boost',
    desc: 'A professionally installed fence adds curb appeal and measurable resale value. Invest in your home with confidence.',
  },
]

const WhyUs = () => (
  <section id="why-us" className="whyus-section">
    <Container>
      <div className="text-center mb-5">
        <span className="section-label">Why Choose Us</span>
        <h2 className="section-title">The ProFence Difference</h2>
        <p className="section-desc">
          Hundreds of Winnipeg homeowners trust us with their property every year.
          Here's what sets us apart from the rest.
        </p>
      </div>

      <Row className="g-4">
        {reasons.map((r) => (
          <Col key={r.title} xs={12} sm={6} lg={4}>
            <div className="whyus-card">
              <div className="whyus-icon">{r.icon}</div>
              <h3 className="whyus-title">{r.title}</h3>
              <p className="whyus-desc">{r.desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
)

export default WhyUs
