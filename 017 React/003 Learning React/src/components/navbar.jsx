import React from 'react'
import './navbar.css'

const Navbar = (props) => {
  return (
    <div className='nav'>
        <div className='logo' style={{color:"purple"}}>{props.logotext}</div>
        <ul>
            {props.items.map((items, index)=>{
              return <li key={index}>{items}</li>
            })}
        </ul>
    </div>
  )
}

export default Navbar