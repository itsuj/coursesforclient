import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

import "./Login.css"; // Importing CSS for styling

function Login() {
    const apiUrl = process.env.REACT_APP_API_URL
  // State to manage the values of email, password, and error messages
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");  // Holds any error messages from the server
  const navigate = useNavigate(); // Hook to handle navigation between pages

  // Login function triggered when the login button is clicked
  const login = async () => {
    // Clear any previous error message before making a new request
    setErrorMessage("");

    // Prepare the data to be sent in the POST request
    const data = { email: email, password: password };
    
    try {
      // Make an API call to the backend to authenticate the user
      const response = await axios.post(`${apiUrl}coursedb/api/v1/auth/signin`, data);
      
      // If the response has an error, display it
      if (response.data.error) {
        setErrorMessage(response.data.error);  
      } else {
        // If login is successful, save the access token to localStorage for future requests
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/");  // Redirect to the home page after successful login
      }
    } catch (error) {
      // Log the error and display an appropriate message to the user
      console.error("Login error:", error);
      if (error.response) {
        // If the server responded with an error, display the message returned from the server
        setErrorMessage(error.response.data.message || "Something went wrong. Please try again later.");
      } else {
        // If there's an issue with the request (e.g., no network or server is down)
        setErrorMessage("Network error. Please check your internet connection.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-title">Sign In</h1>
        
        {/* Email input field */}
        <label className="login-label">Email:</label>
        <input
          type="email"
          className="login-input"
          onChange={(event) => setEmail(event.target.value)} // Update email state on input change
        />
        
        {/* Password input field */}
        <label className="login-label">Password:</label>
        <input
          type="password"
          className="login-input"
          onChange={(event) => setPassword(event.target.value)} // Update password state on input change
        />
        
        {/* Login button */}
        <button className="login-button" onClick={login}>Login</button>
        
        {/* Display error message if exists */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {/* Link to the registration page if the user doesn't have an account */}
        <Link className="login-register-link" to="/registration">Create an Account</Link>
      </div>
    </div>
  );
}

export default Login;


