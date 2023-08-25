import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then(
        (result) => {
          console.log('sent:', result.text);
          e.target.reset();
        }, (error) => {
          console.log('error:', error.text);
        });
  };

  return (
    <div className="page-content">
      <form className='flex-column form-container' ref={form} onSubmit={sendEmail}>
        {/* <label>Name</label> */}
        <input className='transparent-input' type="text" placeholder='Your name' name="user_name" />
        {/* <label>Email</label> */}
        <input className='transparent-input' type="email" placeholder='Your email' name="user_email" />
        {/* <label>Message</label> */}
        <textarea className='transparent-input' rows={60} placeholder='Your message' name="message"/>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}