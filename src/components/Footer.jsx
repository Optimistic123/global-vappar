import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links */}
        <div className="social-media">
          <h4>Connect with Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@GlobalVyapar" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
            </a>
          </div>
        </div>

        {/* General Information */}
        <div className="general-info">
          <h4>About Global Vyapar</h4>
          <p>Your trusted partner in mastering the import-export business. Join our webinars and explore our courses to grow your global trade network.</p>
          <p>&copy; {new Date().getFullYear()} Global Vyapar. All rights reserved.</p>
        </div>

        {/* Useful Links */}
        <div className="useful-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/courses">Explore Courses</a></li>
            <li><a href="/webinars">Webinars</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
