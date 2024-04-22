import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  // Array of image URLs
  const images = [
    'https://scontent.fmru5-1.fna.fbcdn.net/v/t39.30808-6/434485303_1032947878307867_7533361689064223810_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6aUM03Shs9IAb6Pk_1G&_nc_ht=scontent.fmru5-1.fna&oh=00_AfD36qtpuJM9BStVETTPIC5aMRQblLtjBGXHkgZvilJciA&oe=662B0AF2',
    'https://scontent.fmru5-1.fna.fbcdn.net/v/t39.30808-6/434863423_1032947824974539_7199760077346890589_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EW7ToYIxUQsAb4XZ88P&_nc_ht=scontent.fmru5-1.fna&oh=00_AfAowcwoePie0_q5jKXa9c4_T4z3hoEx-EcVLcd4enaK1A&oe=662B1710',
    'https://scontent.fmru5-1.fna.fbcdn.net/v/t39.30808-6/434942880_1032865231649465_6459472239391599244_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f65Au17uBNYAb6q4fkf&_nc_ht=scontent.fmru5-1.fna&oh=00_AfD7-oROONJ54NJDS1vGAZYJgWD6DCC3M00OuZbxE7sEGw&oe=662AF0EE'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle automatic transitioning between images
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment current image index, looping back to the beginning if necessary
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]); // Re-run effect when the number of images changes

  return (
    <div className="home-container">
      {/* Top Heading */}
      <h1 className="top-heading">KESS ENTERPRISE</h1>

      {/* Hero Section */}
      <div className="hero">
        <div className="overlay">
          <div className="header">
            <h2>Don't Compromise on Safety</h2>
            <p>Transform your home's security with our premium burglar bars today!</p>
          </div>
        </div>
      </div>
      {/* End of Hero Section */}

      {/* Services Section */}
      <div className="services">
        <div className="service">
          <p>We provide top-quality welding services for residential and commercial projects.</p>
        </div>
        <div className="service">
          <h3>Metal Fabrication</h3>
          <p>Our skilled craftsmen can fabricate custom metal products to meet your specifications.</p>
        </div>
      </div>
      {/* End of Services Section */}

      {/* Slideshow */}
      <div className="slide-container">
        <div className="slide-panel">
          <div className="slide-wrapper">
            {images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Slide ${index + 1}`} // Updated alt attribute
                className={index === currentImageIndex ? 'slide-image active' : 'slide-image'}
              />
            ))}
          </div>
        </div>
      </div>
      {/* End of Slideshow */}
    </div>
  );
};

export default HomePage;
