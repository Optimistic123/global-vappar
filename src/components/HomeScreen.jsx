import React, { useState, useEffect } from 'react';
import './HomeScreen.scss';
import CircularLogoSlider from "./CircularLogoSlider";
import { useNavigate } from "react-router-dom";
import CTAButton from './CTAButton';
import StarRating from "./StarRating";
import ContactForm from './ContactForm';
import Modal from './Modal';
// import { FaQuoteLeft } from 'react-icons/fa';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { TbGlobeFilled } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { BsBagCheck } from "react-icons/bs";

const logos = [
  { src: "/assets/logo.png", alt: "Client 1" },
  { src: "/assets/logo.png", alt: "Client 2" },
  { src: "/assets/logo.png", alt: "Client 3" },
  { src: "/assets/logo.png", alt: "Client 4" },
  { src: "/assets/logo.png", alt: "Client 5" },
];

const whyUsCards = [
  {
    id: '#one',
    title: 'End-to-End Services',
    description: 'Expert support in market research, logistics, and regulatory compliance.',
  },
  {
    id: '#two',
    title: 'Expert Programs',
    description: 'Learn import export strategies through webinars, workshops, and hands-on courses.',
  },
  {
    id: '#three',
    title: 'Global Network',
    description: 'Connect with 2+ lakh like- minded import-export professionals.',
  },
];

const benefits = [
  {
    id: '#one',
    title: 'Worldwide business reach',
    description: 'Become a successful global brand real fast. Grow your customer base with our widespread courier network spanning 220 countries & territories.',
  },
  {
    id: '#two',
    title: 'Shipment security cover',
    description: 'Safeguard your shipments against in-transit risks. Claim upto INR 5000* in an unlikely event of damage or loss on the way.',
  },
  {
    id: '#three',
    title: 'Dedicated account manager',
    description: 'Leave your worries and concerns to our experienced cross-border experts. Get prioritised support & quick resolution.',
  },
  {
    id: '#four',
    title: 'Hassle-free customs clearance',
    description: 'With transparent billing & tax compliance, we ensure you always export your shipments effortlessly. Zero paperwork hassles.',
  },
  {
    id: '#five',
    title: 'Speedy international delivery',
    description: 'Your orders are processed through automated workflows, helping you deliver your international orders more efficiently.',
  },
  {
    id: '#six',
    title: 'Real-time updates',
    description: 'Get closer to your customers wherever they are. Keep them informed and assured at every step through Email & WhatsApp.',
  },
];

const services = [
  {
    id: '#one',
    icon: <FcBusinessman color="#f89726" size="3em" />,
    title: 'Importer on record',
    description: 'Import made easy! We handle compliance, documentation, and responsibilities as your registered importer, ensuring a seamless experience.',
  },
  {
    id: '#two',
    icon: <TbGlobeFilled color="#f89726" size="3em" />,
    title: 'Freight Forwarding',
    description: 'Ship globally, stress-free! We manage logistics, customs, and delivery to ensure your goods arrive safely and on time.',
  },
  {
    id: '#three',
    icon: <MdManageAccounts color="#f89726" size="3em" />,
    title: 'Customs Clearance',
    description: 'Clear customs with confidence! Our expert support ensures efficient, timely, and fully compliant shipments, making trade smooth and hassle-free.',
  },
  {
    id: '#four',
    icon: <RiContactsBookLine color="#f89726" size="3em" />,
    title: 'Export-Import business courses',
    description: 'Learn from the best! Gain actionable skills, expert-led insights, and build connections with peers and professionals to drive your business growth.',
  },
  {
    id: '#five',
    icon: <BsBagCheck color="#f89726" size="3em" />,
    title: 'Export-Import start-up kit',
    description: 'Kickstart your trade journey! Our complete starter package offers tailored courses, step-by-step guidance, and all-in-one solutions to equip new exporters and importers with the tools, knowledge, and support needed to succeed.',
  }
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeouId = setTimeout(() => {
      setShowModal(true)
    }, 3000)

    return () => {
      clearTimeout(timeouId);
    }
  }, [])

  const handldeLearMore = () => {
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
          <source src="/assets/Cover-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-content">
          <div className='text-tile'>
            {/* <Typewriter text={"Grow Your Export-Import Business with Global Vyapar"} /> */}
            <h4 className='t-header'>Your Export-Import business starts here</h4>
            <h4><span>We help domestic business go global with our streamlined import export services</span></h4>
          </div>
          <CTAButton CTA={"Get In Touch"} backgroundColor={"#f89726"} IconBackgroundColor={"white"} IconColor={"#f89726"} />
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
                <label>Global Vyapar empowers businesses with the knowledge, strategies, and community to thrive in international trade.</label>
                <div className='knowledge-points'>
                  <ul>
                    <li>Trusted partner for export-import businesses</li>
                    <li>Expert-led learning programs</li>
                    <li>2 lakh+ community on YouTube</li>
                    <li>Webinars and hands-on learning</li>
                  </ul>
                </div>

                <p>Join our growing network of successful exporters and importers.</p>
                <div className='action-button'>
                  <CTAButton CTA={"Explore courses"} onClick={handldeExploreCourse} backgroundColor={"#f89726"} IconBackgroundColor={"white"} IconColor={"#f89726"} />
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

      <section className="why-us-section">
        <h2>Why Choose Global Vyapar?</h2>
        <div className="card-container">
          {whyUsCards.map((card, index) => (
            <div key={index} className="card">
              <span className="card-id">{card.id}</span>
              <div className='card-info'>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <CTAButton CTA={"Learn more"} onClick={handldeLearMore} backgroundColor={"#f89726"} IconBackgroundColor={"white"} IconColor={"#f89726"} />
      </section>

      <section className="testimonials-section">
        <h2>Hear it from our clients!</h2>
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

      <section className="global-vypar-benefits">
        <h2>Benefits of using global Vyapar!</h2>
        <div className="card-container">
          {benefits.map((card, index) => (
            <div key={index} className="card">
              <span className="card-id"><BiSolidQuoteAltLeft color="#f89726" size="3em" /></span>
              <div className='card-info'>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <CTAButton CTA={"Learn more"} onClick={handldeLearMore} backgroundColor={"#f89726"} IconBackgroundColor={"white"} IconColor={"#f89726"} />
      </section>

      <section className="home-our-services">
        <h2>OUR SERVICES</h2>
        <div className="card-container">
          {services.map((card, index) => (
            <div key={index} className="card">
              {/* <span className="card-id">{card.icon}</span> */}
              <div className='card-info'>
                <h3>
                  <span>{card.icon}</span>
                  <span>{card.title}</span>
                </h3>

                <p>{card.description}</p>
              </div>
            </div>
          ))}
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

      {/* {showModal && <Modal
        modalIsOpen={showModal}
        handleClose={handleClose}
      >
        <ContactForm />
      </Modal>} */}
    </div>
  );
};

export default HomeScreen;
