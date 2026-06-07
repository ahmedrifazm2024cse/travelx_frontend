import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './Dashboard.css'

const myBookings = [
  { id: '#TRV001', pkg: 'Maldives Paradise', date: '15 Jan 2025', travelers: 2, amount: '₹50,000', status: 'Confirmed' },
  { id: '#TRV002', pkg: 'Goa Beach Fun',     date: '22 Feb 2025', travelers: 4, amount: '₹72,000', status: 'Pending'   },
  { id: '#TRV003', pkg: 'Ooty Hill Station', date: '05 Mar 2025', travelers: 3, amount: '₹36,000', status: 'Completed' },
]

const wishlist = [
  { title: 'Kerala Backwaters', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=400&auto=format&fit=crop', price: '₹22,000', days: '6 Days' },
  { title: 'Rajasthan Royal',   img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=400&auto=format&fit=crop', price: '₹28,000', days: '7 Days' },
  { title: 'Manali Snow Trek',  img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=400&auto=format&fit=crop', price: '₹20,000', days: '5 Days' },
]

function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser]           = useState({ firstname: '', lastname: '', email: '', phone: '' })
  const [showModal, setShowModal] = useState(false)
  const [form, setForm]           = useState({})
  const [errors, setErrors]       = useState({})
  const [saved, setSaved]         = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('tx_current_user')
    if (stored) { const u = JSON.parse(stored); setUser(u); setForm(u) }
    else navigate('/login')
  }, [])

  const openEdit  = () => { setForm({ ...user }); setErrors({}); setSaved(false); setShowModal(true) }
  const closeModal = () => setShowModal(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
    setSaved(false)
  }

  const validate = () => {
    const e = {}
    if (!form.firstname?.trim()) e.firstname = 'First name is required'
    if (!form.lastname?.trim())  e.lastname  = 'Last name is required'
    if (!form.email?.trim())     e.email     = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone?.trim())     e.phone     = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter valid 10-digit number'
    return e
  }

  const handleSave = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    const updated = { ...user, firstname: form.firstname.trim(), lastname: form.lastname.trim(), email: form.email.trim(), phone: form.phone.trim() }
    localStorage.setItem('tx_current_user', JSON.stringify(updated))
    setUser(updated)
    setSaved(true)
    setTimeout(() => { setShowModal(false); setSaved(false) }, 1200)
  }

  const handleLogout = () => {
    localStorage.removeItem('tx_current_user')
    localStorage.removeItem('tx_token')
    navigate('/login')
  }

  const initial = user.firstname ? user.firstname.charAt(0).toUpperCase() : '?'

  return (
    <>
      <Navbar />
      <div className="dashboard-layout">

        <aside className="sidebar">
          <div className="sidebar-logo">Travel<span>X</span></div>
          <nav className="sidebar-menu">
            <NavLink to="/dashboard" end><span className="icon">📊</span> Dashboard</NavLink>
            <NavLink to="/booking"><span className="icon">📋</span> My Bookings</NavLink>
            <NavLink to="/packages"><span className="icon">✈️</span> Browse Packages</NavLink>
            <NavLink to="/enquiry"><span className="icon">📩</span> Enquiries</NavLink>
            <a href="#wishlist"><span className="icon">❤️</span> Wishlist</a>
            <a href="#profile"><span className="icon">👤</span> My Profile</a>
            <button className="sidebar-logout" onClick={handleLogout}><span className="icon">🚪</span> Logout</button>
          </nav>
        </aside>

        <main className="dashboard-content">

          <div className="dash-header">
            <h2>Welcome back, {user.firstname}! 👋</h2>
            <p>Here's what's happening with your travel plans</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card"><div className="stat-icon blue">✈️</div><div className="stat-info"><h3>3</h3><p>Total Bookings</p></div></div>
            <div className="stat-card"><div className="stat-icon green">✅</div><div className="stat-info"><h3>1</h3><p>Completed Trips</p></div></div>
            <div className="stat-card"><div className="stat-icon gold">⏳</div><div className="stat-info"><h3>1</h3><p>Upcoming Trips</p></div></div>
            <div className="stat-card"><div className="stat-icon red">❤️</div><div className="stat-info"><h3>3</h3><p>Wishlist Items</p></div></div>
          </div>

          <div className="table-card">
            <div className="table-header">
              <h3>My Bookings</h3>
              <Link to="/booking" className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>+ New Booking</Link>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr><th>Booking ID</th><th>Package</th><th>Travel Date</th><th>Travelers</th><th>Amount</th><th>Status</th><th>Action</th></tr>
                </thead>
                <tbody>
                  {myBookings.map((b) => (
                    <tr key={b.id}>
                      <td><strong>{b.id}</strong></td>
                      <td>{b.pkg}</td>
                      <td>{b.date}</td>
                      <td>{b.travelers} pax</td>
                      <td><strong>{b.amount}</strong></td>
                      <td><span className={`badge ${b.status === 'Confirmed' ? 'badge-success' : b.status === 'Pending' ? 'badge-warning' : 'badge-info'}`}>{b.status}</span></td>
                      <td><Link to="/package/1" style={{ color: '#00B4FF', fontSize: '13px', fontWeight: 600 }}>View</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div id="wishlist" className="table-card" style={{ padding: '0' }}>
            <div className="table-header">
              <h3>❤️ My Wishlist</h3>
              <Link to="/packages" className="btn-outline" style={{ padding: '8px 18px', fontSize: '13px' }}>Browse More</Link>
            </div>
            <div className="wishlist-grid">
              {wishlist.map((w) => (
                <div key={w.title} className="wish-card">
                  <img src={w.img} alt={w.title} />
                  <div className="wish-info">
                    <h4>{w.title}</h4>
                    <p>📅 {w.days}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                      <strong style={{ color: '#00B4FF' }}>{w.price}</strong>
                      <Link to="/booking" className="btn-primary" style={{ padding: '6px 14px', fontSize: '12px' }}>Book</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="profile" className="profile-card">
            <div className="profile-avatar">{initial}</div>
            <div className="profile-info">
              <h3>{user.firstname} {user.lastname}</h3>
              <p>📧 {user.email}</p>
              <p>📞 {user.phone}</p>
            </div>
            <button className="btn-primary edit-profile-btn" onClick={openEdit}>✏️ Edit Profile</button>
          </div>

        </main>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>✏️ Edit Profile</h3>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
            {saved && <div className="modal-success">✅ Profile updated successfully!</div>}
            <form onSubmit={handleSave} noValidate>
              <div className="modal-row">
                <div className="modal-field">
                  <label>First Name *</label>
                  <input name="firstname" type="text" value={form.firstname || ''} onChange={handleChange} placeholder="First name" className={errors.firstname ? 'input-err' : ''} />
                  {errors.firstname && <span className="modal-err">{errors.firstname}</span>}
                </div>
                <div className="modal-field">
                  <label>Last Name *</label>
                  <input name="lastname" type="text" value={form.lastname || ''} onChange={handleChange} placeholder="Last name" className={errors.lastname ? 'input-err' : ''} />
                  {errors.lastname && <span className="modal-err">{errors.lastname}</span>}
                </div>
              </div>
              <div className="modal-field">
                <label>Email Address *</label>
                <input name="email" type="email" value={form.email || ''} onChange={handleChange} placeholder="your@email.com" className={errors.email ? 'input-err' : ''} />
                {errors.email && <span className="modal-err">{errors.email}</span>}
              </div>
              <div className="modal-field">
                <label>Phone Number *</label>
                <input name="phone" type="tel" value={form.phone || ''} onChange={handleChange} placeholder="9876543210" className={errors.phone ? 'input-err' : ''} />
                {errors.phone && <span className="modal-err">{errors.phone}</span>}
              </div>
              <div className="modal-actions">
                <button type="button" className="modal-cancel-btn" onClick={closeModal}>Cancel</button>
                <button type="submit" className="modal-save-btn">Save Changes ✅</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Dashboard
