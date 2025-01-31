import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./Home.css"; 
import Footer from "../components/Footer"; 

export const Home = () => {
  // Get API URL from environment variables
  const apiUrl = process.env.REACT_APP_API_URL;
  
  // State to store the list of courses fetched from the backend
  const [listOfCourses, setListOfCourses] = useState([]);

  // Hook for navigation between pages
  const navigate = useNavigate(); 

  // Fetch courses from the backend when the component mounts or when apiUrl changes
  useEffect(() => {
    if (!apiUrl) {
      console.error("API URL is not defined. Check your .env file.");
      return; // Prevent making a request if API URL is missing
    }

    axios
      .get(`${apiUrl}coursedb/api/v1/courses/get`) // API call to fetch courses
      .then((response) => {
        setListOfCourses(response.data || []); // Ensure state is never undefined
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, [apiUrl]); // Re-run when apiUrl changes

  return (
    <div className="home-container">
      <h1 className="home-title">Courses We Offer</h1>
      
      <div className="course-list">
        {/* Check if there are courses to display */}
        {listOfCourses.length > 0 ? (
          listOfCourses.map((course) => (
            <div
              key={course._id} // Use course ID as a unique key
              className="course-card"
              onClick={() => navigate(`/course/${course._id}`)} // Navigate to course details on click
            >
              <h3 className="course-name">{course.coursename}</h3>
              <p className="course-description">{course.description}</p>
              <p className="course-author">
                <strong>Instructor:</strong> {course.author}
              </p>
            </div>
          ))
        ) : (
          <p className="no-courses">No courses available at the moment.</p> // Show message if no courses exist
        )}
      </div>
      
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Home;














