import './styles/Contact.scss'
function Contact() {
  return (
    <div className="parent_container">
        <h1 className='title'>Contact Form</h1>

        <form className="form" action="https://formsubmit.co/ankitrawat0102@gmail.com" method="POST">
          <div className='input-div'>
            <input type="text" name="name" placeholder='Full name'  required />
            <input type="text" name="email" placeholder='Email address' required/>
          </div>
          <textarea className='message' name="message" cols="10" rows="10" placeholder='Your Message' required/>
          <button type="submit"><i className="fa-solid fa-paper-plane"/>  Send Message</button>
        </form>
    </div>
  )
}

export default Contact