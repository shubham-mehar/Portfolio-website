import React from 'react'
import  Footer  from "../components/Footer";
import  Navbar  from "../components/Navbar";
import Page2  from "../components/Page2";
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      {/* <Page2 heading="PROJECTS" text="Lorem ipsum dolor sit amet consectetur." /> */}
      <Work /> 
      <Footer />
    </div>
  )
}

export default Project;