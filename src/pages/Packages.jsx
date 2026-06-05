import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Packages.css'

const packages = [
  { id: 1, title: 'Maldives Paradise',  img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop', days: '5 Days / 4 Nights', rating: '⭐⭐⭐⭐⭐', price: '₹25,000', badge: 'Best Seller', category: 'Beach',     desc: 'Crystal clear waters, overwater bungalows and pristine white sand beaches.' },
  { id: 2, title: 'Ooty Hill Station',  img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', days: '3 Days / 2 Nights', rating: '⭐⭐⭐⭐',   price: '₹12,000', badge: 'Popular',     category: 'Hills',     desc: 'Misty hills, lush tea gardens and cool climate make Ooty a perfect escape.' },
  { id: 3, title: 'Goa Beach Fun',      img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop', days: '4 Days / 3 Nights', rating: '⭐⭐⭐⭐⭐', price: '₹18,000', badge: 'Hot Deal',   category: 'Beach',     desc: 'Sun, sand, seafood and vibrant nightlife — Goa has it all for every traveler.' },
  { id: 4, title: 'Kerala Backwaters',  img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop', days: '6 Days / 5 Nights', rating: '⭐⭐⭐⭐⭐', price: '₹22,000', badge: 'New',         category: 'Nature',    desc: 'Houseboat rides through serene backwaters with spice gardens and Ayurveda.' },
  { id: 5, title: 'Rajasthan Royal',    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop', days: '7 Days / 6 Nights', rating: '⭐⭐⭐⭐',   price: '₹28,000', badge: 'Premium',    category: 'Heritage',  desc: 'Forts, palaces, deserts and vibrant culture of the royal land of Rajasthan.' },
  { id: 6, title: 'Manali Snow Trek',   img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop', days: '5 Days / 4 Nights', rating: '⭐⭐⭐⭐⭐', price: '₹20,000', badge: 'Adventure',  category: 'Adventure', desc: 'Snow-capped peaks, thrilling treks and riverside camps in Himachal Pradesh.' },
  { id: 7, title: 'Andaman Islands',    img: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=800&auto=format&fit=crop', days: '6 Days / 5 Nights', rating: '⭐⭐⭐⭐⭐', price: '₹30,000', badge: 'Luxury',     category: 'Beach',     desc: 'Scuba diving, snorkelling and island hopping in the turquoise Andaman sea.' },
  { id: 8, title: 'Shimla Valley',      img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800&auto=format&fit=crop', days: '4 Days / 3 Nights', rating: '⭐⭐⭐⭐',   price: '₹15,000', badge: 'Popular',    category: 'Hills',     desc: 'Colonial charm, pine forests and stunning Himalayan views from the Queen of Hills.' },
  { id: 9, title: 'Varanasi Spiritual', img: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800&auto=format&fit=crop', days: '3 Days / 2 Nights', rating: '⭐⭐⭐⭐',   price: '₹10,000', badge: 'Cultural',   category: 'Heritage',  desc: 'Ancient ghats, Ganga aarti and the spiritual soul of India along the holy Ganges.' },
]

const tabs = ['All', 'Beach', 'Hills', 'Adventure', 'Heritage', 'Nature']

function Packages() {
  const [activeTab, setActiveTab] = useState('All')

  /* Filter packages based on active tab */
  const filtered = activeTab === 'All'
    ? packages
    : packages.filter(pkg => pkg.category === activeTab)

  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>Our Tour <span style={{ color: '#00B4FF' }}>Packages</span></h1>
        <p>Find the perfect package for your dream vacation</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span>›</span> <span>Packages</span>
        </div>
      </div>

      <section className="pkg-section">

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {/* Show count badge on each tab */}
              <span className="tab-count">
                {tab === 'All' ? packages.length : packages.filter(p => p.category === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* Result count */}
        <p className="filter-result">
          Showing <strong>{filtered.length}</strong> {activeTab === 'All' ? 'all packages' : `packages in "${activeTab}"`}
        </p>

        {/* Packages Grid */}
        <div className="pkg-grid">
          {filtered.map((pkg) => (
            <div key={pkg.id} className="card pkg-card-anim">
              <div className="card-img-wrap">
                <img src={pkg.img} alt={pkg.title} />
              </div>
              <span className="card-badge">{pkg.badge}</span>
              <div className="card-content">
                <div className="stars">{pkg.rating}</div>
                <h3>{pkg.title}</h3>
                <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '12px', lineHeight: '1.6' }}>{pkg.desc}</p>
                <div className="card-meta">
                  <span>📅 {pkg.days}</span>
                  <span>🏷️ {pkg.category}</span>
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

        {/* No results */}
        {filtered.length === 0 && (
          <div className="no-results">
            <span>😕</span>
            <h3>No packages found</h3>
            <p>Try selecting a different category</p>
            <button className="filter-tab active" onClick={() => setActiveTab('All')}>View All Packages</button>
          </div>
        )}

      </section>

      <Footer />
    </>
  )
}

export default Packages
