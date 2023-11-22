import React from "react";
import Navbar from '../components/Navbar/Navbar';
import Mainpage from '../components/Mainpage/Mainpage'
import Footer from "../components/Footer/Footer";
import Aboutme from '../components/About/Aboutme';
import SkillSet from "../components/Skillset/SkillSet";
import Form from "../components/Contact/Form";
import Work from "../components/Project/Work";

const Home = ()=>
{
    return(
        <div>
            <Navbar />
            <Mainpage />
            <Aboutme />
            <Work/>
            <SkillSet />
            <Form/>
            <Footer />
        </div>
    )
}

export default Home;