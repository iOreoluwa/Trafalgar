import React from 'react'
import './download.css'
import trafalgar_illustration from '../../assets/trafalgar_illustration_1.png'


const Download = () => {
  return (
      <div className="download container">
      <div className="download_content">
        <div className="download_text">
          <h1 className="title_two">
            Download our <br />mobile apps
          </h1>
          {/* <hr className="horizontal-rule"/> */}
          <p className="text">
            Our dedicated patient engagement app and <br />
            web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br /> 
            or administrative hassle) and securely
          </p>
          <div>
            <button className='button'>Learn More</button>
          </div>
        </div>
        <div className="download_background">
          <img src={trafalgar_illustration} alt="" srcset="" className='download_background' />
        </div>
      </div>

    </div>
  )
}

export default Download
