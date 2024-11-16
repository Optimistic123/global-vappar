// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-container'>
      <nav>
        <div className="nav-header">
          <Link to="/">
            <img src="src/assets/logo.png" alt="Logo" className="logo" />
          </Link>
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className='smaller-screen-nav-header'>
            <label>Global Vvypar</label>
            <button onClick={toggleMenu}>✖️</button>
          </div>
          <div className='page-link'>
            <ul>
              <li><Link to="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
              <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Our Service</Link></li>
              <li><Link to="/whyus" onClick={() => setIsMenuOpen(false)}>Why Us</Link></li>
              <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blogs</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
