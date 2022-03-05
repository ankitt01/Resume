import React from 'react'
import './styles/Contact.scss'
function Contact() {
  return (
    <div className="parent_container">
        <h1 className='title'>Contact Form</h1>

        <form className="form">
          <div className='input-div'>
            <input type="text" placeholder='Full name' required />
            <input type="text" placeholder='Email address' required/>
          </div>
          <textarea className='message' name="message" cols="10" rows="5" placeholder='Your Message' required/>
          <button><i class="fa-solid fa-paper-plane"/>  Send Message</button>
        </form>
    </div>
  )
}

export default Contact