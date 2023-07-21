import React, { useEffect } from 'react';
import { throttle } from 'lodash';

import './HomeNavigation.css';

const NAVIGATION_ITEMS = [
  {
    name: 'About Me',
    id: 'about-me',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'My Work',
    id: 'my-work',
  },
];

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
        {NAVIGATION_ITEMS.map((navItem) => (
          <li id={`nav-item-${navItem.id}`} className="header-item">
            <a href={`#${navItem.id}`} className="header-link">
              {navItem.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
