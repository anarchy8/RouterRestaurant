import React from 'react'
import '../styles/index.css'
import Pizzalogo from '../assets/pizzalogo.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <img className='pizzalogo' src={Pizzalogo} />
        <h1>Router Pizza</h1>
      </div>
      <div className='nav-right'>
        <Link className='nav-link' to="/" >Home</Link>
        <Link className='nav-link' to="/Menu" >Menu</Link>
        <Link className='nav-link' to="/Contact" >Contact</Link>
      </div>
    </div>
  )
}

export default Navbar