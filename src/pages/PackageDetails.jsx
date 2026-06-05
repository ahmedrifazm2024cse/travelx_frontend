import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PackageDetails.css'

const packagesData = {
  1: { title: 'Maldives Paradise', img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop', days: '5 Days / 4 Nights', price: '₹25,000', rating: '4.9', reviews: 128, category: 'Beach', badge: 'Best Seller', desc: 'Experience the ultimate luxury beach vacation in the crystal-clear waters of the Maldives. Overwater bungalows, world-class snorkelling, pristine white sand beaches and breathtaking sunsets await you in this paradise on earth.' },
  2: { title: 'Ooty Hill Station', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop', days: '3 Days / 2 Nights', price: '₹12,000', rating: '4.6', reviews: 89, category: 'Hills', badge: 'Popular', desc: 'Escape to the misty hills of Ooty with its lush tea gardens, cool climate and scenic Nilgiri Mountain Railway. A perfect retreat for nature lovers and families seeking peace.' },
  3: { title: 'Goa Beach Fun', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop', days: '4 Days / 3 Nights', price: '₹18,000', rating: '4.8', reviews: 211, category: 'Beach', badge: 'Hot Deal', desc: 'Vibrant beaches, delicious seafood, thrilling water sports and legendary nightlife — Goa is the perfect destination for fun-loving travelers.' },
}

const itinerary = [
  { day: 'Day 1', title: 'Arrival & Check-In', desc: 'Arrive at destination airport, transfer to hotel, welcome dinner and evening at leisure.' },
  { day: 'Day 2', title: 'Sightseeing Tour', desc: 'Full day guided tour of major attractions with lunch included. Evening free for shopping.' },
  { day: 'Day 3', title: 'Adventure Activities', desc: 'Morning water sports and adventure activities. Afternoon relaxation at resort pool.' },
  { day: 'Day 4', title: 'Cultural Experience', desc: 'Visit local markets, cultural shows and authentic local cuisine experience.' },
  { day: 'Day 5', title: 'Departure', desc: 'Breakfast at hotel, check-out, transfer to airport and fly back with beautiful memories.' },
]

function PackageDetails() {
  const { id } = useParams()
  const pkg = packagesData[id] || packagesData[1]

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div className="pkg-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${pkg.img})` }}>
        <div className="pkg-hero-content">
          <span className="card-badge" style={{ position: 'static', marginBottom: '12px', display: 'inline-block' }}>{pkg.badge}</span>
          <h1>{pkg.title}</h1>
          <div className="pkg-meta-row">
            <span>📅 {pkg.days}</span>
            <span>⭐ {pkg.rating} ({pkg.reviews} reviews)</span>
            <span>🏷️ {pkg.category}</span>
          </div>
          <div className="breadcrumb" style={{ justifyContent: 'flex-start', marginTop: '12px' }}>
            <Link to="/">Home</Link> <span>›</span>
            <Link to="/packages">Packages</Link> <span>›</span>
            <span>{pkg.title}</span>
          </div>
        </div>
      </div>

      <section className="pkg-detail-section">
        <div className="pkg-detail-grid">

          {/* Left Content */}
          <div className="pkg-left">
            {/* Overview */}
            <div className="detail-card">
              <h3>📖 Tour Overview</h3>
              <p>{pkg.desc}</p>
            </div>

            {/* Highlights */}
            <div className="detail-card">
              <h3>✨ Tour Highlights</h3>
              <ul className="highlights-list">
                <li>✅ Accommodation in premium hotels / resorts</li>
                <li>✅ All transfers by AC vehicle included</li>
                <li>✅ Professional English-speaking guide</li>
                <li>✅ Daily breakfast and select meals</li>
                <li>✅ All entry tickets and permits</li>
                <li>✅ 24/7 TravelX support throughout tour</li>
              </ul>
            </div>

            {/* Itinerary */}
            <div className="detail-card">
              <h3>🗓️ Day-by-Day Itinerary</h3>
              <div className="itinerary-list">
                {itinerary.map((item) => (
                  <div key={item.day} className="itin-item">
                    <div className="itin-day">{item.day}</div>
                    <div className="itin-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="incl-grid">
              <div className="detail-card">
                <h3>✅ Inclusions</h3>
                <ul className="incl-list include">
                  <li>Hotel accommodation</li>
                  <li>Daily breakfast</li>
                  <li>Airport transfers</li>
                  <li>Sightseeing tours</li>
                  <li>Professional guide</li>
                  <li>Entry tickets</li>
                </ul>
              </div>
              <div className="detail-card">
                <h3>❌ Exclusions</h3>
                <ul className="incl-list exclude">
                  <li>Airfare / train tickets</li>
                  <li>Personal expenses</li>
                  <li>Lunch & dinner (unless stated)</li>
                  <li>Travel insurance</li>
                  <li>Visa fees</li>
                  <li>Tips and gratuities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="pkg-sidebar">
            <div className="booking-widget">
              <div className="bw-price">
                <span>{pkg.price}</span>
                <small>per person</small>
              </div>
              <div className="bw-rating">⭐ {pkg.rating} · {pkg.reviews} Reviews</div>
              <div className="bw-form light-form">
                <div className="form-group">
                  <label>Select Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Travelers</label>
                  <select>
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4+ People</option>
                  </select>
                </div>
              </div>
              <Link to="/booking" className="btn-primary" style={{ display: 'block', textAlign: 'center', padding: '14px', fontSize: '15px', borderRadius: '12px', marginTop: '4px' }}>
                Book This Package 🚀
              </Link>
              <Link to="/enquiry" className="btn-outline" style={{ display: 'block', textAlign: 'center', padding: '12px', fontSize: '14px', borderRadius: '12px', marginTop: '10px', borderColor: '#00B4FF', color: '#00B4FF' }}>
                Send Enquiry 📩
              </Link>
              <div className="bw-badges">
                <span>🔒 Secure Booking</span>
                <span>🔄 Free Cancellation</span>
                <span>✅ Instant Confirmation</span>
                <span>📞 24/7 Support</span>
              </div>
            </div>

            {/* Related Packages */}
            <div className="related-box">
              <h3>🔗 Related Packages</h3>
              {[
                { id: 2, title: 'Ooty Hill Station', price: '₹12,000', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=200&auto=format&fit=crop' },
                { id: 3, title: 'Goa Beach Fun', price: '₹18,000', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=200&auto=format&fit=crop' },
              ].map((r) => (
                <Link to={`/package/${r.id}`} key={r.id} className="related-item">
                  <img src={r.img} alt={r.title} />
                  <div>
                    <h4>{r.title}</h4>
                    <strong style={{ color: '#00B4FF' }}>{r.price}</strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default PackageDetails
