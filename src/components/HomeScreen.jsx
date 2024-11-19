import React, { useState } from 'react';
import './HomeScreen.scss';
import CircularLogoSlider from "./CircularLogoSlider";
import Modal from "./Modal"
import ContactForm from "./ContactForm"
import { useNavigate } from "react-router-dom";

const logos = [
  { src: "/assets/logo1.png", alt: "Client 1" },
  { src: "/assets/logo2.png", alt: "Client 2" },
  { src: "/assets/logo3.png", alt: "Client 3" },
  { src: "/assets/logo4.png", alt: "Client 4" },
  { src: "/assets/logo5.png", alt: "Client 5" },
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
          <h4>Global Vvpyar</h4>
          <h1>
            All about <span className="highlight">Import Export</span>
          </h1>
          <p>
            Learn about <strong>Import, Export Consulting</strong> and develop business.
          </p>
        </div>
        <div className="image-content">
          <img src="/assets/import-export.webp" alt="Illustration" />
        </div>
      </section>

      <section className='org-highlights'>
        <label>Knowledge to fule teh growth of your exim buinsess - GV - A community of 2lkh+ on YouTube</label>
        <div className='content'>
          <div className='exim-description'>
            <label>Knowledge to fule teh growth of your exim buinsess - GV - A community of 2lkh+ on YouTube</label>
            <button onClick={handldeWebinarSingUp}>SignUp for Webinar</button>
            <button onClick={handldeExploreCourse}>Explore courses</button>
          </div>
          <div className='org-youtube-higlight'>
            <a href={"https://www.youtube.com/@GlobalVyapar"} target="_blank" rel="noopener noreferrer">
              <img src={"/assets/logo.png"} alt={"org-youtube-link"} />
            </a>
          </div>
        </div>

      </section>

      <section className='org-clinets'>
        <label>Our partners and client</label>
        <CircularLogoSlider logos={logos} />
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
