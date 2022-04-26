import "./styles/ProjectDetail.scss"
import React from 'react'
import {useParams} from "react-router-dom";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink } from "react-router-dom";
import Slider from "./Slider";


const ProjectDetail = (props) => {
    const {project} = useLocation().state;
  return (
      <div className='parent_container'>
        <h1 className='title'>{project.title}</h1>
        <NavLink to="/portfolio" className="linkp"><i class="fa fa-arrow-left" aria-hidden="true"></i>Back to Portfolio</NavLink>
          <div className="project-banner">
            <img  src={`/images/${project.img}`} alt="project-banner" />
            {project.tech.map((tech) => (<button>{tech}</button> ) )} <br/> <br />
            <button> <a href={project.github} target="_blank">Github Code</a> </button>
            <button> <a href={project.live} target="_blank">Live Project Link</a> </button>
          </div>
          <p className='project-desc'>{project.desc}</p>
          <div className="slider">
            {/* <Slider/> */}
          </div>
      </div>
  )
}

export default ProjectDetail