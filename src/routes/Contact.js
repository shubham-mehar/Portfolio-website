import React from 'react'
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Page2 from '../components/Page2';
import Form from '../components/Form';
import { FaHeadset } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Page2 heading= "GET IN TOUCH" text="Lorem ipsum dolor sit amet consectetur." />
      <Form />
      <Footer />
    </div>
  )
}
export default Contact