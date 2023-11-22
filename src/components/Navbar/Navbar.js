import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
    const [color,setColor] = useState(false);
    const changeColor = ()=>
        {
            if(window.scrollY >= 1) 
            {
                setColor(true);
            }
            else 
            {
                setColor(false);
            }
        };
    window.addEventListener("scroll",changeColor);
    return (
        <div className={ color ? "header header-bg" : "header"}>
        {/* <div className="header-bg"> */}
            <Link className='navbar-brand' to="/"><h1 className='navbar-header'>Shubham Mehar</h1></Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><a href='https://drive.google.com/file/d/1Cuqaf-GvUbbKdmurfOk72miDe9BmHxje/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><Link to="/skill">Skill</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? <FaTimes size={20} style={{color:"#ffe600"}} />:
                    <FaBars size={20} style={{color:"#ffe600"}} /> }
            </div>
        </div>
    )
}

export default Navbar;