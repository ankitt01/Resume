import React from 'react'
import './styles/Header.scss'
import { BrowserRouter, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
        <nav>
            <ul>
                <Link to="/">Resume</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Header
