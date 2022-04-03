import React, { useState, useEffect } from 'react'
import Project from './Project'
import './styles/Portfolio.scss'
function Portfolio() {
  const [projects, setProjects] = useState([
    {
      img: "airbnb.PNG",
      title: "Airbnb-Clone",
      category: "Web Development",
    },
    {
      img: "amazon.PNG",
      title: "Amazon-Clone",
      category: "Web Development",
    },
    {
      img: "covid.PNG",
      title: "Covid 19 Landing Page",
      category: "Web Development",
    },
    {
      img: "cred.PNG",
      title: "CRED-Clone",
      category: "Web Development",
    },
    {
      img: "crypto.PNG",
      title: "Crypto Tracker",
      category: "Web Development",
    },
    {
      img: "css-grid.PNG",
      title: "CSS Grids",
      category: "Web Design",
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
          <button onClick={() => setActiveFilter("Web Design")} className= {`${activeFilter ==="Web Design" ? "active" : ""} tab`}>Web Design</button>
          <button onClick={() => setActiveFilter("Web Development")} className={`${activeFilter ==="Web Development" ? "active" : ""} tab`}>Web Development</button>
          <button onClick={() => setActiveFilter("Applications")} className={`${activeFilter ==="Applications" ? "active" : ""} tab`}>Applications</button>
        </div>
        <div className='projects'>
          {filtered.map((project,i) => {
            return <Project project={project} key={i}/>
          })}
        </div>
    </div>
  )
}

export default Portfolio



