import React from 'react'
import './testimonial.css'
import image_1  from '../../assets/image_1.png'

const Testimonial = () => {
  return (
    <div className="testimonial container">
      <div>
      <h1 className="title_three">
        What our customers are saying
        </h1>
        <hr className="horizontal-rule-2"/>
    </div>
    <div className="testimonial_content">
   
    <div>
        <img src={image_1} alt="" srcset="" className='testimonial_background' />
    </div>
    <div className="testimonial_name">
      <p>
      <h3>Edward Newgate</h3>
      <h4>Founder, Circle</h4>
      </p>
    </div>
      <div className="testimonial_text">
        <p className="text">
        “Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely”
        </p>
      </div>
    </div>
    </div>
  )
}

export default Testimonial;
