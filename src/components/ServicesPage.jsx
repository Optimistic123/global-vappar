// ServicesPage.js
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import './ServicesPage.scss';
import ServiceSection from './ServiceSection';
import Modal from "./Modal"

const ServicesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  }
  const services = [
    {
      image: "/assets/pexels-tomfisk-2217513.jpg",
      title: "Export-Import Business Courses",
      points: [
        { label: "Expert-Led Learning", description: "Learn from industry professionals." },
        { label: "Practical Strategies", description: "Gain actionable skills for business growth." },
        { label: "Networking & Support", description: "Connect with peers and experts." },
      ],
      buttonText: "Get in Touch",
      onClick: () => setShowModal(true),
    },
    {
      image: "/assets/import-export.webp",
      title: "Freight Forwarding",
      points: [
        { label: "End-to-End Solutions", description: "Seamless management of your logistics and shipments." },
        { label: "Global Reach", description: "Expertise in international shipping and customs." },
        { label: "Reliable Delivery", description: "Timely and safe transportation for your goods." },
      ],
      buttonText: "Get in Touch",
      onClick: () => setShowModal(true),
    },
    {
      image: "/assets/whatsapp-image-2022-12-09-at-4-46-33-pm-500x500.webp",
      title: "Export-Import start-up kit",
      points: [
        { label: "Complete Starter Package", description: "Courses and services tailored for new exporters and importers." },
        { label: "Step-by-Step Guidance", description: "From learning the basics to handling real-world trade scenarios." },
        { label: "All-in-One Solution", description: "Equip your business with the right tools, knowledge, and support to succeed." },
      ],
      buttonText: "Get in Touch",
      onClick: () => setShowModal(true),
    },
    {
      image: "/assets/pexels-artempodrez-5025635.jpg",
      title: "Customs Clearance",
      points: [
        { label: "Smooth Processing", description: "Efficient customs clearance for seamless trade." },
        { label: "Expert Support", description: "Navigate regulations with ease." },
        { label: "Quick Clearance", description: "Ensure timely and compliant shipments." },
      ],
      buttonText: "Get in Touch",
      onClick: () => setShowModal(true),
    },
    {
      image: "/assets/ior-learn-page.png",
      title: "Importer on record",
      points: [
        { label: "Official Representation", description: "Act as the registered importer for your goods." },
        { label: "Compliance Assurance", description: "Ensure adherence to import regulations. " },
        { label: "Hassle-Free Imports", description: "Manage all documentation and responsibilities seamlessly." },
      ],
      buttonText: "Get in Touch",
      onClick: () => setShowModal(true),
    },
  ];

  return (<div className="services-page">
    <div className='services-page-header'>
      <h2>Our Services</h2>
      <p>Export Import Solutions for Every Type, Wanapreneurs, Startup, Mid-size, Large-size.We help people and local businesses go global with and global businesses to expand even more.</p>
    </div>
    {services.map((service, index) => (
      <ServiceSection
        key={index}
        image={service.image}
        title={service.title}
        points={service.points}
        buttonText={service.buttonText}
        onClick={service.onClick}
      />
    ))}
    {showModal && <Modal
      modalIsOpen={showModal}
      handleClose={handleClose}
    >
        <ContactForm />
    </Modal>}
  </div>)
};

export default ServicesPage;
