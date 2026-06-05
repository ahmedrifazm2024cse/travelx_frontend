import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contact.css'

function Contact() {
  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>Contact <span style={{ color: '#00B4FF' }}>Us</span></h1>
        <p>We'd love to hear from you. Reach out anytime!</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>›</span> <span>Contact</span>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="contact-section">
        <div className="contact-info-grid">
          {[
            { icon: '📍', title: 'Our Office', lines: ['123 Travel Street', 'Coimbatore, Tamil Nadu 641001'] },
            { icon: '📞', title: 'Phone', lines: ['+91 9876543210', '+91 9123456789'] },
            { icon: '📧', title: 'Email', lines: ['travelx@gmail.com', 'support@travelx.com'] },
            { icon: '🕐', title: 'Working Hours', lines: ['Mon – Sat: 9AM – 7PM', 'Sunday: 10AM – 4PM'] },
          ].map((c) => (
            <div key={c.title} className="contact-info-card">
              <div className="ci-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              {c.lines.map((l) => <p key={l}>{l}</p>)}
            </div>
          ))}
        </div>

        {/* Form & Map */}
        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-box light-form">
            <h3>Send Us a Message</h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '28px' }}>Fill in the form and we'll get back to you within 24 hours.</p>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Your first name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 9876543210" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select>
                  <option>Tour Package Inquiry</option>
                  <option>Booking Support</option>
                  <option>Cancellation / Refund</option>
                  <option>General Question</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Write your message here..." />
              </div>
              <button type="submit" className="form-full-btn" style={{ background: 'linear-gradient(135deg,#00B4FF,#0080cc)', color: 'white' }}>Send Message 📤</button>
            </form>
          </div>

          {/* Map */}
          <div className="map-box">
            <h3>Find Us Here</h3>
            <div className="map-placeholder">
              <div className="map-inner">
                <span style={{ fontSize: '60px' }}>🗺️</span>
                <h4>TravelX Office</h4>
                <p>123 Travel Street, Coimbatore</p>
                <p>Tamil Nadu, India</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block', padding: '10px 24px' }}>Open in Maps</a>
              </div>
            </div>
            <div className="social-contact">
              <h4>Follow Us</h4>
              <div className="social-row">
                <a href="#" className="social-btn fb">📘 Facebook</a>
                <a href="#" className="social-btn ig">📸 Instagram</a>
                <a href="#" className="social-btn tw">🐦 Twitter</a>
                <a href="#" className="social-btn yt">▶️ YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact
