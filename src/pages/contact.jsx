import React from 'react'

function Contact() {
  return (
    <div className='contact-div'>
      <div className='contact-box'>
        <div className='input-div'>
          <label htmlFor="">Name</label>
          <input className='input' type="text" placeholder='name' />
        </div>
        <div className='input-div'>
          <label htmlFor="">Surname</label>
          <input className='input' type="text" placeholder='surname' />
        </div>
        <div className='input-div'>
          <label htmlFor="">Email</label>
          <input className='input' type="text" placeholder='@email' />
        </div>
        <div className='input-div'>
          <label htmlFor="">Message</label>
          <textarea className='textarea' name="" id="" cols="30" rows="12" placeholder='message'></textarea>
        </div>
        <button className='submit-btn'>submit</button>
      </div>
    </div>
  )
}

export default Contact