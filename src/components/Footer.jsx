import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sweet Delights Bakery</h3>
          <p>Freshly baked goods made with love</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>123 Bakery Street</p>
          <p>Sweetville, SV 12345</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sweet Delights Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;