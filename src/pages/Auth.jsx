import { useState } from 'react'
import '../styles/Auth.css'
import { login, signup, forgotPassword, resetPassword } from '../services/api'

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [user, setUser] = useState(null)
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const handleLoginSuccess = (userData) => {
    setUser(userData)
  }

  if (user) {
    return (
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h4 className="mb-4">Welcome, {user.fullname}!</h4>
                <p>Email: {user.email}</p>
                <button 
                  className="btn mt-4"
                  onClick={() => {
                    localStorage.clear()
                    setUser(null)
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                checked={isSignUp}
                onChange={(e) => setIsSignUp(e.target.checked)}
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  {!isSignUp ? <LogIn onSuccess={handleLoginSuccess} onForgotPassword={() => setShowForgotPassword(true)} /> : <SignUp onSuccess={handleLoginSuccess} />}
                </div>
              </div>
              
              {showForgotPassword && (
                <ForgotPassword onClose={() => setShowForgotPassword(false)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LogIn({ onSuccess, onForgotPassword }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await login(email, password)
      console.log('Login berhasil:', response)
      onSuccess(response.data)
    } catch (err) {
      setError(err.message || 'Login gagal!')
      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card-front">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3">Log In</h4>
          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="email" 
                className="form-style" 
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="input-icon uil uil-at"></i>
            </div>
            <div className="form-group mt-2">
              <input 
                type="password" 
                className="form-style" 
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button type="submit" className="btn mt-4" disabled={loading}>
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
          <p className="mb-0 mt-4 text-center">
            <a href="#0" className="link" onClick={(e) => { e.preventDefault(); onForgotPassword(); }}>Forgot your password?</a>
          </p>
        </div>
      </div>
    </div>
  )
}

function SignUp({ onSuccess }) {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await signup(fullname, email, password)
      console.log('Sign up berhasil:', response)
      onSuccess(response.data)
    } catch (err) {
      setError(err.message || 'Registrasi gagal!')
      console.error('Sign up error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card-back">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3">Sign Up</h4>
          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                className="form-style" 
                placeholder="Your Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
              <i className="input-icon uil uil-user"></i>
            </div>
            <div className="form-group mt-2">
              <input 
                type="email" 
                className="form-style" 
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="input-icon uil uil-at"></i>
            </div>
            <div className="form-group mt-2">
              <input 
                type="password" 
                className="form-style" 
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button type="submit" className="btn mt-4" disabled={loading}>
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function ForgotPassword({ onClose }) {
  const [step, setStep] = useState(1) // 1: enter email, 2: enter code & new password
  const [email, setEmail] = useState('')
  const [resetCode, setResetCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRequestReset = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await forgotPassword(email)
      setSuccess(response.message || 'Kode reset telah dikirim ke email Anda!')
      setStep(2)
    } catch (err) {
      setError(err.message || 'Gagal mengirim kode reset')
    } finally {
      setLoading(false)
    }
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    setError('')

    if (newPassword !== confirmPassword) {
      setError('Password tidak cocok!')
      return
    }

    if (newPassword.length < 6) {
      setError('Password minimal 6 karakter!')
      return
    }

    setLoading(true)

    try {
      const response = await resetPassword(email, resetCode, newPassword)
      setSuccess(response.message || 'Password berhasil direset!')
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (err) {
      setError(err.message || 'Gagal mereset password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="forgot-password-overlay" onClick={onClose}>
      <div className="forgot-password-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <h4 className="mb-4">Forgot Password</h4>
        
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        
        {step === 1 ? (
          <form onSubmit={handleRequestReset}>
            <p className="description">
              Masukkan email Anda dan kami akan mengirimkan kode untuk mereset password.
            </p>
            <div className="form-group">
              <input 
                type="email" 
                className="form-style" 
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="input-icon uil uil-at"></i>
            </div>
            <button type="submit" className="btn mt-4" disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Code'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword}>
            <p className="description">
              Masukkan kode reset dan password baru Anda.
            </p>
            <div className="form-group">
              <input 
                type="text" 
                className="form-style" 
                placeholder="Reset Code"
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value)}
                required
              />
              <i className="input-icon uil uil-key-skeleton"></i>
            </div>
            <div className="form-group mt-2">
              <input 
                type="password" 
                className="form-style" 
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <div className="form-group mt-2">
              <input 
                type="password" 
                className="form-style" 
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <i className="input-icon uil uil-lock"></i>
            </div>
            <button type="submit" className="btn mt-4" disabled={loading}>
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
            <p className="mt-3">
              <a href="#0" className="link" onClick={(e) => { e.preventDefault(); setStep(1); setError(''); setSuccess(''); }}>
                ← Kembali
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default Auth
