import React from 'react'
import {useParams} from "react-router-dom";

const ProjectDetail = () => {
    const {title} = useParams()
    const projectDesc = [];
  return (
    <div className='parent_container'>
      <h1 className='title'>Portfolio</h1>
      {title}
    </div>
  )
}

export default ProjectDetail