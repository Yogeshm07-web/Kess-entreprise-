import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage'; // Import HomePage component
import AboutPage from './AboutPage'; // Import AboutPage component

// Import your CSS file
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container"> {/* Add the app-container class */}
        <Navbar />
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/about" element={<AboutPage />} /> {/* Define route for AboutPage */}
          <Route path="/home" element={<HomePage />} /> {/* Define route for HomePage */}
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
