import './ProjectCards.css';
import React from 'react'
import { FaLaptopCode } from 'react-icons/fa';
import ProjectCards from './ProjectCards';
import ProjectCardData from './ProjectCardData';


const Works = () => {
  return (
    <>
    <div className='card-container'>
      <h1 className='project-heading'>
        <FaLaptopCode size={45} style={{color:"black",marginRight:"0.8rem", marginBottom:'0.5rem'}}/>Projects
      </h1>
      <p className='project-sub-heading'>Projects showcase a person's abilities and potential.</p>
      <div className='project-container'>
            { ProjectCardData.map((val, ind)=>
            {
              return(
                <ProjectCards key={ind} 
                imgSrc={val.imgSrc} 
                title={val.title} 
                text={val.text}
                view={val.view} />
              )
            })}
      </div>
    </div>
    </>
  );
}

export default Works;