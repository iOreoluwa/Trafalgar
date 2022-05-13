import React from "react";
import "./footer.css";
import logo_white from "../../assets/logo_white.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="nav_logo">
        <img src={logo_white} alt="" srcset="" />
      </div>
      <div className="footer_content">
        <div className="footer_name">
          <p className="text-two">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone.
            <br /> <br />
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
          </div>
          <div  className="list">
          <ul>
              <li><b>Company</b></li><br />
              <li>About</li>
              <li>Testimonials</li>
              <li>Find a doctor</li>
              <li>Apps</li>
            </ul>
          </div>
          <div  className="list">
          <ul>
              <li><b>Region</b></li><br />
              <li> Indonesia</li>
              <li>Singapore</li>
              <li>Hongkong</li>
              <li>Canada</li>
            </ul>
          </div>
          <div  className="list">
          <ul>
              <li><b>Help</b></li><br />
              <li>Help center</li>
              <li>Contact support</li>
              <li>Instructions</li>
              <li>How it works</li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Footer;
