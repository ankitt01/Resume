import React from 'react';
import './styles/Resume.scss'
import Portfolio from './Portfolio'

function Resume() {
  return (
      <div className='resume'>
          <h2 className='title'>Resume</h2>
            <div className="education">
                <h2>Education</h2>
                <div className="tile">
                    <p className="sub-title">Lovely Professional University, Jalandhar</p>
                    <p className="year">2019 - 2023</p>
                    <p className="desc">Bachelors of Technology in Computer Science <br /> CGPA: 7.5</p>
                </div>
                <div className="tile">
                    <p className="sub-title">Delhi Public School, Ranipur</p>
                    <p className="year">2017 - 2019</p>
                    <p className="desc">Class XII CBSE Board <br /> Percentage: 80%</p>
                </div>
                <div className="tile">
                    <p className="sub-title">Delhi Public School, Ranipur</p>
                    <p className="year">2010 - 2017</p>
                    <p className="desc">Class X CBSE Board <br /> CGPA: 9.2</p>
                </div>
            </div>

            <div className="education">
                <h2 id='projects'>Projects</h2>
                <div className="tile">
                    <p className="sub-title"> <a href="https://airbnb-clone-murex-xi.vercel.app/">Airbnb-Clone</a> </p>
                    <p className="year">2021</p>
                    <p className="desc">Used <span>Nextjs</span> framework to build the UI, and did the styling by the help of <span>Tailwind css</span> , Integrated <span>Mapbox</span> for displaying the map with the search Results, also integrated <span>Calendar</span> to pic the starting and ending date of your travel , and finally the <span>searching</span> destination functionality.</p>
                </div>
                <div className="tile">
                    <p className="sub-title"><a href="https://ankitt01.github.io/Tesla-website/">Tesla Website Clone</a></p>
                    <p className="year">2021</p>
                    <p className="desc">This is a clone of <span>Tesla.com</span> website, built using <span>Reactjs</span> for the UI and <span>styled components</span> for styling of the webpage.</p>
                </div>
                <div className="tile">
                    <p className="sub-title"><a href="https://ankitt01.github.io/Covid19-LandingPage/">Covid19 Data</a></p>
                    <p className="year">2020</p>
                    <p className="desc">Build a static webpage using <span>HTML</span>, <span>CSS</span> and <span>Js</span>. It displays the information about the CoronaVirus and statstics of the casualties. </p>
                </div>
            </div>

            <div className="skills">
                <h2>My Skills</h2>
                <div className='tabs'>
                    <div className="tab">HTML</div>
                    <div className="tab">CSS</div>
                    <div className="tab">Javascript</div>
                    <div className="tab">ReactJs</div>
                    <div className="tab">NextJS</div>
                    <div className="tab">Bootstrap</div>
                    <div className="tab">TailwindCss</div>
                    <div className="tab">NodeJs</div>
                    <div className="tab">ExpressJs</div>
                    <div className="tab">MongoDB</div>
                    <div className="tab">Firebase</div>
                    <div className="tab">C++</div>
                </div>
            </div>
            <Portfolio />
      </div>
  )
}

export default Resume;


