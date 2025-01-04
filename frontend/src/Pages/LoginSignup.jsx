import React from 'react'
import './css/loginSignup.css'

export default function LoginSignup() {
  return (
    <div>
      <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" name="name" id="" placeholder='Your Name' />
            <input type="email" name="email" id="" placeholder='Email Address' />
            <input type="password" name="password" id="" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='checkbox' id='' className='checkbox'/>
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
