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
            <section className='description'>
              <h2 className='header'>We Accelerate your export import business with our experience</h2>
              <p className='content'>A small brief of how GV accelerates the growth with its services A small brief of how GV accelerates the growth with its services A small brief of how GV accelerates the growth with its services A small brief of how GV accelerates the growth with its services</p>
            </section>
            <section className='highlights'>
              <h2>Key highlights</h2>
              <ul>
                <li>Export-Import business courses</li>
                <li>Export-Import start-up kit (Documents)</li>
                <li>Freight Forwarding</li>
                <li>Customs Clearance</li>
                <li>Sourcing</li>
              </ul>
            </section>
        </div>
        <div ref={contactFormRef} className="lead-form">
          <ContactForm />
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <label>Export-Import business courses</label>
            <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
          </div>
          <div className="service-card">
            <label>Export-Import start-up kit (Documents)</label>
            <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
          </div>
          <div className="service-card">
            <label>Freight Forwarding</label>
            <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
          </div>
          <div className="service-card">
            <label>Customs Clearance</label>
            <p>Description Description Description Description Description Description Description</p>
          </div>
          <div className="service-card">
            <label>Sourcing</label>
            <p>Description Descriptioniption Description</p>
          </div>
        </div>
      </section>

      <div className="cta">
        <button onClick={scrollToElement}>Get a Quote</button>
      </div>
    </div>
  );
};

export default ServicesPage;
