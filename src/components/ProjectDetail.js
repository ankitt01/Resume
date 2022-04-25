import React from 'react'
import {useParams} from "react-router-dom";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const ProjectDetail = (props) => {
    const {title} = useParams()
    const {project} = useLocation().state;
  return (
    <div className='parent_container'>
      <h1 className='title'>Portfolio</h1>
      {title}
      <div className='img'>
          <img  src={`/images/${project.img}`} alt="" />
        </div>
        <p className='project-title'>{project.title}</p>
        <p className='project-category'>{project.category}</p>
    </div>
  )
}

export default ProjectDetail