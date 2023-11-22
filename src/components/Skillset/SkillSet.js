import React, { useState, useEffect } from 'react';
import skillsData from '../../assets/skills.json';
import './SkillSet.css';
import { FaLaptopCode } from 'react-icons/fa';

const SkillSet = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
      setSkills(skillsData);
    }, []);

  return (
    <>
        <section className="skills" id="skills">
            <h2 className="heading-skill">
                <h2 className='h2-heading'>
                <FaLaptopCode size={40} style={{marginBottom:'8px', marginRight:'5px'}} />Skills &amp; <span>Abilities</span>
                </h2>
            </h2>
            <div className="container">
                <div className="row" id="skillsContainer">
                {skills.map((skill) => (
                    <div key={skill.id} className="bar">
                    <div className="info">
                        <img src={skill.icon} alt="skill" />
                        <span>{skill.name}</span>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default SkillSet;