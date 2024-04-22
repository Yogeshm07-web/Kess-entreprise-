import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="https://scontent.fmru5-1.fna.fbcdn.net/v/t39.30808-6/343996752_3407780859480100_1270715048473327324_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UvRtQuu5ptoAb7CA0oM&_nc_ht=scontent.fmru5-1.fna&oh=00_AfDfRFpv_S5RZYnQD__w1ZCkp5pvBJglA0yojsa33444VQ&oe=662AC8FF" alt="Logo" />
          <img src="https://www.freeiconspng.com/thumbs/logo-facebook-png/hd-logo-facebook-png-transparent-background-30.png" alt="Facebook Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
