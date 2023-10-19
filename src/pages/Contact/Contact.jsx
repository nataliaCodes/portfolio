import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sentOK, setSentOK] = useState(false);
  const [haveErr, setHaveErr] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then(
        (result) => {
          //sent without errors
          if (result.text === 'OK') {
            setSentOK(true);
            e.target.reset();
          } else { //other cases (?)
            console.log('not sent:', result.text);
            setSentOK(false);
            setHaveErr(true);
          }
        }, (error) => { //not sent with error
          console.log('error:', error.text);
          setSentOK(false);
          setHaveErr(true);
        });
  };

  return (
    <div className="page-content">
      {haveErr === false ? (
        // render when no error
        sentOK === false ?
          //initial form
          <form className='flex-column contact-container' ref={form} onSubmit={sendEmail} id='contact-form'>
            <input className='transparent-input x-large-text' type="text" placeholder='Your name' name="user_name" />
            <input className='transparent-input x-large-text' type="email" placeholder='Your email' name="user_email" />
            <textarea className='transparent-input x-large-text' rows={60} placeholder='Your message' name="message" />
            <button type="submit">SUBMIT</button>
          </form> :
          //after sending with no error
          <div className=' flex-column align-center justify-center contact-container xx-large-text'>
            <p>Your message has been sent.<br /> I will get back to you shortly!</p>
          </div>
      ) :
        //render when sending error
        <div className=' flex-column align-center justify-center contact-container xx-large-text'>
          <p>There was an error.<br /> Please try again later!</p>
        </div>
      }
    </div>
  );
}