import { useState } from 'react'
import '../styles/Auth.css'

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false)

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
                  {!isSignUp ? <LogIn /> : <SignUp />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LogIn() {
  return (
    <div className="card-front">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3">Log In</h4>
          <div className="form-group">
            <input type="email" className="form-style" placeholder="Your Email" />
            <i className="input-icon uil uil-at"></i>
          </div>
          <div className="form-group mt-2">
            <input type="password" className="form-style" placeholder="Your Password" />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <button className="btn mt-4">submit</button>
          <p className="mb-0 mt-4 text-center">
            <a href="#0" className="link">Forgot your password?</a>
          </p>
        </div>
      </div>
    </div>
  )
}

function SignUp() {
  return (
    <div className="card-back">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3">Sign Up</h4>
          <div className="form-group">
            <input type="text" className="form-style" placeholder="Your Full Name" />
            <i className="input-icon uil uil-user"></i>
          </div>
          <div className="form-group mt-2">
            <input type="email" className="form-style" placeholder="Your Email" />
            <i className="input-icon uil uil-at"></i>
          </div>
          <div className="form-group mt-2">
            <input type="password" className="form-style" placeholder="Your Password" />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <button className="btn mt-4">submit</button>
        </div>
      </div>
    </div>
  )
}

export default Auth
