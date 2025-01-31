import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate
import "./Course.css"; // Import the CSS file for styling

const Course = () => {
    const apiUrl = process.env.REACT_APP_API_URL
  // Extract course ID (_id) from the URL parameters using useParams
  const { _id } = useParams(); 

  // State to store the fetched course details
  const [course, setCourse] = useState(null);
  
  // Initialize navigate function to handle redirection
  const navigate = useNavigate(); 

  // useEffect hook to fetch course details when the component mounts
  useEffect(() => {
    // Async function to fetch the course data from the server using the course ID (_id)
    const fetchCourse = async () => {
      try {
        // Fetch course details using the course ID
        const response = await fetch(`${apiUrl}coursedb/api/v1/course/${_id}`);
        const data = await response.json(); // Parse the response as JSON
        setCourse(data); // Set the fetched course data into the state
      } catch (err) {
        // Log an error if fetching fails
        console.error("Error fetching course:", err);
      }
    };

    // Call the fetch function when the component mounts or when _id changes
    fetchCourse();
  }, [_id]); // Dependency array includes _id so the effect reruns if _id changes

  // Handle go back to the courses list
  const goBack = () => {
    navigate("/"); // Navigate to the home page or courses list page
  };

  // Show a loading message until the course data is fetched
  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-page">
      <div className="course-container">
        {/* Button to navigate back to the courses list */}
        <button className="back-button" onClick={goBack}>Go Back</button>
        
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
