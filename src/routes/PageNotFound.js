import React, { useState } from 'react'
import {Navigate} from 'react-router-dom';

const PageNotFound = () => {
    const [click,setClick] = useState(true);
    const handleClick = ()=>setClick(!click);


  return (
    <div className='error-container'>
        {/* <img  /> */}
        <h1 className="notFoundTitle">
            Oops! That page can’t be found.
        </h1>
        <p className="notFoundDesc">
            It looks like nothing was found at this location. Maybe try one of the links in the menu or press back to go to the previous page.
        </p>
        <button className='error-btn' onClick={handleClick}>
            {/* if(click==false) {<Navigate to="/" /> } */}
            Go to Homepage
        </button>
    </div>
  )
}

export default PageNotFound;