import React from 'react';

// Components
import HomeLocationIcon from '../../../components/icons/HomeLocationIcon';

// Styles
import './AboutMe.css';

const AboutMe = () => {
  const today = new Date();
  const birthDate = new Date('1994-11-21');
  let currentAge = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    currentAge--;
  }

  return (
    <div className="container" id="about-me">
      <div className="about-me">
        <div className="details">
          <div className="my-photo-container">
            <img alt="portrait" src="/me.jpeg" />
          </div>
          <div className="info">
            <h2>João Pimenta</h2>
            <div>
              <HomeLocationIcon />
              <span>Coimbra, Portugal</span>
            </div>
          </div>
        </div>
        <div className="description">
          Solution-driven Frontend Developer eager to contribute to the team's
          success and to a collaborative work environment, finding solutions and
          determining customer satisfaction. Proven experience developing web
          applications using HTML/CSS, TypeScript, React and Angular. Experience
          building web products for desktop and mobile over 6+ years, meeting
          the highest standards for web design and user experience. Designed and
          developed web applications across multiple APIs and third-party
          integrations
        </div>
      </div>
      <div>
        <a href="#experience" className="link-as-button more-button">
          More About Me
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
