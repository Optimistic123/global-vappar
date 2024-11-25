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
      <section className="org-description">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/import-ex.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
          <div className="org-youtube-highlight">
            <div className="video-wrapper">
              <iframe
                className="highlight-video"
                src="https://www.youtube.com/embed/AgXeukFH6bw?autoplay=0&mute=1&loop=1&playlist=AgXeukFH6bw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="youtube-overlay">
                <img
                  className="youtube-icon"
                  src="/assets/youtube-icon.png" // Replace with your YouTube icon path
                  alt="YouTube Icon"
                />
              </div>
            </div>
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
