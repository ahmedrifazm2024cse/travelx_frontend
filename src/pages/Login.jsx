import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiPost } from '../api'
import './Auth.css'

function Login() {
  const navigate = useNavigate()
  const [form, setForm]       = useState({ email: '', password: '', remember: false, showPw: false })
  const [errors, setErrors]   = useState({})
  const [authError, setAuthError] = useState('')
  const [loading, setLoading] = useState(false)

  const handle = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
    setErrors({ ...errors, [name]: '' })
    setAuthError('')
  }

  const validate = () => {
    const e = {}
    if (!form.email.trim())    e.email    = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.password)        e.password = 'Password is required'
    else if (form.password.length < 6) e.password = 'Min 6 characters'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setLoading(true)
    try {
      const data = await apiPost('https://travelx-2-2liv.onrender.com/api/user/login', { email: form.email.trim(), password: form.password })
      localStorage.setItem('tx_current_user', JSON.stringify(data.user))
      localStorage.setItem('tx_token', data.token)
      navigate('/dashboard')
    } catch (err) {
      setAuthError(err.message || 'Invalid email or password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="auth-logo">Travel<span>X</span></Link>
        <h2>Welcome Back!</h2>
        <p className="auth-sub">Sign in to your TravelX account</p>

        {authError && <div className="auth-error">❌ {authError}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Email Address *</label>
            <input name="email" type="email" placeholder="your@email.com"
              value={form.email} onChange={handle}
              className={errors.email ? 'input-error' : ''} />
            {errors.email && <span className="err-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Password *</label>
            <div className="pw-wrap">
              <input name="password" type={form.showPw ? 'text' : 'password'}
                placeholder="Enter your password" value={form.password} onChange={handle}
                className={errors.password ? 'input-error' : ''} />
              <button type="button" className="pw-toggle"
                onClick={() => setForm({ ...form, showPw: !form.showPw })}>
                {form.showPw ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && <span className="err-msg">{errors.password}</span>}
          </div>

          <div className="auth-options">
            <label className="check-label">
              <input name="remember" type="checkbox" checked={form.remember} onChange={handle} />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
          </div>

          <button type="submit" className="form-full-btn" disabled={loading}>
            {loading ? '⏳ Signing in...' : 'Sign In →'}
          </button>
        </form>

        <div className="divider">or continue with</div>
        <div className="social-auth">
          <button className="social-auth-btn" type="button">🔵 Google</button>
          <button className="social-auth-btn" type="button">📘 Facebook</button>
        </div>

        <p className="auth-footer">Don't have an account? <Link to="/signup">Sign Up Free</Link></p>
        <div className="demo-hint">
          <p>💡 New here? <Link to="/signup">Create an account</Link> first, then login.</p>
        </div>
      </div>
    </div>
  )
}

export default Login
