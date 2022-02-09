import React from 'react'
import './styles/Header.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Header() {
  return (
    <div className='header'>
        <nav>
            <ul>
                <li><a className='active' href="#">Resume</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
