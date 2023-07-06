import React from 'react'
import "../s.css";
import giff from "../wiggle-cute.gif"
import m from "../m.gif"
import "../s.css"
const Navbar = () => {
  return (
    
      <header>
    <nav id="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li> <img src={m} className='image'/></li>
      </ul>
      <img src={giff} alt='gif' />
    </nav>
  </header>
  )
}

export default Navbar
