import React from 'react'
import {useParams} from "react-router-dom";

const ProjectDetail = () => {
    const {title} = useParams()
  return (
    <div>{title}</div>
  )
}

export default ProjectDetail