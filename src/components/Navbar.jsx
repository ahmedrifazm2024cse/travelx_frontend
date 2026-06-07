import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

function Navbar() {
  const navigate  = useNavigate()
  const [user, setUser]       = useState(null)
  const [dropdown, setDropdown] = useState(false)
  const dropRef   = useRef(null)

  const loadUser = () => {
    const stored = localStorage.getItem('tx_current_user')
    setUser(stored ? JSON.parse(stored) : null)
  }

  useEffect(() => {
    loadUser()
    // Re-read user whenever storage changes (login/logout from another tab)
    window.addEventListener('storage', loadUser)
    return () => window.removeEventListener('storage', loadUser)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropdown(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('tx_current_user')
    localStorage.removeItem('tx_token')
    setUser(null)
    setDropdown(false)
    navigate('/')
  }

  const initial = user?.firstname ? user.firstname.charAt(0).toUpperCase() : '?'

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Travel<span>X</span></Link>

      <div className="nav-links">
        <NavLink to="/"        end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/packages"    className={({ isActive }) => isActive ? 'active' : ''}>Packages</NavLink>
        <NavLink to="/about"       className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/contact"     className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        <NavLink to="/faq"         className={({ isActive }) => isActive ? 'active' : ''}>FAQ</NavLink>
        <NavLink to="/enquiry"     className={({ isActive }) => isActive ? 'active' : ''}>Enquiry</NavLink>
      </div>

      <div className="nav-btns">
        {user ? (
          <div className="user-menu" ref={dropRef}>
            <button className="user-avatar-btn" onClick={() => setDropdown(!dropdown)}>
              <div className="user-avatar">{initial}</div>
              <span className="user-name">Hi, {user.firstname}</span>
              <span className="arrow">{dropdown ? '▲' : '▼'}</span>
            </button>

            {dropdown && (
              <div className="user-dropdown">
                <div className="dropdown-header">
                  <div className="dh-avatar">{initial}</div>
                  <div>
                    <strong>{user.firstname} {user.lastname}</strong>
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="dropdown-divider" />
                <Link to="/dashboard" className="dropdown-item" onClick={() => setDropdown(false)}><span>📊</span> My Dashboard</Link>
                <Link to="/booking"   className="dropdown-item" onClick={() => setDropdown(false)}><span>📋</span> My Bookings</Link>
                <Link to="/packages"  className="dropdown-item" onClick={() => setDropdown(false)}><span>✈️</span> Browse Packages</Link>
                <div className="dropdown-divider" />
                <button className="dropdown-item logout-item" onClick={handleLogout}><span>🚪</span> Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login"  className="btn-outline">Login</Link>
            <Link to="/signup" className="btn-primary">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
