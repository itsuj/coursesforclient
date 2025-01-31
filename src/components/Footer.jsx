import React from "react";
import "./Footer.css"; // Import CSS file

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
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="http://localhost:3000/">Courses</a></li>
            <li><a href="http://localhost:3000/contac">Contact</a></li>
            <li><a href="http://localhost:3000/">Privacy Policy</a></li>
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
