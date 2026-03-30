import { Container, Row, Col, Button } from 'react-bootstrap'
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="g-4">
        {/* Brand */}
        <Col xs={12} md={4}>
          <div className="footer-brand">🔩 ProFence Solutions</div>
          <p className="footer-tagline">
            Professional fencing installation across Winnipeg, MB and surrounding areas.
            Built to last. Installed to impress.
          </p>
          <div className="d-flex gap-2">
            <Button className="footer-social-btn" aria-label="Instagram"><FiInstagram /></Button>
            <Button className="footer-social-btn" aria-label="Facebook"><FiFacebook /></Button>
            <Button className="footer-social-btn" aria-label="Twitter"><FiTwitter /></Button>
          </div>
        </Col>

        {/* Quick Links */}
        <Col xs={6} md={2}>
          <p className="footer-heading">Quick Links</p>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </Col>

        {/* Services */}
        <Col xs={6} md={3}>
          <p className="footer-heading">Our Services</p>
          <ul className="footer-links">
            <li><a href="#services">Wood Privacy Fencing</a></li>
            <li><a href="#services">Chain-Link Fencing</a></li>
            <li><a href="#services">Vinyl & PVC Fencing</a></li>
            <li><a href="#services">Ornamental Iron</a></li>
            <li><a href="#services">Farm & Ranch Fencing</a></li>
            <li><a href="#services">Gate Installation</a></li>
          </ul>
        </Col>

        {/* CTA */}
        <Col xs={12} md={3}>
          <p className="footer-heading">Get a Free Estimate</p>
          <p style={{ fontSize: '0.875rem', marginBottom: '1.25rem', color: 'rgba(255,255,255,0.75)' }}>
            Ready to start your fencing project? Call us or send an email — we respond within 24 hours.
          </p>
          <Button href="#contact" className="btn-primary-cta w-100">Book Free Estimate</Button>
          <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
            (204) 555-0123
          </p>
        </Col>
      </Row>

      <hr className="footer-divider" />

      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
        <p className="footer-bottom">
          © {new Date().getFullYear()} ProFence Solutions. All rights reserved.
        </p>
        <p className="powered-by">
          Powered by{' '}
          <a href="https://www.uphilltech.ca" target="_blank" rel="noopener noreferrer">
            Uphilltech
          </a>
        </p>
      </div>
    </Container>
  </footer>
)

export default Footer
