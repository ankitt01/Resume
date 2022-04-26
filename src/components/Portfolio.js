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
      github: "https://github.com/ankitt01/airbnb-clone",
      live: "https://airbnb-clone-murex-xi.vercel.app/",
    },
    {
      img: "amazon.PNG",
      title: "Amazon-Clone",
      category: "Web Development",
      desc: "This project is an Amazon UI clone in which the items are fetched from an API. It also has functionality of checking out and comes with Google Authentication. It is fully responsive for all device widths.",
      tech: ["ReactJs", "Redux", "NextJs", "Firebase"],
      github: "https://github.com/ankitt01/amazon",
      live: "https://amazon-nine-lyart.vercel.app/",
    },
    {
      img: "css-grid.PNG",
      title: "CSS Grids",
      category: "Web Design",
      desc: "Implementation of CSS Grid",
      tech: ["HTML", "CSS"],
      github: "https://github.com/ankitt01/css-grid",
      live: "https://ankitt01.github.io/css-grid/",
    },
    {
      img: "covid.PNG",
      title: "Covid 19 Landing Page",
      category: "Web Development",
      desc: "This project is a static landing page built using ReactJs which displays information about Covid19. Also fetches total number of cases.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ankitt01/Covid19-LandingPage",
      live: "https://ankitt01.github.io/Covid19-LandingPage/",
    },
    {
      img: "cred.PNG",
      title: "CRED-Clone",
      category: "Web Development",
      desc: "This is a clone of CRED website's UI which is one of the best in startup world. Used technologies like intersection observor for animations. The website is responsive for all screen sizes",
      tech: ["ReactJs", "Tailwind CSS"],
      github: "https://github.com/ankitt01/CRED-clone",
      live: "https://credclone.netlify.app/",
    },
    {
      img: "crypto.PNG",
      title: "Crypto Tracker",
      category: "Web Development",
      desc: "This is a cypto dashboard which consists of all cryptocurrency's prices in tabular form along with search functoinalities. Here user can create his own profile to bookmark certain crypto coins and keep track on their values. It also has data visualisation using chartjs library for every crypto coin. This website is responsive for all screen sizes",
      tech: ["ReactJs", "Tailwind CSS", "Firebase", "ChartJs"],
      github: "https://github.com/ankitt01/Crypto-Tracker",
      live: "https://crypto-tracker-website.netlify.app/",
    },
    {
      img: "tesla.PNG",
      title: "Tesla-Clone",
      category: "Web Development",
      desc: "This is a clone of tesla's official site's UI. This was one of my very initial projects while learning react. Used reusable components for different sections of the website. This website is also responsive for all screen sizes.",
      tech: ["ReactJs", "Styled Components"],
      github: "https://github.com/ankitt01/Tesla-website",
      live: "https://ankitt01.github.io/Tesla-website/",
    },
    {
      img: "glint.PNG",
      title: "Static Landing Page",
      category: "Web Development",
      desc: "This is just a static landing page developed using HTML and Scss. This was among my very first projects in my web development career.",
      tech: ["HTML", "Scss"],
      github: "https://github.com/ankitt01/Landing-Page",
      live: "https://ankitt01.github.io/Landing-Page",                      
    },
    
    {
      img: "travel.PNG",
      title: "Traveling Landing Page",
      category: "Web Design",
      desc: "This is just a static landing page developed using HTML and CSS. This was among my very first projects in my web development career.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/ankitt01/Travel-Agency-Webpage",
      live: "https://ankitt01.github.io/Travel-Agency-Webpage/",
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



