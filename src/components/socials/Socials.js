import React from 'react';
import { Link } from 'react-router-dom';

import GitHubIcon from '../icons/GitHubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import InstagramIcon from '../icons/InstagramIcon';
import EmailIcon from '../icons/EmailIcon';

import './Socials.css';

const Socials = () => {
  return (
    <ul className="socials-list">
      <li className="social-item">
        <Link
          to={{ pathname: 'https://github.com/pimenta94' }}
          target="_blank"
          className="social-item-link"
        >
          <GitHubIcon />
        </Link>
      </li>
      <li className="social-item">
        <Link
          to={{ pathname: 'https://www.linkedin.com/in/jpimenta21/' }}
          target="_blank"
          className="social-item-link"
        >
          <LinkedinIcon />
        </Link>
      </li>
      <li className="social-item">
        <Link
          to={{ pathname: 'https://www.instagram.com/jpimenta94/' }}
          target="_blank"
          className="social-item-link"
        >
          <InstagramIcon />
        </Link>
      </li>
      <li className="social-item">
        <Link
          to={{ pathname: 'mailto:jpimenta.94@gmail.com' }}
          target="_blank"
          className="social-item-link"
        >
          <EmailIcon />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
