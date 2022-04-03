import React from 'react';
import './styles/About.scss'
import webdes from '../img/icon-design.svg'
import webdev from '../img/icon-dev.svg'

function About() {
    return <div className='portfolio'>
      <section className="about-me">
      <h1 className='title'>About Me</h1>
          <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
          <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>

          <h1>What I'm Doing</h1>

          <div className="tech-cards">
                <div className="card">
                    <img src={webdes} alt="webdes" />
                    <div>
                        <h2>Web Design</h2>
                        <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>
                <div className="card">
                <img src={webdev} alt="webdes" />
                <div>
                    <h2>Web Developer</h2>
                    <p>High-quality development of sites at the professional level.</p></div>
                </div>        
          </div>
      </section>
  </div>
}

export default About;
