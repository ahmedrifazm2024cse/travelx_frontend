import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(''); setSuccess('')

    if (!email.trim()) { setError('Email is required'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Enter a valid email address'); return }

    // Check if email exists in localStorage
    const users = JSON.parse(localStorage.getItem('tx_users') || '[]')
    const found = users.find(u => u.email === email.trim())

    if (!found) {
      setError('No account found with this email. Please sign up first.')
      return
    }

    setSuccess(`Password reset link sent to ${email}. Please check your inbox.`)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="auth-logo">Travel<span>X</span></Link>
        <div style={{ fontSize: '48px', textAlign: 'center', marginBottom: '12px' }}>🔑</div>
        <h2>Forgot Password?</h2>
        <p className="auth-sub">Enter your registered email to receive a reset link.</p>

        {error   && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        {!success && (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setError('') }}
                className={error ? 'input-error' : ''}
              />
              {error && <span className="err-msg">{error}</span>}
            </div>
            <button type="submit" className="form-full-btn">Send Reset Link 📧</button>
          </form>
        )}

        <div className="fp-info" style={{ marginTop: '20px' }}>
          <p>🔒 Check your email inbox for the password reset link.</p>
          <p>📩 Didn't receive it? Check your spam folder.</p>
        </div>

        <p className="auth-footer">Remembered it? <Link to="/login">Back to Login</Link></p>
        <p className="auth-footer" style={{ marginTop: '8px' }}>New here? <Link to="/signup">Create an Account</Link></p>
      </div>
    </div>
  )
}

export default ForgotPassword
