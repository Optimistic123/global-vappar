import React, { useState, useEffect } from 'react';
import './HomeScreen.scss';
import CircularLogoSlider from "./CircularLogoSlider";
import { useNavigate } from "react-router-dom";
import CTAButton from './CTAButton';
import StarRating from "./StarRating";
import ContactForm from './ContactForm';
import Modal from './Modal';


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

  const handldeExploreCourse = () => {
    navigate("/courses");
  };

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
          <source src="/assets/theme-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-content">
          <div className='text-tile'>
            {/* <Typewriter text={"Grow Your Export-Import Business with Global Vyapar"} /> */}
            <h4 className='t-header'>Go Global with Global Vyapar!</h4>
            <h4><span className="highlight"> Grow Your Export-Import Business with Global Vyapar.</span></h4>
            <h4>See why businesses across India trust Global Vyapar to solve their most complex export-import challenges.</h4>
          </div>
          <div className='text-main-point'>
            <ul>
              <li><h4>A trusted partner for export-import businesses.</h4></li>
              <li><h4>Expert-led learning programs tailored for entrepreneurs.</h4></li>
              <li><h4>A thriving community of over 2 lakh+ followers on YouTube.</h4></li>
              <li><h4>Regular webinars and hands-on learning experiences.</h4></li>
            </ul>
          </div>
          <CTAButton CTA={"CTA"} />
        </div>
      </section>

      <section className='org-highlights'>
        <div className='org-highlights-card'>
          <div className='header'>
            <label>Knowledge to Fuel Your EXIM Business Growth</label>
          </div>
          <div className='content'>
            <div className='exim-description'>
              <div className='exim-text'>
                <label>Global Vyapar empowers businesses with the right tools, strategies, and community to thrive in international trade. Join our growing network of successful exporters and importers.</label>
                <div className='action-button'>
                  {/* <button onClick={handldeWebinarSingUp}>SignUp for Webinar</button> */}
                  {/* <button onClick={handldeExploreCourse}>Explore courses</button> */}
                  <CTAButton CTA={"Explore courses"} onClick={handldeExploreCourse} />
                </div>
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
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <h4>Awesome tool! </h4>
            <p className="testimonial-text">
              "Global Vyapar has transformed the way I handle my import-export business. Their courses and support are top-notch!"
            </p>
            <StarRating rating={4.5} totalStars={5} />
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
            <h4>Awesome tool! </h4>
            <p className="testimonial-text">
              "The webinars and resources provided by Global Vyapar are invaluable. Highly recommended for aspiring entrepreneurs!"
            </p>
            <StarRating rating={4.5} totalStars={5} />
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
            <h4>Awesome tool! </h4>
            <p className="testimonial-text">
              "Global Vyapar's startup kit made launching my export business so much easier. Thank you!"
            </p>
            <StarRating rating={4.5} totalStars={5} />
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

      <section className='org-clinets'>
        <h2>Our partners and client</h2>
        <CircularLogoSlider logos={logos} />
      </section>

      {/* <section className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-container">
          {testimonials.map(({ id, videoSrc, text, clientName, clientTitle }) => (
            <div key={id} className="testimonial-card">
              <div className="content-wrapper">
                <p className="testimonial-text">{text}</p>
                <div className="client-info">
                  <h4 className="client-name">{clientName}</h4>
                  <p className="client-title">{clientTitle}</p>
                </div>
              </div>
              <div className="video-wrapper">
                <video
                  src={videoSrc}
                  controls
                  muted
                  className="testimonial-video"
                  preload="metadata"
                ></video>
              </div>
            </div>
          ))}
        </div>
      </section> */}

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
