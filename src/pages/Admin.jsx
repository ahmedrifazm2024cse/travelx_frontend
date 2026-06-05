import { Link, NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Admin.css'

const bookings = [
  { id: '#TRV001', user: 'Rahul Mehta', pkg: 'Maldives Paradise', date: '15 Jan 2025', amount: '₹50,000', status: 'Confirmed' },
  { id: '#TRV002', user: 'Priya Sharma', pkg: 'Goa Beach Fun', date: '22 Feb 2025', amount: '₹72,000', status: 'Pending' },
  { id: '#TRV003', user: 'Sneha Kumar', pkg: 'Kerala Backwaters', date: '08 Mar 2025', amount: '₹44,000', status: 'Confirmed' },
  { id: '#TRV004', user: 'Arjun Dev', pkg: 'Rajasthan Royal', date: '12 Apr 2025', amount: '₹56,000', status: 'Cancelled' },
  { id: '#TRV005', user: 'Meera Nair', pkg: 'Manali Snow Trek', date: '20 Apr 2025', amount: '₹40,000', status: 'Completed' },
]

const pkgs = [
  { id: 1, title: 'Maldives Paradise', category: 'Beach', price: '₹25,000', bookings: 142, status: 'Active' },
  { id: 2, title: 'Ooty Hill Station', category: 'Hills', price: '₹12,000', bookings: 89, status: 'Active' },
  { id: 3, title: 'Goa Beach Fun', category: 'Beach', price: '₹18,000', bookings: 211, status: 'Active' },
  { id: 4, title: 'Kerala Backwaters', category: 'Nature', price: '₹22,000', bookings: 76, status: 'Active' },
  { id: 5, title: 'Rajasthan Royal', category: 'Heritage', price: '₹28,000', bookings: 54, status: 'Inactive' },
]

function Admin() {
  return (
    <>
      <Navbar />
      <div className="dashboard-layout">

        {/* Admin Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-logo">Admin<span>X</span></div>
          <nav className="sidebar-menu">
            <NavLink to="/admin" end><span className="icon">📊</span> Dashboard</NavLink>
            <a href="#bookings"><span className="icon">📋</span> All Bookings</a>
            <a href="#packages"><span className="icon">✈️</span> Manage Packages</a>
            <a href="#users"><span className="icon">👥</span> Users</a>
            <a href="#enquiries"><span className="icon">📩</span> Enquiries</a>
            <a href="#reports"><span className="icon">📈</span> Reports</a>
            <a href="#settings"><span className="icon">⚙️</span> Settings</a>
            <NavLink to="/login"><span className="icon">🚪</span> Logout</NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-content">
          <div className="dash-header">
            <h2>Admin Dashboard 🛠️</h2>
            <p>Manage bookings, packages and users from here</p>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon blue">📋</div>
              <div className="stat-info"><h3>1,284</h3><p>Total Bookings</p></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon green">💰</div>
              <div className="stat-info"><h3>₹28.4L</h3><p>Total Revenue</p></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon gold">👥</div>
              <div className="stat-info"><h3>52,000</h3><p>Total Users</p></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon red">✈️</div>
              <div className="stat-info"><h3>15</h3><p>Active Packages</p></div>
            </div>
          </div>

          {/* Bookings Table */}
          <div id="bookings" className="table-card">
            <div className="table-header">
              <h3>Recent Bookings</h3>
              <Link to="/booking" className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>Export CSV</Link>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>Customer</th>
                    <th>Package</th>
                    <th>Travel Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id}>
                      <td><strong>{b.id}</strong></td>
                      <td>{b.user}</td>
                      <td>{b.pkg}</td>
                      <td>{b.date}</td>
                      <td><strong>{b.amount}</strong></td>
                      <td>
                        <span className={`badge ${
                          b.status === 'Confirmed' ? 'badge-success'
                          : b.status === 'Pending' ? 'badge-warning'
                          : b.status === 'Cancelled' ? 'badge-danger'
                          : 'badge-info'
                        }`}>{b.status}</span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button className="admin-action-btn view">View</button>
                          <button className="admin-action-btn edit">Edit</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Package Management */}
          <div id="packages" className="table-card">
            <div className="table-header">
              <h3>Package Management</h3>
              <button className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px', border: 'none', cursor: 'pointer', fontFamily: 'Poppins' }}>+ Add Package</button>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Package Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Bookings</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pkgs.map((p) => (
                    <tr key={p.id}>
                      <td>#{p.id}</td>
                      <td><strong>{p.title}</strong></td>
                      <td>{p.category}</td>
                      <td><strong style={{ color: '#00B4FF' }}>{p.price}</strong></td>
                      <td>{p.bookings}</td>
                      <td>
                        <span className={`badge ${p.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>{p.status}</span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <Link to={`/package/${p.id}`} className="admin-action-btn view">View</Link>
                          <button className="admin-action-btn edit">Edit</button>
                          <button className="admin-action-btn del">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default Admin
