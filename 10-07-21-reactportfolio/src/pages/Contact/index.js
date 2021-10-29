import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers'

function ContactForm() {
  const [formState, setFormState] = useState({name:'', email:'', message:''});
  const {name, email, message} = formState;
  const [errorMessage, setErrorMessage]=useState('');

  function handleChange(e) {
    if(e.target.name ==='email') {
      const isValid = validateEmail(e.target.value);
      if(!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage('')
      }
    } else {
      if(!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`)
      } else {
        setErrorMessage('')
      }
    }
    if(!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value})
    }
    console.log('errorMessage', errorMessage)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <section>
      <h1 className="sectionTitle">
        Contact Me
      </h1>
      <div className='formContainer'>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" defaultValue={name} name='name' onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <br />
            <input type="text" defaultValue={email} name='email' onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea defaultValue={message} name='message' onBlur={handleChange} rows="5"/>
          </div>
          {errorMessage && (
            <div>
              <p className="errorText">{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="contactSubmit">Submit</button>
        </form>
      </div>
    </section>
  )
}  
export default ContactForm;
