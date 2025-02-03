import React from 'react';
import './Contact.css';  // Importing normal CSS for styling

const Contact = () => {
  return (
    <section id='contact' className="container">
      {/* Section title */}
      <h1 className='sectionTitle'>Contact Us</h1>
      
      {/* Form submission to Formspree endpoint */}
      <form action="https://formspree.io/f/mdkkerab" method='post'>
        
        {/* Name input field */}
        <div className='formGroup'>
          {/* Label is hidden for accessibility purposes */}
          <label htmlFor="name" hidden>
            Name
          </label>
          {/* Input field for name */}
          <input type="text" 
            name='name'
            id='name'
            placeholder='Name'  // Placeholder text
            required  // Make this field required
          />
        </div>

        {/* Email input field */}
        <div className='formGroup'>
          {/* Label is hidden for accessibility purposes */}
          <label htmlFor="email" hidden>
            Email
          </label>
          {/* Input field for email */}
          <input type="email" 
            name='email'
            id='email'
            placeholder='Email'  // Placeholder text
            required  // Make this field required
          />
        </div>

        {/* Message textarea field */}
        <div className='formGroup'>
          {/* Label is hidden for accessibility purposes */}
          <label htmlFor="message" hidden>
            Message
          </label>
          {/* Textarea for message */}
          <textarea 
            name='message'
            id='message'
            placeholder='Message'  // Placeholder text
            required  // Make this field required
          ></textarea>
        </div>

        {/* Submit button */}
        <input className='btn' type="submit" value='Submit' />
      </form>
    </section>
  );
};

export default Contact;

