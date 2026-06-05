import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Enquiry.css'

function Enquiry() {
  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>Tour <span style={{ color: '#00B4FF' }}>Enquiry</span></h1>
        <p>Tell us your dream trip and we'll craft the perfect itinerary for you</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>›</span> <span>Enquiry</span>
        </div>
      </div>

      <section className="enquiry-section">
        <div className="enquiry-grid">
          <div className="enquiry-form-box light-form">
            <h3>📋 Submit Your Enquiry</h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '28px' }}>Our travel experts will get back to you within 24 hours with a custom quote.</p>
            <form>
              <div className="form-row2">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-row2">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" placeholder="+91 9876543210" required />
                </div>
                <div className="form-group">
                  <label>Number of Travelers *</label>
                  <select required>
                    <option value="">Select</option>
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3–5 People</option>
                    <option>6–10 People</option>
                    <option>10+ People</option>
                  </select>
                </div>
              </div>
              <div className="form-row2">
                <div className="form-group">
                  <label>Destination *</label>
                  <select required>
                    <option value="">Select Destination</option>
                    <option>Maldives</option>
                    <option>Goa</option>
                    <option>Kerala</option>
                    <option>Manali</option>
                    <option>Rajasthan</option>
                    <option>Ooty</option>
                    <option>Andaman Islands</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Budget per Person</label>
                  <select>
                    <option value="">Select Budget</option>
                    <option>Under ₹10,000</option>
                    <option>₹10,000 – ₹20,000</option>
                    <option>₹20,000 – ₹40,000</option>
                    <option>₹40,000+</option>
                  </select>
                </div>
              </div>
              <div className="form-row2">
                <div className="form-group">
                  <label>Travel Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Tour Duration</label>
                  <select>
                    <option>1–3 Days</option>
                    <option>4–6 Days</option>
                    <option>7–10 Days</option>
                    <option>10+ Days</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Special Requirements / Message</label>
                <textarea rows="5" placeholder="Any special requests, dietary requirements, accessibility needs, etc." />
              </div>
              <button type="submit" className="form-full-btn" style={{ background: 'linear-gradient(135deg,#00B4FF,#0080cc)', color: 'white' }}>
                Submit Enquiry 🚀
              </button>
            </form>
          </div>

          <div className="enquiry-side">
            {[
              { icon: '⚡', title: 'Quick Response', desc: 'Our travel experts reply within 24 hours with a personalized quote.' },
              { icon: '🎯', title: 'Custom Itinerary', desc: 'We design every trip based on your specific interests and budget.' },
              { icon: '💰', title: 'Best Price', desc: 'We guarantee the best prices with no hidden charges or surprises.' },
              { icon: '🛡️', title: 'Fully Secure', desc: 'Your personal data is 100% safe and never shared with third parties.' },
            ].map((item) => (
              <div key={item.title} className="enq-info-card">
                <span className="enq-icon">{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="enq-contact">
              <h4>Prefer to call?</h4>
              <p style={{ fontSize: '22px', fontWeight: '700', color: '#00B4FF', margin: '8px 0' }}>+91 9876543210</p>
              <p style={{ color: '#64748b', fontSize: '13px' }}>Mon–Sat: 9AM – 7PM IST</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Enquiry
