import { Container, Row, Col } from 'react-bootstrap'

const steps = [
  {
    number: '01',
    title: 'Free On-Site Estimate',
    desc: 'We visit your property, measure the area, discuss material options, and hand you a detailed written quote — no pressure, no obligation.',
    icon: '📋',
  },
  {
    number: '02',
    title: 'Professional Installation',
    desc: 'Our certified crew handles permits (if required), concrete post-setting, panel installation, and any gate automation — start to finish.',
    icon: '⚒️',
  },
  {
    number: '03',
    title: 'Final Walkthrough & Guarantee',
    desc: 'We walk the finished fence with you, making sure every post is plumb and every panel is level before we leave the site.',
    icon: '✅',
  },
]

const Process = () => (
  <section id="process" className="process-section">
    <Container>
      <div className="text-center mb-5">
        <span className="section-label">How It Works</span>
        <h2 className="section-title">Simple. Professional. Guaranteed.</h2>
        <p className="section-desc">
          Getting a new fence is easier than you think. Here's our proven three-step process.
        </p>
      </div>

      <Row className="g-4 align-items-stretch">
        {steps.map((step, i) => (
          <Col key={step.number} xs={12} md={4}>
            <div className={`process-card ${i < steps.length - 1 ? 'has-connector' : ''}`}>
              <div className="process-number">{step.number}</div>
              <div className="process-icon">{step.icon}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
)

export default Process
