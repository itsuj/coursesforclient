import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

import "./Registration.css"; // Importing CSS for styling

function Registration() {
    const apiUrl = process.env.REACT_APP_API_URL
  const [name, setName] = useState(""); // State to store the user's name
  const [email, setEmail] = useState(""); // State to store the user's email
  const [password, setPassword] = useState(""); // State to store the user's password
  const [errorMessage, setErrorMessage] = useState("");  // State to hold error messages
  const navigate = useNavigate(); // Hook to navigate between pages

  // Register function to handle the form submission
  const register = async () => {
    // Clear any previous error message
    setErrorMessage("");

    const data = { name, email, password }; // Prepare the data to be sent to the server
    
    try {
      // Send a POST request to the backend for user registration
      const response = await axios.post(`${apiUrl}coursedb/api/v1/auth/signup`, data);
      
      if (response.data.error) {
        // If there is an error in the server response, display it
        setErrorMessage(response.data.error);  
      } else {
        // If registration is successful, redirect to the login page
        navigate("/login");  
      }
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response) {
        // If the server responded with an error, display it
        setErrorMessage(error.response.data.message || "Something went wrong. Please try again later.");
      } else {
        // If there was a network error or no server response, display a network error
        setErrorMessage("Network error. Please check your internet connection.");
      }
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-wrapper">
        <h1 className="registration-title">Create an Account</h1>

        {/* Name input field */}
        <label className="registration-label">Name:</label>
        <input
          type="text"
          className="registration-input"
          onChange={(event) => setName(event.target.value)} // Update name state on input change
        />
        
        {/* Email input field */}
        <label className="registration-label">Email:</label>
        <input
          type="email"
          className="registration-input"
          onChange={(event) => setEmail(event.target.value)} // Update email state on input change
        />

        {/* Password input field */}
        <label className="registration-label">Password:</label>
        <input
          type="password"
          className="registration-input"
          onChange={(event) => setPassword(event.target.value)} // Update password state on input change
        />
        
        {/* Register button */}
        <button className="registration-button" onClick={register}>Register</button>

        {/* Display error message if it exists */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {/* Link to login page if user already has an account */}
        <Link className="registration-login-link" to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
}

export default Registration;

