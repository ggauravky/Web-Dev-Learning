import React from 'react'
import './navbar.css'

const navbar = ({logotext}) => {
  return (
    <div className='nav'>
        <div className='logo' style={{color:"purple"}}>{logotext}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default navbar