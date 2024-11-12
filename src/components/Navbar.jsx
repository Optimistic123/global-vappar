// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav-header">
        <Link to="/">
          <img src="src/assets/channels4_profile.jpg" alt="Logo" className="logo" />
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {isMenuOpen && (
          <button className="cross-icon" onClick={toggleMenu}>
            ✖️
          </button>
        )}
        <li><Link to="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
        <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Our Service</Link></li>
        <li><Link to="/whyus" onClick={() => setIsMenuOpen(false)}>Why Us</Link></li>
        <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blogs</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
