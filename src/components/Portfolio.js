import React from 'react'
import './styles/Portfolio.scss'
function Portfolio() {
  
  return (
    <div className='parent_container'>
        <h1 className='title'>Portfolio</h1>
        <div className='tabs'>
          <button className="tab">Web Design</button>
          <button className="tab">Web Development</button>
          <button className="tab">Applications</button>
        </div>
        <div className="projects">
          <div className='project'>
            <div className='img-container'>
              <img  src="/images/airbnb.PNG" alt="" />
            </div>
            <p className='project-title'>Project Description</p>
            <p className='project-category'>Category</p>
          </div>
          <div className='project'>
            <div className='img-container'>
              <img  src="/images/amazon.PNG" alt="" />
            </div>
            <p className='project-title'>Project Description</p>
            <p className='project-category'>Category</p>
          </div><div className='project'>
            <div className='img-container'>
              <img  src="/images/covid.PNG" alt="" />
            </div>
            <p className='project-title'>Project Description</p>
            <p className='project-category'>Category</p>
          </div>
          <div className='project'>
            <div className='img-container'>
              <img  src="/images/css-grid.PNG" alt="" />
            </div>
            <p className='project-title'>Project Description</p>
            <p className='project-category'>Category</p>
          </div>
          <div className='project'>
            <div className='img-container'>
              <img  src="/images/glint.PNG" alt="" />
            </div>
            <p className='project-title'>Project Description</p>
            <p className='project-category'>Category</p>
          </div><div className='project'>
            <div className='img-container'>
              <img  src="/images/tesla.PNG" alt="" />
            </div>
            <p className='project-title'>Project Description</p>
            <p className='project-category'>Category</p>
          </div>
          <div className='project'>
            <div className='img-container'>
              <img  src="/images/travel.PNG" alt="" />
            </div>
            <p className='project-title'>Project Description</p>
            <p className='project-category'>Category</p>
          </div>
          <div className='project'>
            <div className='img-container'>
              <img  src="/images/weather2.PNG" alt="" />
            </div>
            <p className='project-title'>Project Description</p>
            <p className='project-category'>Category</p>
          </div><div className='project'>
            <div className='img-container'>
              <img  src="/images/weather2.PNG" alt="" />
            </div>
            <p className='project-title'>Project Description</p>
            <p className='project-category'>Category</p>
          </div>
        </div>
    </div>
  )
}

export default Portfolio