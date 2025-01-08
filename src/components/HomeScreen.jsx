import React, { useState, useEffect } from 'react';
import './HomeScreen.scss';
import CircularLogoSlider from "./CircularLogoSlider";
import { useNavigate } from "react-router-dom";
import ContactForm from './ContactForm';
import Modal from './Modal';

import OrgDescription from "./HomeScreen/OrgDescription";
import OrgHighlights from "./HomeScreen/OrgHighlights";
import WhyUs from "./HomeScreen/WhyUs";
import Testimonials from "./HomeScreen/Testimonials";
import GVbenefits from "./HomeScreen/GVbenefits";
import FAQ from "./FAQ/FAQ";
import Services from "./HomeScreen/Services"

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

  return (
    <div className="home-screen">
      <OrgDescription handldeLearMore={handldeLearMore}/>
      <OrgHighlights handldeExploreCourse={handldeExploreCourse}/>
      <WhyUs handldeLearMore={handldeLearMore}/>
      <Testimonials />
      <GVbenefits handldeLearMore={handldeLearMore} />
      <Services handldeLearMore={handldeLearMore} />
      <section className='org-clinets'>
        <h2>Our partners and client</h2>
        <CircularLogoSlider logos={logos} />
      </section>

      <section className='org-faq'>
        <FAQ handldeLearMore={handldeLearMore} />
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
