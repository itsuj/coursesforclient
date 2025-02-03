import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate for routing
import "./Course.css"; // Import CSS for styling

const Course = () => {
  // Get API URL from environment variables
  const apiUrl = process.env.REACT_APP_API_URL;

  // Extract course ID (_id) from URL parameters
  const { _id } = useParams(); 

  // State to store the course details
  const [course, setCourse] = useState(null);

  // Hook for navigation between pages
  const navigate = useNavigate(); 

  // Fetch course details from the backend when the component mounts or when _id changes
  useEffect(() => {
    if (!apiUrl) {
      console.error("API URL is not defined. Check your .env file.");
      return; // Prevent making a request if API URL is missing
    }

    // Async function to fetch course data
    const fetchCourse = async () => {
      try {
        const response = await fetch(`${apiUrl}coursedb/api/v1/course/${_id}`); // API request to get course data
        const data = await response.json(); 

        setCourse(data || {}); // Ensure state is never undefined
      } catch (err) {
        console.error("Error fetching course:", err);
      }
    };

    fetchCourse();
  }, [_id, apiUrl]); // Re-run effect if _id or apiUrl changes

  // Navigate back to the courses list
  const goBack = () => {
    navigate("/contact"); 
  };

  // Show a loading message while fetching course details
  if (!course) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="course-page">
      <div className="course-container">
        {/* Button to go back to the courses list */}
        <button className="back-button" onClick={goBack}>Contact Us</button>

        <div className="course-header">
          {/* Display course name and author */}
          <h1>{course.coursename}</h1>
          <h2>By: {course.author}</h2>
        </div>

        <div className="course-description">
          {/* Display course description */}
          <h3>Description:</h3>
          <p>{course.description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Course;
