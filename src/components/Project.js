import React from 'react'
import './styles/Portfolio.scss'
import { motion } from 'framer-motion'

const Project = ({project}) => {
  return (
    <motion.div layout animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} className='project'>
      <div className='img-container'>
        <img  src={`/images/${project.img}`} alt="" />
      </div>
      <p className='project-title'>{project.title}</p>
      <p className='project-category'>{project.category}</p>
    </motion.div>
  )
}

export default Project