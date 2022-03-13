import React from 'react'
import './service.css'
import search from '../../assets/search.png'
import pill from '../../assets/pill.png'
import service from '../../assets/service.png'
import consultation from '../../assets/consultation.png'
import details from '../../assets/details.png'
import emergency from '../../assets/emergency.png'
import tracking from '../../assets/tracking.png'
import service_element from '../../assets/service_element.png'

const Service = () => {
  return (
    <div className="container service">
      <div className="service_content">
        <h1 className="">
          Our Services
          <hr className="horizontal-rule"/>
        </h1>
        
        <p>
          We provide to you the best choices for you. Adjust to your health needs and make sure your
          undergo treatment with our highly qualified doctors you can consult with us which type 
          of service is suitable for your health
        </p>    
      </div>
      <div className="service_card">
      <div className='service_background'>
      <img src={service} alt="" className="service_background" />
      </div>
      {/* <div className="service_element">
      <img src={service_element} alt=""/>
      </div> */}
        <div className="service_grid">
        <div className="card card1">
          <img src={search}  alt=""/> 
          <h3>Search Doctor</h3>
          <p>
            Choose your doctor from thousands of specialist, general, and trusted hospitals
          </p>
        </div>
        <div className="card card2">
          <img src={pill}  alt=""/> 
          <h3>Online Pharmacy</h3>
          <p>
          Buy  your medicines with our mobile application with a simple delivery system          
          </p>
        </div>
        <div className="card card3">
          <img src={consultation}  alt=""/> 
          <h3>Consultation</h3>
          <p>
          Free consultation with our trusted doctors and get the best recomendations          
          </p>
        </div>
        <div className="card card4">
          <img src={details}  alt=""/> 
          <h3>Details info</h3>
          <p>
          Free consultation with our trusted doctors and get the best recomendations          
          </p>
        </div>
        <div className="card card5">
          <img src={emergency}  alt=""/> 
          <h3>Emergency Care</h3>
          <p>
          You can get 24/7 urgent care for yourself or your children and your lovely family          
          </p>
        </div>
        <div className="card card6">
          <img src={tracking}  alt=""/> 
          <h3>Tracking</h3>
          <p>
          Track and save your medical history and health data           
          </p>
        </div>
        </div>
      </div>
      <div className='center_button'>
         <button className='button'>Learn More</button>
      </div>
    </div>

    
  )
}

export default Service
