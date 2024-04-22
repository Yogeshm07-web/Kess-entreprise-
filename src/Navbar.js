import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file
import { FaBars } from 'react-icons/fa'; // Import hamburger menu icon

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src="https://scontent.fmru5-1.fna.fbcdn.net/v/t39.30808-6/343996752_3407780859480100_1270715048473327324_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UvRtQuu5ptoAb7CA0oM&_nc_ht=scontent.fmru5-1.fna&oh=00_AfDfRFpv_S5RZYnQD__w1ZCkp5pvBJglA0yojsa33444VQ&oe=662AC8FF" alt="Logo" />
            <a href="https://www.facebook.com/kessmetalworks" target="_blank" rel="noopener noreferrer">
              <img src="https://www.freeiconspng.com/thumbs/logo-facebook-png/hd-logo-facebook-png-transparent-background-30.png" alt="Facebook Logo" />
            </a>
          </div>
          <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
