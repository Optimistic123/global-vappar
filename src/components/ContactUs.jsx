import React from 'react'
import ContactForm from "./ContactForm"
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contact-container'>
        <section className='contact-helper'>
            <h1>How can I help?</h1>
            <p>Do you have any specific challenge or are you interested to work with my team?</p>
        </section>
        <ContactForm />
    </div>
  )
}

export default ContactUs