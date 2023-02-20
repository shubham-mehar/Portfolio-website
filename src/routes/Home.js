import React from "react";
import Navbar from '../components/Navbar';
import Mainpage from '../components/Mainpage'
import Footer from "../components/Footer";
import About from "./About";
import Work from '../components/Work';

const Home = ()=>
{
    return(
        <div>
            <Navbar />
            <Mainpage />
            <Work />
            <Footer />
        </div>
    )
}

export default Home;