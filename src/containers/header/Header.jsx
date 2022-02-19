import React from 'react'
import './header.css'
// import trafalgar from '../../assets/trafalgar.png'
import illustration from '../../assets/illustration.png'

const Header = () => {
  return (
    <div className="header container">
      <div className="header_content">
        <div className="header_text">
          <h1 className="title">
            Virtual healthcare<br />for you
          </h1>
          {/* <hr className="horizontal-rule"/> */}
          <p className="text">
            Trafalgar provides progressive, and affordable healthcare, accessible
            on mobile and online for everyone  
          </p>
          <button className="button_one">Consult today</button>
        </div>      
      </div>
      <div className="header_image">
          <img src={illustration} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Header
