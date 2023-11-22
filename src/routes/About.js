import React from 'react'
import Footer from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import Abshub from '../components/About/Aboutme';

const About = () => {
  return (
    <div>
      <Navbar/>
        <div>
          <Abshub/>
        </div> 
      <Footer/>
    </div>
  )
}

export default About