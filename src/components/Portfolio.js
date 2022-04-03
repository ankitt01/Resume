import React, { useState} from 'react'
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
  console.log(projects)
  return (
    <div className='parent_container'>
        <h1 className='title'>Portfolio</h1>
        <div className='tabs'>
          <button className="tab">All</button>
          <button className="tab">Web Design</button>
          <button className="tab">Web Development</button>
          <button className="tab">Applications</button>
        </div>
        <div className='projects'>
          {projects.map((project,i) => {
            return <Project project={project} key={i}/>
          })}
        </div>
    </div>
  )
}

export default Portfolio



