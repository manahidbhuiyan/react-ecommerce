import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive offers On Your Email</h1>
      <p>Subscribe to our NewsLetter and stay updated</p>
      <div>
        <input type="text" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
