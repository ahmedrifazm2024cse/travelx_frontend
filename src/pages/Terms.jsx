import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Legal.css'

const sections = [
  { title: '1. Acceptance of Terms', content: 'By accessing TravelX\'s website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services. These terms apply to all visitors, users and customers.' },
  { title: '2. Booking and Reservations', content: 'All bookings are subject to availability. A booking is confirmed only upon receipt of the advance payment and a written confirmation from TravelX. The booking reference number provided in the confirmation email is your proof of booking.' },
  { title: '3. Payment Terms', content: 'A minimum 30% advance payment is required to confirm any booking. The remaining balance must be paid at least 7 days before the tour departure date. Failure to make the final payment may result in cancellation of the booking without refund of the advance.' },
  { title: '4. Cancellation Policy', content: 'Cancellations made 15 or more days before departure: Full refund minus processing fees. 7–14 days before departure: 50% refund. Less than 7 days before departure: No refund. No-shows: No refund. All cancellations must be submitted in writing to bookings@travelx.com.' },
  { title: '5. Changes and Amendments', content: 'TravelX reserves the right to modify tour itineraries, accommodation or transport arrangements due to circumstances beyond our control (weather, political events, natural disasters). We will provide suitable alternatives of equal or higher value at no additional cost.' },
  { title: '6. Travel Insurance', content: 'We strongly recommend that all travelers purchase comprehensive travel insurance before departure. TravelX is not liable for any losses, accidents, medical emergencies or travel disruptions. Basic insurance is included in premium packages only.' },
  { title: '7. Liability', content: 'TravelX acts as an agent for hotels, airlines and other service providers. We are not liable for any acts, omissions or defaults of these independent suppliers. Our liability is limited to the total amount paid for the booking in question.' },
  { title: '8. Governing Law', content: 'These Terms and Conditions are governed by the laws of India. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of courts in Coimbatore, Tamil Nadu, India.' },
]

function Terms() {
  return (
    <>
      <Navbar />
      <div className="page-header">
        <h1>Terms & <span style={{ color: '#00B4FF' }}>Conditions</span></h1>
        <p>Last updated: January 01, 2026</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>›</span> <span>Terms & Conditions</span>
        </div>
      </div>
      <section className="legal-section">
        <div className="legal-grid">
          <div className="legal-content">
            <div className="legal-intro">
              <p>Please read these Terms and Conditions carefully before using TravelX services. By making a booking with us, you acknowledge that you have read, understood and agree to be bound by these terms.</p>
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
              <h4>Legal Questions?</h4>
              <p>Contact our legal team at:</p>
              <strong>legal@travelx.com</strong>
              <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '16px', padding: '10px' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Terms
