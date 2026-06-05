import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

function Navbar() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [dropdown, setDropdown] = useState(false)
  const dropRef = useRef(null)

  // Read current user from localStorage on every render
  useEffect(() => {
    const stored = localStorage.getItem('tx_current_user')
    setUser(stored ? JSON.parse(stored) : null)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('tx_current_user')
    setUser(null)
    setDropdown(false)
    navigate('/')
  }

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="nav-logo">Travel<span>X</span></Link>

      {/* Nav Links */}
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/packages" className={({ isActive }) => isActive ? 'active' : ''}>Packages</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? 'active' : ''}>FAQ</NavLink>
        <NavLink to="/enquiry" className={({ isActive }) => isActive ? 'active' : ''}>Enquiry</NavLink>
      </div>

      {/* Auth Section */}
      <div className="nav-btns">
        {user ? (
          /* ── Logged-in: show avatar + dropdown ── */
          <div className="user-menu" ref={dropRef}>
            <button className="user-avatar-btn" onClick={() => setDropdown(!dropdown)}>
              <div className="user-avatar">
                {user.firstName.charAt(0).toUpperCase()}
              </div>
              <span className="user-name">Hi, {user.firstName}</span>
              <span className="arrow">{dropdown ? '▲' : '▼'}</span>
            </button>

            {dropdown && (
              <div className="user-dropdown">
                <div className="dropdown-header">
                  <div className="dh-avatar">{user.firstName.charAt(0).toUpperCase()}</div>
                  <div>
                    <strong>{user.firstName} {user.lastName}</strong>
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="dropdown-divider" />
                <Link to="/dashboard" className="dropdown-item" onClick={() => setDropdown(false)}>
                  <span>📊</span> My Dashboard
                </Link>
                <Link to="/booking" className="dropdown-item" onClick={() => setDropdown(false)}>
                  <span>📋</span> My Bookings
                </Link>
                <Link to="/packages" className="dropdown-item" onClick={() => setDropdown(false)}>
                  <span>✈️</span> Browse Packages
                </Link>
                <div className="dropdown-divider" />
                <button className="dropdown-item logout-item" onClick={handleLogout}>
                  <span>🚪</span> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          /* ── Guest: show Login / Sign Up ── */
          <>
            <Link to="/login" className="btn-outline">Login</Link>
            <Link to="/signup" className="btn-primary">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
