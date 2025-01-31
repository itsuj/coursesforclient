import React from "react";
import "./Footer.css"; // Import CSS file
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>We provide high-quality technical courses to help you grow in your career.</p>
        </div>
        
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Courses</Link></li>
            <li><Link to="/contact">Contact U</Link>s</li>
            <li><Link to="/">Privacy policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Course App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
