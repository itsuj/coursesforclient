import './App.css'; // Import the CSS file for global styling
import Navbar from "./components/navbar/Navbar"; // Import Navbar component
import Home from './pages/Home'; // Import Home page component
import Login from "./pages/Login"; // Import Login page component
import Registration from './pages/Registration'; // Import Registration page component
import Contact from './pages/Contact'; // Import Contact page component
import Course from './pages/Course'; // Import Course details page component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components from React Router DOM

function App() {
  return (
    // Router component is used to wrap all routes and manage navigation within the app
    <Router>
      {/* Navbar component that will be visible on all pages */}
      <Navbar />

      {/* Routes component holds all the different route definitions */}
      <Routes>
        {/* Route to render the Home page when visiting the root URL */}
        <Route path="/" element={<Home />} />

        {/* Route to render the Login page when visiting /login URL */}
        <Route path="/login" element={<Login />} />

        {/* Route to render the Registration page when visiting /registration URL */}
        {/* Fixed typo in path to match registration page */}
        <Route path="/registration" element={<Registration />} />

        {/* Route to render the Contact page when visiting /contact URL */}
        <Route path="/contact" element={<Contact />} />

        {/* Route to render the Course page when visiting /course/:_id URL */}
        {/* :_id is a dynamic parameter for the course ID to display the course details */}
        <Route path="/course/:_id" element={<Course />} />
      </Routes>
    </Router>
  );
}

export default App;

