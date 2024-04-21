import React from 'react'
import PizzaBg from '../assets/pizzabg.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-page'>
      <h1 className=''>Router Pizza</h1>
      <h3>Delicious RouterDom Pizza's</h3>
      <h3>With spicy flavor</h3>
      <Link to="/Menu"><button className='order-btn'>Order Now</button></Link>
    </div>
  )
}

export default Home