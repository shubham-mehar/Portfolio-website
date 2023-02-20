import './ProjectCards.css';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa';
import ProjectCards from './ProjectCards';
import ProjectCardData from './ProjectCardData';

const Works = () => {
  return (
    <div className='card-container'>
        <h1 className='project-heading'>
          <FaLaptopCode size={45} style={{color:"black",marginRight:"0.8rem"}}/>
          Projects</h1>
        <p className='project-sub-heading'>Lorem ipsum dolor sit amet consectetur.</p>
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
  );
}

export default Works;