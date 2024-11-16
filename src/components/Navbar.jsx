// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../store/aapSlice';
import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  const toggleMenu = () => {
    dispatch(setMenu(!isMenuOpen));
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
              <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li>
              <li><Link to="/services" onClick={toggleMenu}>Our Service</Link></li>
              <li><Link to="/whyus" onClick={toggleMenu}>Why Us</Link></li>
              <li><Link to="/blog" onClick={toggleMenu}>Blogs</Link></li>
              <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
