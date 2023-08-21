import { useState } from "react";
import axios from 'axios';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function onNameChange(e) {
    console.log('e name:', e.target.value);
    setName(e.target.value);
  }

  function onEmailChange(e) {
    console.log('e email:', e.target.value);
    setEmail(e.target.value);
  }

  function onMessageChange(e) {
    console.log('e message:', e.target.value);
    setMessage(e.target.value);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log('submitevent :', e);

  //   
  // }

  function resetForm(){
    setName('');
    setEmail('');
    setMessage('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(' state:', name, email, message);
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  {name, email, message}
    }).then((response)=>{
      if (response.data.status === 'success') {
        console.log("Message Sent.");
        resetForm();
      } else if(response.data.status === 'fail') {
        console.log("Message failed to send.")
      }
    }).catch((e) => {
      console.log('axios e:', e);
    })
  }

  return (
    <div className="page-content">
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={name} onChange={onNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={onEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" value={message} onChange={onMessageChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}