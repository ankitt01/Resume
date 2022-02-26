import React from 'react'
import './styles/Header.scss'
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"

function Header() {
  return (
    <div className='header'>
        <nav>
            <ul>
              <Router>
                <Link to="/">Resume</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <Routes>
                  <Route path='/' element={<Resume />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
              </Router>

            </ul>
        </nav>
    </div>
  )
}

export default Header
