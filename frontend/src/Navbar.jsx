import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='homeBar'>
          HOME
        </div>
        <div className='homeBar' >
          SHOP
        </div>
        <div className='homeBar'>
          CART
        </div>

        <div className='register'>
          Register
        </div>
        <div className='logout'>
          Logout
        </div>
    </div>
  )
}

export default Navbar;