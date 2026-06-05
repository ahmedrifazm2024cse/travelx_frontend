import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FAQ.css'

const faqs = [
  { q: 'How do I book a tour package?', a: 'Simply browse our packages, click "Book Now", fill in your details in the booking form, and our team will confirm your booking within 24 hours.' },
  { q: 'What is the cancellation policy?', a: 'Cancellations made 15+ days before departure get a full refund. 7–14 days before get 50% refund. Less than 7 days — no refund unless rescheduling.' },
  { q: 'Are the tour prices inclusive of everything?', a: 'Most packages include accommodation, transport and guided tours. Meals and personal expenses may be extra. Each package page clearly lists what is and isn\'t included.' },
  { q: 'Can I customize my tour package?', a: 'Absolutely! We specialize in custom itineraries. Fill out our Enquiry form or call us and our travel experts will design the perfect trip just for you.' },
  { q: 'Is travel insurance included in the package?', a: 'Basic travel insurance is included in premium packages. We recommend purchasing comprehensive travel insurance for full coverage on all trips.' },
  { q: 'How do I make payment for the booking?', a: 'We accept UPI, credit/debit cards, net banking and EMI options. A 30% advance secures your booking and the balance is paid 7 days before departure.' },
  { q: 'What if I need to change my travel dates?', a: 'Date changes are allowed up to 10 days before departure subject to availability. A small rescheduling fee may apply depending on the package.' },
  { q: 'Do you arrange visa assistance?', a: 'Yes! Our team provides complete visa assistance for international packages including document checklist, form filling and appointment scheduling.' },
  { q: 'Are children allowed on all tours?', a: 'Yes, most of our packages are family-friendly. Children under 5 travel free, and 5–12 year olds get special discounted rates on most packages.' },
  { q: 'How do I contact support during travel?', a: 'You\'ll receive a 24/7 emergency support number at booking confirmation. Our on-ground team is always reachable for any assistance during your trip.' },
]

function FAQ() {
  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>Frequently Asked <span style={{ color: '#00B4FF' }}>Questions</span></h1>
        <p>Got questions? We have answers. Here are the most common ones.</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>›</span> <span>FAQ</span>
        </div>
      </div>

      <section className="faq-section">
        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-card">
              <div className="faq-q">
                <span className="faq-num">0{i + 1}</span>
                <h3>{faq.q}</h3>
              </div>
              <p className="faq-a">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3>Still have questions?</h3>
          <p>Our team is happy to help. Reach out to us anytime.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '12px 28px' }}>Contact Us</Link>
            <Link to="/enquiry" className="btn-outline" style={{ padding: '12px 28px' }}>Submit Enquiry</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default FAQ
