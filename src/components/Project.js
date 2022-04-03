import React from 'react'
import './styles/Portfolio.scss'

const Project = ({project}) => {
  return (
    <div className='project'>
      <div className='img-container'>
        <img  src={`/images/${project.img}`} alt="" />
      </div>
      <p className='project-title'>{project.title}</p>
      <p className='project-category'>{project.category}</p>
    </div>
  )
}

export default Project