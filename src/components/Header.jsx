import React, {useState} from 'react'
import './styles/Header.scss'
import { NavLink } from "react-router-dom";

function Header() {
  
  return (
    <div className='header'>
      <nav>
        <ul>
        <NavLink className="link" to="/" exact activeClassName="active" >Resume</NavLink>
        <NavLink className="link" to="/portfolio"activeClassName="active" >Portfolio</NavLink>          
          <NavLink className="link" to="/contact" activeClassName="active">Contact</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header
