import { useState } from 'react'
import '../styles/Auth.css'
import { login, signup } from '../services/api'

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [user, setUser] = useState(null)

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
                  {!isSignUp ? <LogIn onSuccess={handleLoginSuccess} /> : <SignUp onSuccess={handleLoginSuccess} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LogIn({ onSuccess }) {
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
            <a href="#0" className="link">Forgot your password?</a>
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

export default Auth
