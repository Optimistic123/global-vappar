import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.scss';
import CTAButton from './CTAButton';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className='links-group'>
          <div className="description">
            <h4>Global Vyapar</h4>
            <p>See why businesses across India
              trust Global Vyapar to solve their
              most complex export-import
              challenges.</p>
          </div>
          <div className="useful-links-company">
            <h4>Company</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/contact">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          {/* Useful Links */}
          <div className="useful-links-docu">
            <h4>Documentation</h4>
            <ul>
              <li><a href="/contact">Help Center</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/contact">FAQ</a></li>
              <li><a href="/contact">Privacy Policy</a></li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="useful-links-social">
            <h4>Social</h4>
            <ul>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} />
              </a></li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={40} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={40} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={40} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@GlobalVyapar" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={40} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="useful-links-social-small-screen">
          <h4>Social</h4>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={40} />
            </a></li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={40} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@GlobalVyapar" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={40} />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-term-cond">
          <span>&copy; {new Date().getFullYear()} Global Vyapar. All rights reserved.</span>
          <a href="/terms-and-conditions" class="footer-link">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
