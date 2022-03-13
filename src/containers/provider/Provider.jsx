import React from 'react'
import './provider.css'
import trafalgar from '../../assets/trafalgar.png'

const Provider = () => {
  return (
    <div className="provider container">
      <div className="provider_content">
        <div className="provider_background">
          <img src={trafalgar} alt="" srcset="" className='provider_background' />
        </div>
        <div className="provider_text">
          <h1 className="title_two">
            Leading healthcare <br />providers
          </h1>
          {/* <hr className="horizontal-rule"/> */}
          <p className="text">
            Trafalgar provides progressive, and affordable <br /> healthcare, accessible on mobile and online for <br /> everyone. To us, it’s not just work. We take pride <br />
            in the solutions we deliver
          </p>
          <div>
            <button className='button'>Learn More</button>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Provider
