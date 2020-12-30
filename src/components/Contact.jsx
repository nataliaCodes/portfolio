import './Contact.scss';

import StyledButton from './Button';

function Contact() {
  return (
    <div className="Contact">
      <h1>Natalia Martian</h1>
      <h2>Full-stack developer</h2>
      <p>Montreal, Canada</p>
      <div className="contact-buttons">
        <StyledButton>Email me</StyledButton>
        <h4>or</h4>
        <StyledButton>Call me</StyledButton>
      </div>
    </div>
  );
}

export default Contact;
