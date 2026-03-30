import { Container, Row, Col } from 'react-bootstrap'

const reviews = [
  {
    name: 'Dan H.',
    role: 'Homeowner, River Heights',
    initials: 'DH',
    color: '1e3a5f',
    rating: 5,
    quote:
      '"ProFence installed our cedar privacy fence last summer and the quality is outstanding. The crew showed up exactly when promised, kept the yard tidy, and finished in two days. Our neighbours keep asking who did it!"',
  },
  {
    name: 'Karen L.',
    role: 'Property Manager, St. Vital',
    initials: 'KL',
    color: 'c47f1a',
    rating: 5,
    quote:
      '"We manage a 12-unit rental complex and needed a full chain-link perimeter with two gates. ProFence handled the permit, completed ahead of schedule, and the price was spot-on. Absolutely professional."',
  },
  {
    name: 'Mike T.',
    role: 'Ranch Owner, Headingley',
    initials: 'MT',
    color: '2e7d52',
    rating: 5,
    quote:
      '"Had them fence 4 acres of pasture with wood rail and wire mesh. They know what they\'re doing on rural properties — the post depth is perfect for frost heave and the corners are solid. Great work."',
  },
  {
    name: 'Sandra B.',
    role: 'Business Owner, Transcona',
    initials: 'SB',
    color: '7b4f9c',
    rating: 5,
    quote:
      '"The ornamental aluminum fence around our commercial yard looks incredible. It\'s secure, looks premium, and the automated gate has worked flawlessly for 14 months. Worth every dollar."',
  },
]

const Stars = ({ count }) => (
  <div className="review-stars">{'★'.repeat(count)}</div>
)

const Reviews = () => (
  <section id="reviews" className="reviews-section">
    <Container>
      <div className="text-center mb-5">
        <span className="section-label">Client Stories</span>
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-desc">
          Real Winnipeg homeowners and businesses sharing their ProFence experience.
        </p>
      </div>

      <Row className="g-4">
        {reviews.map((r) => (
          <Col key={r.name} xs={12} sm={6} xl={3}>
            <div className="review-card">
              <Stars count={r.rating} />
              <p className="review-quote">{r.quote}</p>
              <div className="d-flex align-items-center gap-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=${r.color}&color=fff&size=80&rounded=true&bold=true`}
                  alt={r.name}
                  className="review-author-img"
                />
                <div>
                  <div className="review-author-name">{r.name}</div>
                  <div className="review-author-role">{r.role}</div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
)

export default Reviews
