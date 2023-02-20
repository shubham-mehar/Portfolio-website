import React from 'react'
import './AboutMeStyles.css';
import { NavLink } from 'react-router-dom';
import {FaUserAlt,FaChevronRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div>
        <div className='about-container'>
            <h1>
                <FaUserAlt size={30} style={{color:"#fff",marginRight:"1.5rem"}} /> About me
            </h1>
            <p>
                Hello! My name is Shubham Mehar and I'm passionate   Machine Learning Enthusiast, Data Scientist and Web Developer. I'm currently a third year student at Ujjain Engineering College pursuing Bachelor of Technology with a major in Electronics and Communication.
            </p>
            <div className="socials">
                <ul className="social-icons">
                    <li>
                        <NavLink className="linkedin" to="https://www.linkedin.com/in/shubham-mehar" target="_blank">
                            <FaLinkedin  />              
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="github" href="https://github.com/shubham-mehar" target="_blank">
                            <FaGithub  />   
                            {/* <FaGithub  style={{color:"#ffe600",marginRight:"1.5rem"}} />   */}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="mail" href="mailto:shubhammehar101@gmail.com" target="_blank">
                            <FaEnvelope />                
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="resumebtn">
            <a href="https://drive.google.com/file/d/1tlUWmlebj-18thsJfQrg8F750H9d1JjT/view?usp=sharing" className="btn">
                <span>Resume</span>
                <FaChevronRight size={15} style={{color:"#fff",marginRight:"0rem"}} />
            </a>
        </div>
        </div>
    </div>
  )
}

export default AboutMe;