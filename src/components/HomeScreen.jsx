import React, { useState, useEffect } from 'react';
import './HomeScreen.scss';
import CircularLogoSlider from "./CircularLogoSlider";
import { useNavigate } from "react-router-dom";
import ContactForm from './ContactForm';
import Modal from './Modal';

import Slider2 from './Slider/Slider2'
import OrgDescription from "./HomeScreen/OrgDescription";
import OrgHighlights from "./HomeScreen/OrgHighlights";
import WhyUs from "./HomeScreen/WhyUs";
import Testimonials from "./HomeScreen/Testimonials";
import GVbenefits from "./HomeScreen/GVbenefits";
import FAQ from "./FAQ/FAQ";
import { FaBook, FaSuitcase } from "react-icons/fa";

const logos = [
  { src: "/assets/logo.png", alt: "Client 1" },
  { src: "/assets/logo.png", alt: "Client 2" },
  { src: "/assets/logo.png", alt: "Client 3" },
  { src: "/assets/logo.png", alt: "Client 4" },
  { src: "/assets/logo.png", alt: "Client 5" },
];

const slides = [
  {
    icon: <FaBook color="#f89726" size="3em" />,
    title: "Export-Import business courses",
    subtitle: "Learn from the best!",
    description:
      "Gain actionable skills, expert-led insights, and build connections with peers and professionals to drive your business growth.",
  },
  {
    icon: <FaSuitcase color="#f89726" size="3em" />,
    title: "Export-Import start-up kit",
    subtitle: "Kickstart your trade journey!",
    description:
      "Our complete starter package offers tailored courses, step-by-step guidance, and all-in-one solutions to equip new exporters and importers with the tools, knowledge, and support needed to succeed.",
  },
  {
    icon: <FaBook color="#f89726" size="3em" />,
    title: "Advanced Logistics",
    subtitle: "Master logistics management!",
    description:
      "Learn the skills to manage global trade logistics, reduce costs, and improve efficiency in supply chain operations.",
  },
  {
    icon: <FaSuitcase color="#f89726" size="3em" />,
    title: "Customs Documentation",
    subtitle: "Stay compliant!",
    description:
      "Understand the necessary documentation and procedures required for smooth and compliant trade operations.",
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

  return (
    <div className="home-screen">
      <OrgDescription />
      <OrgHighlights handldeExploreCourse={handldeExploreCourse}/>
      <WhyUs handldeLearMore={handldeLearMore}/>
      <Testimonials />
      <GVbenefits handldeLearMore={handldeLearMore} />
      <section className="home-our-services">
        <h2>OUR SERVICES</h2>
        <Slider2 slides={slides} />
      </section>
      <section className='org-clinets'>
        <h2>Our partners and client</h2>
        <CircularLogoSlider logos={logos} />
      </section>

      <section className='org-faq'>
        <FAQ />
      </section>
     

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
