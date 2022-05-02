import React from 'react';
import './styles/About.scss'
import webdes from '../img/icon-design.svg'
import webdev from '../img/icon-dev.svg'

function About() {
    return <div className='portfolio'>
      <section className="about-me">
      <h1 className='title'>About Me</h1>
          <p>I am a final year under-graduate currently pursuing my bachelors in Computer Science and Engineering from LPU, Jalandhar. I am a web dev enthusiast and have been practicing HTML, CSS and Js since my first semester. I have build many frontend projects using ReactJs/NextJS, Tailwind CSS, Firebase which are mentioned in the portfolio section. I have build many website clones which really helped me to understand the concepts of react and redux which includes hooks, state, context and routing. Few clones are - Amazon, Airbnb, CRED, Tesla, Whatsapp, Google Calendar, netflix. </p>
          <p>I have also done and internship from internshala where I contributed on the frontend part of their website from scratch. I learnt about the component tree structure of the website and how the data flow from one part of the website to other. Implemented the concept Redux state management to keep a global state which can be easily access throughout the website. I am able to convert any figma designs to websites using all the best practices. My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>

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
