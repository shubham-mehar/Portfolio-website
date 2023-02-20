import './MainpageStyles.css';
import React from 'react';
// import MainpageImg from "../assets/img/dmitry-chernyshov-mP7aPSUm7aE-unsplash.jpg";.
// import img1 from '../assets/img/portfolio/1.jpg';
// import img1 from "../assets/img/dmitry-chernyshov-mP7aPSUm7aE-unsplash.jpg";
// import Img1 from "../assets/img/header-bg.jpg";
// import Img1 from "../assets/img/luca-bravo-9l_326FISzk-unsplash(2).jpg";
import Img1 from "../assets/img/dmitry-chernyshov-mP7aPSUm7aE-unsplash.jpg";
// import Img1 from "../assets/img/nikolay-tarashchenko-DUfkXRwffffffffffGQm8-unsplash.jpg";
// import Img1 from "../assets/img/laptop-3174729_1920.jpg";
// import Img1 from "../assets/img/michal-kubalczyk-WecngmAT-KY-unsplash.jpg"
// import img1 from "../assets/img/intro-bg.jpg"
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
            <Link to="/project" className='btn-primary'>Project</Link>
        </div>
    </div>
  )
}

export default Mainpage;