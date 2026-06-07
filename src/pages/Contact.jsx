import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contact.css'

function Contact() {
  const [form, setForm]     = useState({ firstName: '', lastName: '', email: '', phone: '', subject: 'Tour Package Inquiry', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
    setStatus('')
  }

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim())  e.lastName  = 'Last name is required'
    if (!form.email.trim())     e.email     = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim())     e.phone     = 'Phone is required'
    if (!form.message.trim())   e.message   = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setStatus('success')
    setForm({ firstName: '', lastName: '', email: '', phone: '', subject: 'Tour Package Inquiry', message: '' })
  }

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

      <section className="contact-section">
        {/* Info Cards */}
        <div className="contact-info-grid">
          {[
            { icon: '📍', title: 'Our Office',     lines: ['123 Travel Street', 'Coimbatore, Tamil Nadu 641001'] },
            { icon: '📞', title: 'Phone',          lines: ['+91 9876543210', '+91 9123456789'] },
            { icon: '📧', title: 'Email',          lines: ['travelx@gmail.com', 'support@travelx.com'] },
            { icon: '🕐', title: 'Working Hours',  lines: ['Mon – Sat: 9AM – 7PM', 'Sunday: 10AM – 4PM'] },
          ].map((c) => (
            <div key={c.title} className="contact-info-card">
              <div className="ci-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              {c.lines.map((l) => <p key={l}>{l}</p>)}
            </div>
          ))}
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-box light-form">
            <h3>Send Us a Message</h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>Fill in the form and we'll get back to you within 24 hours.</p>

            {status === 'success' && (
              <div style={{ background: '#dcfce7', border: '1px solid #86efac', color: '#16a34a', padding: '14px 18px', borderRadius: '12px', marginBottom: '20px', fontWeight: 500 }}>
                ✅ Message sent successfully! We'll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input name="firstName" type="text" placeholder="Your first name"
                    value={form.firstName} onChange={handle}
                    style={{ borderColor: errors.firstName ? '#ef4444' : '' }} />
                  {errors.firstName && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input name="lastName" type="text" placeholder="Your last name"
                    value={form.lastName} onChange={handle}
                    style={{ borderColor: errors.lastName ? '#ef4444' : '' }} />
                  {errors.lastName && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input name="email" type="email" placeholder="your@email.com"
                  value={form.email} onChange={handle}
                  style={{ borderColor: errors.email ? '#ef4444' : '' }} />
                {errors.email && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input name="phone" type="tel" placeholder="+91 9876543210"
                  value={form.phone} onChange={handle}
                  style={{ borderColor: errors.phone ? '#ef4444' : '' }} />
                {errors.phone && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label>Subject</label>
                <select name="subject" value={form.subject} onChange={handle}>
                  <option>Tour Package Inquiry</option>
                  <option>Booking Support</option>
                  <option>Cancellation / Refund</option>
                  <option>General Question</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" rows="5" placeholder="Write your message here..."
                  value={form.message} onChange={handle}
                  style={{ borderColor: errors.message ? '#ef4444' : '' }} />
                {errors.message && <span style={{ color: '#ef4444', fontSize: '12px' }}>{errors.message}</span>}
              </div>

              <button type="submit" className="form-full-btn"
                style={{ background: 'linear-gradient(135deg,#00B4FF,#0080cc)', color: 'white' }}>
                Send Message 📤
              </button>
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
                <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                  className="btn-primary" style={{ marginTop: '20px', display: 'inline-block', padding: '10px 24px' }}>
                  Open in Maps
                </a>
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
