import React, { useEffect } from 'react';
import { throttle } from 'lodash';

import './HomeNavigation.css';

const Header = () => {
  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => {
        const sections = document.getElementsByTagName('section');
        const navItems = document.getElementsByClassName('header-item');

        for (let section of sections) {
          const top = window.scrollY;
          const offset = section.offsetTop - 150;
          const height = section.offsetHeight;
          const id = section.getAttribute('id');

          if (top >= offset && top < offset + height) {
            for (let navItem of navItems) {
              navItem.classList.remove('active');
              if (navItem.id.includes(id)) {
                navItem.classList.add('active');
              }
            }
          }
        }
      }, 500)
    );
  }, []);

  return (
    <nav className="nav-header">
      <ul id="header-list">
        <li id="nav-item-about-me" className="header-item">
          <a href="#about-me" className="header-link">
            About Me
          </a>
        </li>
        <li id="nav-item-experience" className="header-item">
          <a href="#experience" className="header-link">
            Experience
          </a>
        </li>
        <li id="nav-item-skills" className="header-item">
          <a href="#skills" className="header-link">
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
