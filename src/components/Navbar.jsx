import { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Navbar
      expand="lg"
      className="navbar-custom"
      style={{ boxShadow: scrolled ? '0 2px 20px rgba(30,58,95,0.18)' : 'none' }}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" fill="#1e3a5f"/>
            <rect x="6" y="9" width="3.5" height="14" rx="1" fill="#c47f1a"/>
            <rect x="14" y="9" width="3.5" height="14" rx="1" fill="#c47f1a"/>
            <rect x="22" y="9" width="3.5" height="14" rx="1" fill="#c47f1a"/>
            <rect x="4" y="11.5" width="24" height="3" rx="1" fill="#fff"/>
            <rect x="4" y="17" width="24" height="3" rx="1" fill="#fff"/>
          </svg>
          ProFence Solutions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-1">
            <Nav.Link href="#why-us">Why Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button href="#contact" className="btn-nav-cta ms-lg-2">Free Estimate</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
