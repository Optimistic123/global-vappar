// ServicesPage.js
import React, { useRef } from 'react';
import ContactForm from './ContactForm'; // Lead Form component
import './ServicesPage.scss';

const ServicesPage = () => {
  const contactFormRef = useRef(null);

  const scrollToElement = () => {
    contactFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const videos = [
    {
      title: "Export-Import Business Courses",
      description:
        "Learn everything you need to start and grow your export-import business with our comprehensive courses.",
      videoSrc: "https://www.youtube.com/embed/AgXeukFH6bw?autoplay=0&mute=1&loop=1&playlist=AgXeukFH6bw",
    },
    {
      title: "Export-Import Start-Up Kit (Documents)",
      description:
        "Get all the essential documents and templates to kickstart your export-import journey.",
      videoSrc: "https://www.youtube.com/embed/AgXeukFH6bw?autoplay=0&mute=1&loop=1&playlist=AgXeukFH6bw",
    },
    {
      title: "Freight Forwarding",
      description:
        "Streamline your shipping process with our reliable freight forwarding solutions.",
      videoSrc: "https://www.youtube.com/embed/AgXeukFH6bw?autoplay=0&mute=1&loop=1&playlist=AgXeukFH6bw",
    },
    {
      title: "Customs Clearance",
      description:
        "Hassle-free customs clearance services to ensure smooth international trade operations.",
      videoSrc: "https://www.youtube.com/embed/AgXeukFH6bw?autoplay=0&mute=1&loop=1&playlist=AgXeukFH6bw",
    },
    {
      title: "Sourcing",
      description:
        "Find the right products and suppliers with our trusted sourcing services.",
      videoSrc: "https://www.youtube.com/embed/AgXeukFH6bw?autoplay=0&mute=1&loop=1&playlist=AgXeukFH6bw",
    },
  ];

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

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Global Vyapar has transformed the way I handle my import-export business. Their courses and support are top-notch!"
            </p>
            <div className="client-info">
              <img
                src="/assets/client1.jpg"
                alt="Client 1"
                className="client-photo"
              />
              <div>
                <h4 className="client-name">John Doe</h4>
                <p className="client-title">CEO, TradeConnect</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The webinars and resources provided by Global Vyapar are invaluable. Highly recommended for aspiring entrepreneurs!"
            </p>
            <div className="client-info">
              <img
                src="/assets/client2.jpg"
                alt="Client 2"
                className="client-photo"
              />
              <div>
                <h4 className="client-name">Jane Smith</h4>
                <p className="client-title">Founder, ExportEase</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Global Vyapar's startup kit made launching my export business so much easier. Thank you!"
            </p>
            <div className="client-info">
              <img
                src="/assets/client3.jpg"
                alt="Client 3"
                className="client-photo"
              />
              <div>
                <h4 className="client-name">Rajesh Kumar</h4>
                <p className="client-title">Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          {videos.map((service, index) => (
            <div className="service-card" key={index}>
              <div className='content-wrapper'>
                <label className="service-title">{service.title}</label>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-video-wrapper">
                <iframe
                  className="service-video"
                  src={service.videoSrc}
                  title={service.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>


      <div className="cta">
        <button onClick={scrollToElement}>Get a Quote</button>
      </div>
    </div>
  );
};

export default ServicesPage;
