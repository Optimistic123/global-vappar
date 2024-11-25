import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const timeouId = setTimeout(() => {
      setShowModal(true)
    }, 2000)

    return () => {
      clearTimeout(timeouId);
    }
  }, [])

  const handldeWebinarSingUp = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  // const handldeExploreCourse = () => {
  //   navigate("/courses");
  // };

  const testimonials = [
    {
      id: 1,
      videoSrc: '/assets/import-ex.mp4', // Replace with your video URL
      text: 'Global Vyapar helped us expand our business globally. The resources and guidance were outstanding!',
      clientName: 'John Doe',
      clientTitle: 'CEO, TradeConnect',
    },
    {
      id: 2,
      videoSrc: '/assets/import-ex.mp4', // Replace with your video URL
      text: 'With their support, starting our export business was so much easier. Highly recommended!',
      clientName: 'Jane Smith',
      clientTitle: 'Founder, ExportEase',
    },
  ];

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
              {/* <button onClick={handldeExploreCourse}>Explore courses</button> */}
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
              {/* <div className="youtube-overlay">
                <img
                  className="youtube-icon"
                  src="/assets/youtube-icon.png" // Replace with your YouTube icon path
                  alt="YouTube Icon"
                />
              </div> */}
            </div>
          </div>

        </div>
      </section>

      <section className='org-clinets'>
        <h2>Our partners and client</h2>
        <CircularLogoSlider logos={logos} />
      </section>

      <section className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-container">
          {testimonials.map(({ id, videoSrc, text, clientName, clientTitle }) => (
            <div key={id} className="testimonial-card">
              <div className="video-wrapper">
                <video
                  src={videoSrc}
                  controls
                  muted
                  className="testimonial-video"
                  preload="metadata"
                ></video>
              </div>
              <p className="testimonial-text">"{text}"</p>
              <div className="client-info">
                <h4 className="client-name">{clientName}</h4>
                <p className="client-title">{clientTitle}</p>
              </div>
            </div>
          ))}
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
