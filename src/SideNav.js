// src/SideNav.js
import React, { useState } from 'react';
import './SideNav.css';

const SideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log('isNavOpen:', isNavOpen); // Check the value
  };

  console.log('Rendering SideNav'); // Check if the component is rendering

  // ... rest of the component ...


  return (
    <div className={`sidenav ${isNavOpen ? 'open' : ''}`}>
      <button onClick={toggleNav} className="toggle-btn">
        Toggle Navigation
      </button>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
