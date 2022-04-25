import './styles/Portfolio.scss'
import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom";

const Project = ({project}) => {
  
  return (
    <motion.div layout animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}}>
      <NavLink className="" exact to={{
        pathname: `/${project.title}`,
        state: {project: project}
      }}  activeClassName="active"> 
        <div className='img-container'>
          <img  src={`/images/${project.img}`} alt="" />
        </div>
        <p className='project-title'>{project.title}</p>
        <p className='project-category'>{project.category}</p>
      </NavLink>
    </motion.div>
  )
}

export default Project