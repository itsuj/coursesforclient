import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";

// Simple loading spinner component
const LoadingSpinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
  </div>
);

export const Home = () => {
  // State for loading status and fetched courses
  const [loading, setLoading] = useState(true);
  const [listOfCourses, setListOfCourses] = useState([]);

  // Get API URL from environment variables
  const apiUrl = process.env.REACT_APP_API_URL;

  // Hook for navigation between pages
  const navigate = useNavigate();

  // Fetch courses when the component mounts
  useEffect(() => {
    if (!apiUrl) {
      console.error("API URL is not defined. Check your .env file.");
      setLoading(false);
      return;
    }

    axios
      .get(`${apiUrl}coursedb/api/v1/courses/get`)
      .then((response) => {
        setListOfCourses(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiUrl]);

  // Show loading spinner until data is fetched
  if (loading) {
    return (
      <div className="loading-message">
        <LoadingSpinner />
        Loading courses... Due to server inactivity, the app may take 50 seconds or more to load. Please wait.
      </div>
    );
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Courses We Offer</h1>
      <div className="course-list">
        {listOfCourses.length > 0 ? (
          listOfCourses.map((course) => (
            <div
              key={course._id}
              className="course-card"
              onClick={() => navigate(`/course/${course._id}`)}
            >
              <h3 className="course-name">{course.coursename}</h3>
              <p className="course-description">{course.description}</p>
              <p className="course-author">
                <strong>Instructor:</strong> {course.author}
              </p>
            </div>
          ))
        ) : (
          <p className="no-courses">No courses available at the moment.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;














