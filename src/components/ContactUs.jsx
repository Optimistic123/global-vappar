import React from 'react'
import ContactForm from "./ContactForm"
import './ContactUs.scss'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className='contact-container'>
      <section className='contact-helper'>
        <h2>At Global Vyapar</h2>
        <h3>We Offer</h3>
        <ul>
          <li>
            <strong>Export-Import Training:</strong> Learn the A-Z of international trade.
          </li>
          <li>
            <strong>Business Consulting:</strong> Tailored strategies to scale your global operations.
          </li>
          <li>
            <strong>Market Insights:</strong> Stay ahead with the latest trends and analytics.
          </li>
          <li>
            <strong>Compliance Support:</strong> Navigate regulations with ease.
          </li>
        </ul>

        <div className="contact-info">
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <span>+123-456-7890</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>hello@reallygreatsite.com</span>
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  )
}

export default ContactUs