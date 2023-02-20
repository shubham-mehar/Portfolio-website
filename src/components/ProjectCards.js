import './ProjectCards.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

const ProjectCards = (props) => {
  return (
    <div className='project-card'>
        <img src={props.imgSrc} alt="image"/>
        <h2 className='project-title'>{props.title}</h2>
        <div className='project-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
                <a href={props.view} className='btn-view'>View</a>
                {/* <a href={props.view} className='btn-code'>Code</a> */}
            </div>
        </div>
    </div>
  );
}

export default ProjectCards;


{/* <div className='card-container'>
<h1 className='project-heading'>Explore</h1>
<div className='project-container'>
    <div className='project-card'>
        <img src={img1} alt=""/>
        <h2 className='project-title'>Project Title</h2>
        <div className='project-details'>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className='pro-btns'>
                <NavLink to="https://www.google.com/" className='btn'   style={isActive => ({
                        color: isActive ? "green" : "blue"
                        })}>View</NavLink>
                <NavLink to="https://www.google.com/" className='btn'>Code</NavLink>
            </div>
        </div>
    </div>
</div>
</div> */}