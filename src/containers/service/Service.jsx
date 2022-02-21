import React from 'react'
import './service.css'
import search from '../../assets/search.png'
import pill from '../../assets/pill.png'

const Service = () => {
  return (
    <div className="container service">
      <div className="service_content">
        <h1 className="">Our Services</h1>
        <p>
          We provide to you the best choices for you. Adjust to your health needs and make sure your
          undergo treatment with our highly qualified doctors you can consult with us which type 
          of service is suitable for your health
        </p>    
      </div>
      <div className="service_card">
        <div className="card">
          <img src={search}  alt=""/> 
          <h3>Search Doctor</h3>
          <p>
            Choose your doctor from thousands of specialist, general, and trusted hospitals
          </p>
        </div>
      </div>
      <div className="service_card">
        <div className="card">
          <img src={pill}  alt=""/> 
          <h3>Online Pharmacy</h3>
          <p>
          Buy  your medicines with our mobile application with a simple delivery system          </p>
        </div>
      </div>
    </div>
    
  )
}

export default Service
