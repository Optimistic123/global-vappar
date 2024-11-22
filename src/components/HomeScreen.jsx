import React, { useState } from 'react';
import './HomeScreen.scss';
import CircularLogoSlider from "./CircularLogoSlider";
import Modal from "./Modal"
import ContactForm from "./ContactForm"
import { useNavigate } from "react-router-dom";

const logos = [
  { src: "/assets/logo.png", alt: "Client 1" },
  { src: "/assets/logo.png", alt: "Client 2" },
  { src: "/assets/logo.png", alt: "Client 3" },
  { src: "/assets/logo.png", alt: "Client 4" },
  { src: "/assets/logo.png", alt: "Client 5" },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handldeWebinarSingUp = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const handldeExploreCourse = () => {
    navigate("/courses");
  };

  return (
    <div className="home-screen">
      <section className='org-description'>
        <div className="text-content">
          <h4>Your <span className="highlight">Import Export</span> business starts here</h4>
          <h1>
            We help domestic business go global with our streamlined import export services
          </h1>
        </div>
      </section>

      <section className='org-highlights'>
        <label>Knowledge to fule teh growth of your exim buinsess - GV - A community of 2lkh+ on YouTube</label>
        <div className='content'>
          <div className='exim-description'>
            <label>Knowledge to fule teh growth of your exim buinsess - GV - A community of 2lkh+ on YouTube</label>
            <div className='action-button'>
              <button onClick={handldeWebinarSingUp}>SignUp for Webinar</button>
              <button onClick={handldeExploreCourse}>Explore courses</button>
            </div>

          </div>
          <div className='org-youtube-higlight'>
            <a href={"https://www.youtube.com/watch?v=73fvG0b37xY"} target="_blank" rel="noopener noreferrer">
              <img src={"https://img.youtube.com/vi/73fvG0b37xY/hqdefault.jpg"} alt={"org-youtube-link"} />
            </a>
          </div>
        </div>
      </section>

      <section className='org-clinets'>
        <label>Our partners and client</label>
        <CircularLogoSlider logos={logos} />
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


      {showModal && <Modal
        modalIsOpen={showModal}
        handleClose={handleClose}
      >
        <ContactForm />
      </Modal>}
    </div>
  );
};

export default HomeScreen;
