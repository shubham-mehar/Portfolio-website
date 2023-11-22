import './FormStyles.css';
import React from 'react'
import { FaTelegram } from 'react-icons/fa';

const Form = () => {
  return (
    <>
    <div className='contact'>
      <div class="container" >
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Contact</h2>
        {/* <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div class="row align-items-stretch mb-5">
          <div class="col-md-6">
            <div class="form-group">
              <input class="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
              <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
            <div class="form-group">
              <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
              <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
              <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
            </div>
          </div>
          <div class="text-area">
            <div class="form-group form-group-textarea mb-md-0">
              <textarea class="form-control" rows="4" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
              <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
            </div>
          </div>
        </div>    
        <div class="d-none" id="submitSuccessMessage">
          <div class="text-center text-white mb-3">
            <div class="fw-bolder">Form submission successful!</div>
              <br />
            </div>
          </div>
        <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
        <div class="text-center submit-button">
          <button class="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">
          Send Message<FaTelegram size={30} style={{color:"#fff",marginLeft:"0.5rem"}} />
          </button>
        </div>
      </form>
      </div>
    </div>
    </div>
  </>
  )
}

export default Form;