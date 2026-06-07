import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="nav-logo" style={{ fontSize: '22px' }}>Travel<span>X</span></Link>
          <p>Your trusted tour planning partner. We craft unforgettable journeys across the globe with premium service and unbeatable prices.</p>
          <div className="social-links">
            <a href="#" title="Facebook">📘</a>
            <a href="#" title="Instagram">📸</a>
            <a href="#" title="Twitter">🐦</a>
            <a href="#" title="YouTube">▶️</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <Link to="/enquiry">Enquiry</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/forgot-password">Forgot Password</Link>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>📧 travelx@gmail.com</p>
          <p>📞 +91 9876543210</p>
          <p>📍 Coimbatore, Tamil Nadu</p>
          <p>🕐 Mon–Sat: 9AM – 7PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TravelX. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
