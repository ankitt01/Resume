import React from 'react';
import ankit from '../../img/ankit.jpg'
import '../resume/style/ResumeBasicDetails.scss'

export default function ResumeBasicDetails() {
    
  return (
      <div className='resume-basic-details'>
          <section className='profile'>
            <img src={ankit} alt="Profile" />
            <h2 className='name'>Ankit Singh Rawat</h2>
            <p className="description">* web developer *</p>
        </section>
        <section className="about">
            <h3>About</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam molestias eveniet eum totam rem ut?
        </section>
        <section className="contact">
            <h3>Contact</h3>
            <div className="email"><i className="far fa-envelope"></i>ankitrawat0102@gmail.com</div>
            <div className="phone"><i className="fas fa-mobile-alt"></i>8077904388</div>
            <h3>On the Web</h3>
            <div className="linkedin"><i className="fab fa-linkedin-in"></i>Linkedin</div>
            <div className="github"><i className="fab fa-github-square"></i>Github</div>
        </section>
      </div>
  )
}
