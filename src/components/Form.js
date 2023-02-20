import './FormStyles.css';
import React from 'react'
import { FaTelegram } from 'react-icons/fa';

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here' />
            <button className='btn'>Submit <FaTelegram size={30} style={{color:"#fff",marginRight:"1.5rem"}} /></button>
        </form>
    </div>
  )
}

export default Form