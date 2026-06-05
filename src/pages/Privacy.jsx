import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Legal.css'

const sections = [
  { title: '1. Information We Collect', content: 'We collect personal information you provide when registering, booking tours or contacting us. This includes your name, email address, phone number, payment details and travel preferences. We also automatically collect usage data such as IP addresses, browser type, pages visited and time spent on our platform.' },
  { title: '2. How We Use Your Information', content: 'Your information is used to process bookings, personalize your travel experience, send booking confirmations and updates, provide customer support, improve our services, and send promotional offers (only with your consent). We never sell your personal data to third parties.' },
  { title: '3. Data Security', content: 'We implement industry-standard security measures including SSL encryption, secure payment gateways and restricted access controls to protect your personal information. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.' },
  { title: '4. Cookies Policy', content: 'We use cookies to enhance your browsing experience, remember your preferences, analyze website traffic and personalize content. You can control cookie settings through your browser. Disabling cookies may affect some functionality of our website.' },
  { title: '5. Third-Party Services', content: 'We partner with trusted third-party service providers for payment processing, hotel bookings and flight reservations. These partners have their own privacy policies. We only share the minimum necessary information to complete your booking.' },
  { title: '6. Your Rights', content: 'You have the right to access, correct, or delete your personal data at any time. You can opt out of marketing emails using the unsubscribe link in any email. To exercise your rights, contact us at privacy@travelx.com.' },
  { title: '7. Data Retention', content: 'We retain your personal information for as long as necessary to provide services and comply with legal obligations. Booking records are kept for 7 years for accounting purposes. Account data is deleted within 30 days of account closure upon request.' },
  { title: '8. Changes to This Policy', content: 'We may update this Privacy Policy periodically. We will notify you of significant changes via email or a prominent notice on our website. Continued use of our services after changes constitutes acceptance of the updated policy.' },
]

function Privacy() {
  return (
    <>
      <Navbar />
      <div className="page-header">
        <h1>Privacy <span style={{ color: '#00B4FF' }}>Policy</span></h1>
        <p>Last updated: January 01, 2026</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>›</span> <span>Privacy Policy</span>
        </div>
      </div>
      <section className="legal-section">
        <div className="legal-grid">
          <div className="legal-content">
            <div className="legal-intro">
              <p>At TravelX, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store and protect your data when you use our services.</p>
            </div>
            {sections.map((s) => (
              <div key={s.title} className="legal-block">
                <h3>{s.title}</h3>
                <p>{s.content}</p>
              </div>
            ))}
          </div>
          <div className="legal-sidebar">
            <div className="legal-toc">
              <h4>Quick Navigation</h4>
              {sections.map((s) => (
                <a key={s.title} href="#" className="toc-link">{s.title}</a>
              ))}
            </div>
            <div className="legal-contact-box">
              <h4>Privacy Questions?</h4>
              <p>Contact our privacy team at:</p>
              <strong>privacy@travelx.com</strong>
              <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '16px', padding: '10px' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Privacy
