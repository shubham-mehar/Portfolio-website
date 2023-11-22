import './ProjectCards.css';
import React from 'react'
// import img1 from '../assets/apple-touch-icons.png';

const ProjectCards = (props) => {
  return (
    <div className='project-card'>
        <img src={props.imgSrc} alt='img' />
        <h2 className='project-title'>{props.title}</h2>
        <div className='project-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
                <a href={props.view} className='btn-view'>View</a>
                <a href={props.code} className='btn-code'>Code</a>
            </div>
        </div>
    </div>
  );
}

export default ProjectCards;
