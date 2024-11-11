import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">
          <img src='global-vappar/src/assets/react.svg' />
        </Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/services">Our service</Link></li>
        <li><Link to="/whyus">Why us</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
