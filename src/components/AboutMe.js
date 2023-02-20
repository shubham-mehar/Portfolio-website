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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#36D7B7" fill-opacity="1" d="M0,96L60,112C120,128,240,160,360,170.7C480,181,600,171,720,170.7C840,171,960,181,1080,181.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>

        </div>
    </div>
  )
}

export default AboutMe;