// Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../store/aapSlice';
import './Navbar.scss';
import CTAButton from './CTAButton/CTAButton';

import Modal from './Modal';
import ContactForm from './ContactForm';

const Navbar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  const [showModal, setShowModal] = useState(false)

  const toggleMenu = () => {
    dispatch(setMenu(!isMenuOpen));
  };

  const collpaseMenu = () => {
    dispatch(setMenu(false));
  };

  const handelModal = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }


  return (
    <div className='nav-container'>
      <nav>
        <div className={`nav-header`}>
          <NavLink to="/">
            {/* <img src="/assets/logo.png" alt="Logo" className="logo" /> */}
            <label className="logo">Global Vyapar</label>
          </NavLink>
          <CTAButton CTA={"Sign up for webinar"} onClick={handelModal} backgroundColor={"#f89726"} IconBackgroundColor={"white"} IconColor={"#f89726"} />

          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className='smaller-screen-nav-header'>
            <label>Global Vvypar</label>
            <button className="cross-button" onClick={toggleMenu}>✖️</button>
          </div>
          <div className='page-link'>
            <ul>
              <li><NavLink to="/courses" onClick={collpaseMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>Courses</NavLink></li>
              <li><NavLink to="/services" onClick={collpaseMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>Service</NavLink></li>
              {/* <li><Link to="/whyus" onClick={collpaseMenu}>Why Us</Link></li> */}
              <li><NavLink to="/blog" onClick={collpaseMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>Blogs</NavLink></li>
              <li><NavLink to="/contact" onClick={collpaseMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>Contact</NavLink></li>
              <li><NavLink to="/about" onClick={collpaseMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink></li>
              <CTAButton CTA={"Sign up for webinar"} onClick={handelModal} backgroundColor={"#f89726"} IconBackgroundColor={"white"} IconColor={"#f89726"} />
            </ul>
          </div>
        </div>
      </nav>

      {showModal && <Modal
        modalIsOpen={showModal}
        handleClose={handleClose}
      >
          <ContactForm />
      </Modal>}
    </div>

  );
};

export default Navbar;
