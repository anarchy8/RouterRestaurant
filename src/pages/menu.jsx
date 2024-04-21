import React from 'react'
import { Foodlist } from '../data.js'

function Menu() {
  return (
    <div className='menu-page'>
      <div className='menu-title-div'>
        <h1 className='menu-title'>OUR MENU</h1>
      </div>
      <div className='menu-wrapper'>
        {
          Foodlist.map(item => (
            <div key={item.id} className='card'>
              <img className='card-img' src={item.image} alt={item.name} />
              <h1 className='card-title'>{item.name}</h1>
              <div className='card-price-div'>
                <h1 className='card-price'>Price {item.price} $</h1>
              </div>
            </div>
          )
          )
        }
      </div>
    </div>
  )
}

export default Menu