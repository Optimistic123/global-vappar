// ServicesPage.js
import React, { useRef } from 'react';
import ContactForm from './ContactForm'; // Lead Form component
import './ServicesPage.scss';

const ServicesPage = () => {
  const contactFormRef = useRef(null);

  const scrollToElement = () => {
    contactFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="services-page">
      <section className="intro-lead-container">
        <div className="intro-section">
            <h2>We Accelerate your export import business with our experience</h2>
            <p>A small brief of how GV accelerates the growth with its services</p>
            <ul>
              <li>Highkights 1</li>
              <li>Highkights 1</li>
              <li>Highkights 1</li>
              <li>Highkights 1</li>
              <li>Highkights 1</li>
              <li>Highkights 1</li>
            </ul>
        </div>
        <div ref={contactFormRef} className="lead-form">
          <ContactForm />
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">List of services need to be finalized...</div>
          <div className="service-card">Service 3 and its brief...</div>
          <div className="service-card">Service 3 and its brief...</div>
        </div>
      </section>

      <div className="cta">
        <button onClick={scrollToElement}>Get a Quote</button>
      </div>
    </div>
  );
};

export default ServicesPage;
