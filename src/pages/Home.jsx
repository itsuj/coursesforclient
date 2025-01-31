import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Home.css"; // Import the CSS file for styling
import Footer from "../components/Footer"; // Import Footer component

// Home component for displaying courses
export const Home = () => {
    const apiUrl = process.env.REACT_APP_API_URL
  // State to hold the list of courses fetched from the server
  const [listOfCourses, setListOfCourses] = useState([]);
  
  // Initialize the navigate function to handle redirections
  const navigate = useNavigate(); 

  // useEffect hook to fetch course data when the component mounts
  useEffect(() => {
    axios
      .get(`${apiUrl}coursedb/api/v1/courses/get`) // Send GET request to the backend to fetch courses
      .then((response) => {
        // If request is successful, update the state with the fetched data
        setListOfCourses(response.data); 
      })
      .catch((error) => {
        // Log an error if the request fails
        console.error("Error fetching courses:", error);
      });
  }, []); // Empty dependency array ensures the API call is made only on component mount

  return (
    <div className="home-container">
      <h1 className="home-title">Courses We Offer</h1>
      
      {/* Render the list of courses */}
      <div className="course-list">
        {listOfCourses.map((course, index) => (
          <div
            key={index} // Set a unique key for each course card
            className="course-card"
            onClick={() => navigate(`/course/${course._id}`)} // Navigate to the course details page when clicked
          >
            {/* Display course name, description, and instructor */}
            <h3 className="course-name">{course.coursename}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-author">
              <strong>Instructor:</strong> {course.author}
            </p>
          </div>
        ))}
      </div>
      
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Home;














