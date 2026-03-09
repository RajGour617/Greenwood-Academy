import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-brand">
              <div className="logo-placeholder">
                <img src="/images/logo.png" alt="Greenwood Academy Logo" />
              </div>
              <div className="brand-text">
                <span className="brand-name" style={{color: 'antiquewhite'}}>Greenwood<br/>Academy</span>
                <span className="brand-subtitle">Est. 1999</span>
              </div>
            </div>
            <p className="footer-tagline">Excellence in Education Since 1999</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#academics">Academics</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#campus">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Admissions</h4>
            <ul>
              <li><a href="/admission-process">Admission Process</a></li>
              <li><a href="/fee-structure">Fee Structure</a></li>
              <li><a href="/scholarships">Scholarships</a></li>
              <li><a href="/documents-required">Documents Required</a></li>
              <li><a href="/online-form">Online Form</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> 576 Education Lane, Los Angeles</p>
              <p><i className="fas fa-phone"></i> +1 234 567 8900</p>
              <p><i className="fas fa-envelope"></i> info@greenwoodacademy.edu</p>
            </div>
            <div className="map-preview">
              <img src="https://picsum.photos/seed/map/300/150" alt="Map Preview" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Greenwood Academy. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
