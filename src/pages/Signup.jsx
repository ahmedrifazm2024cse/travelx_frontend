import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.css'

function Signup() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', password: '', confirm: '', agree: false
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  // Update field value
  const handle = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
    setErrors({ ...errors, [name]: '' }) // clear error on change
  }

  // Validate all fields
  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    else if (form.firstName.trim().length < 2) e.firstName = 'Min 2 characters'

    if (!form.lastName.trim()) e.lastName = 'Last name is required'

    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'

    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter valid 10-digit Indian mobile number'

    if (!form.password) e.password = 'Password is required'
    else if (form.password.length < 6) e.password = 'Password must be at least 6 characters'
    else if (!/(?=.*[A-Z])/.test(form.password)) e.password = 'Must contain at least one uppercase letter'
    else if (!/(?=.*\d)/.test(form.password)) e.password = 'Must contain at least one number'

    if (!form.confirm) e.confirm = 'Please confirm your password'
    else if (form.confirm !== form.password) e.confirm = 'Passwords do not match'

    if (!form.agree) e.agree = 'You must accept the terms to continue'

    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    // Check if email already exists
    const existing = JSON.parse(localStorage.getItem('tx_users') || '[]')
    if (existing.find(u => u.email === form.email)) {
      setErrors({ email: 'This email is already registered. Please login.' })
      return
    }

    // Save new user
    const newUser = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      password: form.password,
    }
    localStorage.setItem('tx_users', JSON.stringify([...existing, newUser]))

    setSuccess('Account created successfully! Redirecting to login...')
    setTimeout(() => navigate('/login'), 1800)
  }

  return (
    <div className="auth-page">
      <div className="auth-card" style={{ maxWidth: '500px' }}>
        <Link to="/" className="auth-logo">Travel<span>X</span></Link>
        <h2>Create Account</h2>
        <p className="auth-sub">Join 50,000+ happy travelers on TravelX</p>

        {success && <div className="auth-success">{success}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row-auth">
            <div className="form-group">
              <label>First Name *</label>
              <input name="firstName" type="text" placeholder="First name" value={form.firstName} onChange={handle} className={errors.firstName ? 'input-error' : ''} />
              {errors.firstName && <span className="err-msg">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label>Last Name *</label>
              <input name="lastName" type="text" placeholder="Last name" value={form.lastName} onChange={handle} className={errors.lastName ? 'input-error' : ''} />
              {errors.lastName && <span className="err-msg">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handle} className={errors.email ? 'input-error' : ''} />
            {errors.email && <span className="err-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input name="phone" type="tel" placeholder="9876543210" value={form.phone} onChange={handle} className={errors.phone ? 'input-error' : ''} />
            {errors.phone && <span className="err-msg">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Password *</label>
            <div className="pw-wrap">
              <input name="password" type={form.showPw ? 'text' : 'password'} placeholder="Min 6 chars, 1 uppercase, 1 number" value={form.password} onChange={handle} className={errors.password ? 'input-error' : ''} />
              <button type="button" className="pw-toggle" onClick={() => setForm({ ...form, showPw: !form.showPw })}>
                {form.showPw ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && <span className="err-msg">{errors.password}</span>}
            {/* Strength bar */}
            {form.password && (
              <div className="pw-strength">
                <div className={`pw-bar ${form.password.length >= 6 && /[A-Z]/.test(form.password) && /\d/.test(form.password) ? 'strong' : form.password.length >= 4 ? 'medium' : 'weak'}`} />
                <span>{form.password.length >= 6 && /[A-Z]/.test(form.password) && /\d/.test(form.password) ? 'Strong' : form.password.length >= 4 ? 'Medium' : 'Weak'}</span>
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Confirm Password *</label>
            <input name="confirm" type="password" placeholder="Re-enter password" value={form.confirm} onChange={handle} className={errors.confirm ? 'input-error' : ''} />
            {errors.confirm && <span className="err-msg">{errors.confirm}</span>}
          </div>

          <div className="form-group">
            <label className="check-label" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
              <input name="agree" type="checkbox" checked={form.agree} onChange={handle} style={{ marginTop: '3px', accentColor: '#00B4FF', width: '16px', height: '16px', flexShrink: 0 }} />
              <span style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.5' }}>
                I agree to the <Link to="/terms" style={{ color: '#00B4FF' }}>Terms & Conditions</Link> and <Link to="/privacy" style={{ color: '#00B4FF' }}>Privacy Policy</Link>
              </span>
            </label>
            {errors.agree && <span className="err-msg">{errors.agree}</span>}
          </div>

          <button type="submit" className="form-full-btn">Create Account 🚀</button>
        </form>

        <p className="auth-footer" style={{ marginTop: '20px' }}>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
