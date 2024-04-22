// App.js
import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage.js';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <HomePage />
      {/* Other content of your application */}
    </div>
  );
};

export default App;
