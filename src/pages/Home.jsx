import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'

/* Package data used in Featured Packages */
const packages = [
  {
    id: 1,
    title: 'Maldives Paradise',
    img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop',
    days: '5 Days / 4 Nights',
    rating: '⭐⭐⭐⭐⭐',
    price: '₹25,000',
    badge: 'Best Seller',
  },
  {
    id: 2,
    title: 'Ooty Hill Station',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    days: '3 Days / 2 Nights',
    rating: '⭐⭐⭐⭐',
    price: '₹12,000',
    badge: 'Popular',
  },
  {
    id: 3,
    title: 'Goa Beach Fun',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    days: '4 Days / 3 Nights',
    rating: '⭐⭐⭐⭐⭐',
    price: '₹18,000',
    badge: 'Hot Deal',
  },
  {
    id: 4,
    title: 'Kerala Backwaters',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    days: '6 Days / 5 Nights',
    rating: '⭐⭐⭐⭐⭐',
    price: '₹22,000',
    badge: 'New',
  },
  {
    id: 5,
    title: 'Rajasthan Royal',
    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop',
    days: '7 Days / 6 Nights',
    rating: '⭐⭐⭐⭐',
    price: '₹28,000',
    badge: 'Premium',
  },
  {
    id: 6,
    title: 'Manali Snow Trek',
    img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    days: '5 Days / 4 Nights',
    rating: '⭐⭐⭐⭐⭐',
    price: '₹20,000',
    badge: 'Adventure',
  },
]

const testimonials = [
  { name: 'Priya S.', location: 'Chennai', text: 'TravelX made our Maldives trip absolutely magical. Every detail was perfectly arranged!', avatar: 'P' },
  { name: 'Rahul M.', location: 'Bangalore', text: 'Best travel agency I have ever used. The Goa package was worth every rupee!', avatar: 'R' },
  { name: 'Sneha K.', location: 'Mumbai', text: 'Amazing service and great support throughout. Kerala trip was unforgettable!', avatar: 'S' },
]

function Home() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-tag">🌍 Trusted by 50,000+ Travelers</span>
          <h1>Explore The World <br /><span>With TravelX</span></h1>
          <p>Discover breathtaking destinations, handcrafted itineraries and luxury stays at unbeatable prices.</p>
          <div className="hero-btns">
            <Link to="/packages" className="btn-primary hero-cta">Explore Packages</Link>
            <Link to="/enquiry" className="btn-outline hero-cta">Free Enquiry</Link>
          </div>
          <div className="hero-stats">
            <div className="h-stat"><strong>50K+</strong><span>Happy Travelers</span></div>
            <div className="h-divider" />
            <div className="h-stat"><strong>200+</strong><span>Destinations</span></div>
            <div className="h-divider" />
            <div className="h-stat"><strong>15+</strong><span>Years Experience</span></div>
          </div>
        </div>
      </section>

      {/* ===== SEARCH BAR ===== */}
      <section className="search-section">
        <div className="search-box">
          <div className="search-field">
            <label>📍 Destination</label>
            <input type="text" placeholder="Where do you want to go?" />
          </div>
          <div className="search-field">
            <label>📅 Check In</label>
            <input type="date" />
          </div>
          <div className="search-field">
            <label>👥 Travelers</label>
            <select>
              <option>1 Person</option>
              <option>2 People</option>
              <option>3–5 People</option>
              <option>6+ People</option>
            </select>
          </div>
          <Link to="/packages" className="search-btn btn-primary">🔍 Search</Link>
        </div>
      </section>

      {/* ===== POPULAR DESTINATIONS ===== */}
      <section className="destinations-section">
        <p className="section-tag">✈️ Trending Now</p>
        <h2 className="section-title">Popular <span>Destinations</span></h2>
        <p className="section-subtitle">Handpicked destinations loved by thousands of travelers</p>
        <div className="dest-grid">
          {[
            { name: 'Maldives', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop', tours: '12 Tours' },
            { name: 'Kerala', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop', tours: '18 Tours' },
            { name: 'Goa', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop', tours: '15 Tours' },
            { name: 'Manali', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop', tours: '10 Tours' },
            { name: 'Rajasthan', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop', tours: '20 Tours' },
            { name: 'Ooty', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop', tours: '8 Tours' },
          ].map((d) => (
            <Link to="/packages" key={d.name} className="dest-card">
              <img src={d.img} alt={d.name} />
              <div className="dest-info">
                <h3>{d.name}</h3>
                <span>{d.tours}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== FEATURED PACKAGES ===== */}
      <section className="packages-section">
        <p className="section-tag">🏆 Top Rated</p>
        <h2 className="section-title">Featured <span>Packages</span></h2>
        <p className="section-subtitle">Curated holiday packages for every budget and taste</p>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="card">
              <div className="card-img-wrap">
                <img src={pkg.img} alt={pkg.title} />
              </div>
              <span className="card-badge">{pkg.badge}</span>
              <div className="card-content">
                <div className="stars">{pkg.rating}</div>
                <h3>{pkg.title}</h3>
                <div className="card-meta">
                  <span>📅 {pkg.days}</span>
                </div>
                <div className="card-footer">
                  <div>
                    <div className="card-price">{pkg.price}</div>
                    <small style={{ color: '#94a3b8', fontSize: '12px' }}>per person</small>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Link to={`/package/${pkg.id}`} className="btn-outline" style={{ padding: '8px 14px', fontSize: '13px' }}>Details</Link>
                    <Link to="/booking" className="btn-primary" style={{ padding: '8px 14px', fontSize: '13px' }}>Book Now</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/packages" className="btn-primary" style={{ padding: '14px 36px', fontSize: '16px' }}>View All Packages</Link>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-section">
        <p className="section-tag">💎 Why TravelX</p>
        <h2 className="section-title">Why <span>Choose Us</span></h2>
        <p className="section-subtitle">We go above and beyond to make your travel unforgettable</p>
        <div className="why-grid">
          {[
            { icon: '💰', title: 'Best Price Guarantee', desc: 'We offer the most competitive prices with zero hidden charges.' },
            { icon: '🛡️', title: 'Safe & Secure', desc: 'Your safety is our top priority with verified partners and 24/7 insurance.' },
            { icon: '🎯', title: 'Customized Tours', desc: 'Tailor-made itineraries designed exactly the way you dream.' },
            { icon: '🕐', title: '24/7 Support', desc: 'Round-the-clock customer support wherever you are in the world.' },
            { icon: '🏨', title: 'Luxury Hotels', desc: 'Carefully selected hotels with premium comfort and stunning views.' },
            { icon: '✈️', title: 'Hassle-Free Travel', desc: 'We handle everything — visas, tickets, stays and transfers.' },
          ].map((w) => (
            <div key={w.title} className="why-card">
              <div className="why-icon">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section">
        <p className="section-tag">💬 Reviews</p>
        <h2 className="section-title">What Our <span>Travelers Say</span></h2>
        <p className="section-subtitle">Real stories from real travelers who loved TravelX</p>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testi-card">
              <div className="testi-stars">⭐⭐⭐⭐⭐</div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.avatar}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready for Your Dream Vacation?</h2>
          <p>Book now and get up to 30% off on selected packages. Limited slots available!</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/packages" className="btn-primary" style={{ padding: '14px 36px', fontSize: '16px' }}>Book Now</Link>
            <Link to="/contact" className="btn-outline" style={{ padding: '14px 36px', fontSize: '16px', borderColor: 'white', color: 'white' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
