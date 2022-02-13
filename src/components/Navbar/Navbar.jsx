import React from 'react'
import './navbar.css'
import Logo from "../../assets/Logo.png"

const Navbar = () => {
  return (
    <div>
        <div className="nav_logo">
          <img src={Logo} alt="" srcset="" />  
        </div>
        <div className="nav_items">
					<ul>
						<li>Home</li>
						<li>Find a doctor</li>
						<li>Apps</li>
						<li>Testimonials</li>
						<li>About us</li>
					</ul>
        </div>
    </div>
  )
}

export default Navbar;
