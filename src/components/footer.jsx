import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { Link } from 'react-router-dom';


function Footer() {
  return (

    <div className='footer'>
      <div className='footer-icons'>
        <Link to="/Contact"><MdEmail className='foot-ico' /></Link>
        <Link to="/Contact"><MdLocalPhone className='foot-ico' /></Link>
      </div>
      <div>
        Router Pizza since 1957
      </div>
    </div>

  )
}

export default Footer