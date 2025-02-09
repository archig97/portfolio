import './footer.css';

import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={20} style={{color : "#fff", marginRight: "2rem" }} />
                <div>
                    <p>Raleigh, NC</p>
                    <p>United States</p>
                </div>
                </div>
            <div className="phone">
            <FaPhone size={20} style={{color : "#fff", marginRight: "2rem" }} />
            <p> +1-984-379-2573 </p>
            </div>
            <div className="email">
            <FaMailBulk size={20} style={{color : "#fff", marginRight: "2rem" }} />
            <p>aghosh7@ncsu.edu / archismitaghosh@yahoo.com</p>
            </div>
                
            </div>
            <div className="right">
                <p>Masters in Computer Science</p>
                <p>North Carolina State University</p>
                <div className="socials">
                    <FaLinkedin size={20} style={{color : "#fff", marginRight: "1rem" }}/>
                    <FaGithub size={20} style={{color : "#fff", marginRight: "1rem" }}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
