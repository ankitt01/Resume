import './styles/Portfolio.scss'
import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom";

const Project = ({project}) => {
  
  return (
    <motion.div layout animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}}>
      <NavLink className="link" exact to={{
        pathname: `/${project.title}`,
        state: {project: project}
      }}  activeClassName="active"> 
      <div className='project-tab'>
        <div className=''>
          <img  src={`/images/${project.img}`} alt="" />
        </div>
        <p className='project-title'>{project.title}</p>
        <p className='project-category'>{project.category}</p>
      </div>
      </NavLink>
    </motion.div>
  )
}

export default Project