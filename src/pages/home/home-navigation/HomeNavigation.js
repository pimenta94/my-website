import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './HomeNavigation.css';

const Header = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(location.hash);

  useEffect(() => {
    setSelectedItem(location.hash);
  }, [location]);

  return (
    <nav className="nav-header">
      <ul id="header-list">
        <li
          className={`header-item ${
            selectedItem === '#about-me' ? 'selected' : ''
          }`}
        >
          <a href="#about-me" className="header-link">
            About Me
          </a>
        </li>
        <li
          className={`header-item ${
            selectedItem === '#experience' ? 'selected' : ''
          }`}
        >
          <a href="#experience" className="header-link">
            Experience
          </a>
        </li>
        <li
          className={`header-item ${
            selectedItem === '#skills' ? 'selected' : ''
          }`}
        >
          <a href="#skills" className="header-link">
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
