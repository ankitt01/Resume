import React, { useState } from 'react'
import './styles/Contact.scss'
import ReactMapGL from 'react-map-gl';
function Contact() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  })
  
  return (
    <div className="parent_container">
        <h1 className='title'>Contact Form</h1>

        <form className="form" action="https://formsubmit.co/ankitrawat0102@gmail.com" method="POST">
          <div className='input-div'>
            <input type="text" name="name" placeholder='Full name' required />
            <input type="text" name="email" placeholder='Email address' required/>
          </div>
          <textarea className='message' name="message" cols="10" rows="10" placeholder='Your Message' required/>
          <button type="submit"><i class="fa-solid fa-paper-plane"/>  Send Message</button>
        </form>
    </div>
  )
}

export default Contact