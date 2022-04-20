import {useState, useEffect} from 'react'
import './styles/Portfolio.scss'
import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom";

const Project = ({project}) => {
  const [showDetail, setShowDetail] = useState(false)

  useEffect(() => {
    console.log(showDetail)
    console.log(project.title)
  }, [showDetail])
  
  return (
    <motion.div layout animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}}>
      <div className="navlink" activeClassName="active">
        <div className='project'>
          <div className='img-container'>
            <img onClick={() => setShowDetail(true)} src={`/images/${project.img}`} alt="" />
          </div>
          <p className='project-title'>{project.title}</p>
          <p className='project-category'>{project.category}</p>


          { showDetail && 
            <div className='project-description '>
              <div>
                <img onClick src={`/images/${project.img}`} alt="" />
                <button>Github</button>
                <button>Project</button>
              </div>
              <div className='desc'>
                <h1>{project.title}</h1>
                <p>{project.desc}</p>
                {project.tech.map((tech) => (<button>{tech}</button>))}
              </div>
            </div>
          }
        </div>
      </div>
    </motion.div>
  )
}

export default Project