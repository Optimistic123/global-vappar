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
          <img src="src/assets/logo.png" alt="Logo" className="logo" />
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      
      {/* Separate nav-menu as a div instead of ul */}
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="cross-icon" onClick={toggleMenu}>✖️</button>
        <ul>
          <li><Link to="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
          <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Our Service</Link></li>
          <li><Link to="/whyus" onClick={() => setIsMenuOpen(false)}>Why Us</Link></li>
          <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blogs</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
