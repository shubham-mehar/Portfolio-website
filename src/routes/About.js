import React from 'react'
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Page2 from '../components/Page2';
import { FaChevronRight, FaTelegram, FaUserAlt,FaLaptopCode,FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Navbar />
        <div>
          <Page2 heading="About me" text="lorem iphlasu arth lierutg surgb laush" />
        </div> 
      <Footer />
    </div>
  )
}

export default About