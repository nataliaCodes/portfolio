import { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Contact.scss';

import StyledButton from './Button';

function Contact() {
  return (
    <div className="Contact">
      <p><span>Name:</span> Natalia Martian</p>
      <p><span>Address:</span> Montreal, Canada</p>
      <div className="contact-buttons"><StyledButton>Email me</StyledButton><h4>or</h4><StyledButton>Call me</StyledButton></div>
      <><FontAwesomeIcon className="contact-icons" icon={faLinkedin} /><FontAwesomeIcon className="contact-icons" icon={faGithub} /></>
    </div>
  );
}

export default Contact;
