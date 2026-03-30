import { Container, Row, Col, Button } from 'react-bootstrap'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

const contactItems = [
  {
    icon: <FiMapPin />,
    label: 'Address',
    value: '456 Industrial Way\nWinnipeg, MB R3G 0Y4',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '(204) 555-0123',
  },
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'info@profencesolutions.ca',
  },
]

const hours = [
  { day: 'Monday – Friday', time: '7:30 am – 5:30 pm' },
  { day: 'Saturday', time: '8:00 am – 3:00 pm' },
  { day: 'Sunday', time: 'Closed' },
]

const Contact = () => (
  <section id="contact" className="contact-section">
    <Container>
      <div className="text-center mb-5">
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title">Request Your Free Estimate</h2>
        <p className="section-desc">
          No obligation. No pressure. Just an honest, detailed quote for your project — usually within 24 hours.
        </p>
      </div>

      <Row className="g-4">
        {/* Contact Info */}
        <Col xs={12} lg={5}>
          <div className="contact-info-card">
            <h3 className="section-title mb-4" style={{ fontSize: '1.4rem' }}>
              Contact Information
            </h3>

            {contactItems.map((item) => (
              <div key={item.label} className="contact-item">
                <div className="contact-icon-wrap">{item.icon}</div>
                <div>
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value" style={{ whiteSpace: 'pre-line' }}>
                    {item.value}
                  </span>
                </div>
              </div>
            ))}

            <div className="contact-item">
              <div className="contact-icon-wrap"><FiClock /></div>
              <div style={{ flex: 1 }}>
                <span className="contact-label">Hours</span>
                <div className="hours-grid mt-1">
                  {hours.map(({ day, time }) => (
                    <>
                      <span key={day} className="hours-day">{day}</span>
                      <span key={time} className="hours-time">{time}</span>
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-2 mt-3">
              <Button href="tel:+12045550123" className="btn-primary-cta w-100">
                📞 Call for a Free Quote
              </Button>
              <Button href="mailto:info@profencesolutions.ca" className="btn-outline-contact w-100">
                ✉️ Email Us
              </Button>
            </div>
          </div>
        </Col>

        {/* Google Maps Embed */}
        <Col xs={12} lg={7}>
          <div className="map-wrapper">
            <iframe
              title="ProFence Solutions Location – Winnipeg, MB"
              src="https://maps.google.com/maps?q=fencing+contractor+Winnipeg+MB&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google map showing ProFence Solutions service area"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Contact
