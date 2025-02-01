import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status when component mounts
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setMenuOpen(false); // Close menu on logout
    window.location.href = "/"; // Redirect to home page
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
        <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="/" onClick={() => setMenuOpen(false)}>Courses</a></li>
        <li><a href="/" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        {isLoggedIn ? (
          <li><button onClick={handleLogout}>Logout</button></li>
        ) : (
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;