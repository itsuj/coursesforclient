import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status when component mounts
  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // Check if the token exists in localStorage
    setIsLoggedIn(token ? true : false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // Remove the token
    setIsLoggedIn(false); // Update the state
    window.location.href = "/"; // Redirect to home page or wherever you want
  };

  return (
    <nav className="navbar">
      <div className="logo">Ninja Academy</div>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        =
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="/">Home</a></li>
        <li><a href="/">Courses</a></li>
        <li><Footer />About</li>
        <li><Link to="/contact">Contact Us</Link></li>
        {isLoggedIn ? (
          <li><button onClick={handleLogout}>Logout</button></li> // If logged in, show Logout button
        ) : (
          <li><Link to="/login">Login</Link></li> // If not logged in, show Login link
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
