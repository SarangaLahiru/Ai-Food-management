import React from 'react'
import './page.css'

export default function header() {
  return (
    <>
    <div className='header'>
      <h2><img src="/images/Logo.png" alt="" /></h2>
      <div className="box flex-">
        <li><a href="">Today Special Offers</a></li>
        <li><a href="">Why FoodHut</a></li>
        <li><a href="">Our Menu</a></li>
        <li><a href="">Our Popular Foods</a></li>
        <li><a href="" id="log">Login</a></li>
      </div>
      
      
    </div>
    </>
  )
}
