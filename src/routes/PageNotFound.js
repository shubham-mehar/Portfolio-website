import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../components/404/404.css';
import { FaArrowLeft } from 'react-icons/fa';

const PageNotFound = () => {
      
  return (
    <>
    <Navbar/>
    <section class="page_404">
      <div class="container">
        <div class="wrapper">
          <h1>404</h1>            
        </div>
        <div class="msg">
          <h3>Look like you're lost</h3>
          <p>The page you are looking for not avaible!</p>
          <div class="backbtn">
            <Link to="/" class="btn">
              <FaArrowLeft className='btn-icon' size={25} style={{ color: "#fff", marginRight: "8px", marginBottom:"3px" }} />
              <span>Back to Home</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
    {/* <div className='error-container'>
        <h1 className="notFoundTitle">
            Oops! That page can’t be found.
        </h1>
        <p className="notFoundDesc">
            It looks like nothing was found at this location. Maybe try one of the links in the menu or press back to go to the previous page.
        </p>
        <button className='error-btn'>
        Go to Home page
        </button>
    </div> */}
    <Footer/>
    </>
  )
}

export default PageNotFound;