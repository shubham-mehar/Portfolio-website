import React from "react";
import "./Aboutme.css";
import {FaUserAlt, FaChevronRight, FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import img from "../../assets/img/photo30.jpg";

const Abshub = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="about-heading">
          <FaUserAlt size={35} style={{color: "black", marginRight: "1.5rem", marginBottom: "0.5rem"}} />
          About <span>Me</span>
        </h1>
        <div className="row">
          <div className="image">
            <img draggable="false" className="tilt" src={img} alt="img" />
          </div>
          <div className="content">
            <h2>I'm Shubham Mehar</h2>
            <span className="tag">
              Passionate Full Stack Developer | Machine Learning Enthusiast
            </span>
            <p>Final-year Undergraduate Student at Ujjain Engineering College.
              <br/> I am a highly motivated and dedicated web developer with a passion for creating innovative solutions. I specialize in building beautiful websites using best practices with JavaScript and React. My extensive experience and skills cover a wide range of web development technologies, including front-end frameworks such as React.js, and back-end frameworks such as Node.js and Django. Furthermore, I possess considerable proficiency in programming languages such as C, C++, Python, and JavaScript.
              <br/>
            </p>
            <div className="socials">
              <ul className="social-icons">
                <li><a className="linkedin" href="https://www.linkedin.com/in/shubham-mehar" ><FaLinkedin /></a></li>
                <li><a className="github" href="https://github.com/shubham-mehar" ><FaGithub /></a></li>
                <li><a className="mail" href="mailto:shubhammehar101@gmail.com" ><FaEnvelope /></a></li>
              </ul>
            </div>
            <div className="resumebtn">
              <a href="https://drive.google.com/file/d/1Cuqaf-GvUbbKdmurfOk72miDe9BmHxje/view?usp=sharing" className="btn">
                <span>Resume</span>
                <FaChevronRight className="btn-icon" size={20} style={{color:"#fff", marginBottom:'0.2rem'}} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Abshub;
