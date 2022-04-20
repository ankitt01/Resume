import React, { useState, useEffect } from 'react'
import Project from './Project'
import './styles/Portfolio.scss'
import { motion, AnimatePresence } from 'framer-motion'


function Portfolio() {
  const [projects, setProjects] = useState([
    {
      img: "airbnb.PNG",
      title: "Airbnb-Clone",
      category: "Web Development",
      desc: "This project is a UI clone of Airbnb Website. It takes location from the user along with check-in and check-out dates of journey. Then fetches data according to the input from an API. Displays location in a map using MapBox. It is fully responsive for all device widths.",
      tech: [ "ReactJs", "NextJs", "Tailwind Css"],
    },
    {
      img: "amazon.PNG",
      title: "Amazon-Clone",
      category: "Web Development",
      desc: "This project is an Amazon UI clone in which the items are fetched from an API. It also has functionality of checking out and comes with Google Authentication. It is fully responsive for all device widths.",
      tech: ["ReactJs", "Redux", "NextJs", "Firebase"],
    },
    {
      img: "css-grid.PNG",
      title: "CSS Grids",
      category: "Web Design",
      desc: "Implementation of CSS Grid",
      tech: ["CSS"]
    },
    {
      img: "covid.PNG",
      title: "Covid 19 Landing Page",
      category: "Web Development",
      desc: "This project is a static landing page built using ReactJs which displays information about Covid19. Also fetches total number of cases.",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      img: "cred.PNG",
      title: "CRED-Clone",
      category: "Web Development",
      desc: ""
    },
    {
      img: "crypto.PNG",
      title: "Crypto Tracker",
      category: "Web Development",
    },
    {
      img: "glint.PNG",
      title: "Static Landing Page",
      category: "Web Development",
    },
    {
      img: "tesla.PNG",
      title: "Tesla-Clone",
      category: "Web Development",
    },
    {
      img: "travel.PNG",
      title: "Traveling Landing Page",
      category: "Web Design",
    },
    {
      img: "weather2.PNG",
      title: "Weather App",
      category: "Web Development",
    },


])
  const [filtered, setFiltered] = useState([projects])
  const [activeFilter, setActiveFilter] = useState("All")
  
  useEffect(() => {
      if(activeFilter == "All") {
        setFiltered(projects);
        return;
      }
      const filteredProjects = projects.filter(project => project.category.includes(activeFilter))
      setFiltered(filteredProjects)
  }, [activeFilter])

  return (
    <div className='parent_container'>
        <h1 className='title'>Portfolio</h1>
        <div className='tabs'>
          <button onClick={() => setActiveFilter("All")} className={`${activeFilter ==="All" ? "active" : ""} tab`}>All</button>
          <button onClick={() => setActiveFilter("Web Development")} className={`${activeFilter ==="Web Development" ? "active" : ""} tab`}>Web Development</button>
          <button onClick={() => setActiveFilter("Web Design")} className= {`${activeFilter ==="Web Design" ? "active" : ""} tab`}>Web Design</button>
          <button onClick={() => setActiveFilter("Applications")} className={`${activeFilter ==="Applications" ? "active" : ""} tab`}>Applications</button>
        </div>
        <motion.div layout className='projects'>
          <AnimatePresence>
            {filtered.map((project,i) => {
              return <Project project={project} key={i}/>
            })}
          </AnimatePresence>
        </motion.div>
    </div>
  )
}

export default Portfolio



