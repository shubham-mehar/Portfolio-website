import './MainpageStyles.css';
import React from 'react';
import Img1 from "../../assets/img/dmitry-chernyshov-mP7aPSUm7aE-unsplash.jpg";
import {Link} from 'react-router-dom';

const Mainpage = () => {
  return (
    <div className='mainpage'>
        <div className='mask'>
            <img className='into-img' src={Img1} alt="MainpageImg" /> 
        </div>
        <div className='content'>
            <p>Welcome To my Portfolio website!</p>
            <h1>HI! I'M SHUBHAM MEHAR</h1>
            <Link to="/about" className='btn-primary'>About me</Link>
            <Link to="/project" className='btn-primary'>Projects</Link>
        </div>
    </div>
  )
}

export default Mainpage;