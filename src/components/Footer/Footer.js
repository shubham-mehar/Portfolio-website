import './FooterStyles.css';
import React from 'react'
import {FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='social'>
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
        <div className='copyright-text'>
          Created with 	<span class="heart animate-beat">&#x1F49B;</span>  by Shubham &copy; 2023
        </div>
      </div>
    </div>
  )
}

export default Footer;