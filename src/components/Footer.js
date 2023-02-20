import './FooterStyles.css';
import React from 'react'
import {FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='social'>
              {/* <ul>
                <li>
                  <FaEnvelope className='social-icon' size={30} style={{color:"#ffe600",marginRight:"1.5rem"}} />
                </li>
                <li>
                  <FaGithub className='social-icon'  size={30} style={{color:"#ffe600",marginRight:"1.5rem"}} />
                </li>
                <li>
                  <FaLinkedin className='social-icon'  size={30} style={{marginRight:"1.5rem"}} /> 
                </li>
               </ul> */}
              <a href='https://www.linkedin.com/in/shubham-mehar'>
                <FaLinkedin size={30} style={{color:"#ffe600",marginRight:"1.5rem"}} />
              </a>  
              <a href='https://github.com/shubham-mehar'>
                <FaGithub size={30} style={{color:"#ffe600",marginRight:"1.5rem"}} />
              </a>
              <a href='mailto:shubhammehar101@gmail.com'>
                <FaEnvelope size={30} style={{color:"#ffe600",marginRight:"1.5rem"}} />
              </a>                                          
            </div>
            <div className='copyright-text'>Handcrafted by me &copy; 2023</div>
        </div>
    </div>
  )
}

export default Footer