import React, { useState, useEffect } from "react";
import "./navbar.css";

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
        <li><a href="http://localhost:3000/">Home</a></li>
        <li><a href="http://localhost:3000/">Courses</a></li>
        <li><a href="http://localhost:3000/">About</a></li>
        <li><a href="http://localhost:3000/contact">Contact</a></li>
        {isLoggedIn ? (
          <li><button onClick={handleLogout}>Logout</button></li> // If logged in, show Logout button
        ) : (
          <li><a href="http://localhost:3000/login">Login</a></li> // If not logged in, show Login link
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
