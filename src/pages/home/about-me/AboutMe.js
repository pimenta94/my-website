import React from 'react';

// Components
import CirclesAnimation from './CirclesAnimation';
import HomeLocationIcon from '../../../components/icons/HomeLocationIcon';
import ScrollWheelIcon from '../../../components/icons/ScrollWheelIcon';
import Socials from '../../../components/socials/Socials';

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
  const experienceYears = today.getFullYear() - 2017;

  return (
    <section className="section-about-me" id="about-me">
      <CirclesAnimation />
      <div className="about-me scale-in-center">
        <div className="details">
          <div className="my-photo-container">
            <img alt="portrait" src="/me.jpeg" />
          </div>
          <div className="info">
            <h2>João Pimenta</h2>
            <div className="info-location">
              <HomeLocationIcon />
              <span>Coimbra, Portugal</span>
            </div>
            <div className="socials-container-mobile">
              <Socials />
            </div>
          </div>
          <div className="socials-container-desktop">
            <Socials />
          </div>
        </div>
        <div className="description">
          I'm a {currentAge} y/o solution-driven Frontend Developer eager to
          contribute to the team's success and to a collaborative work
          environment, finding solutions and determining customer satisfaction
          while meeting the highest standards for web design and user
          experience. I have experience building web applications for desktop
          and mobile for more than {experienceYears} years using HTML/CSS,
          TypeScript, React, Angular across multiple APIs and third-party
          integrations.
        </div>
        <div className="description-2">
          Outside work I like to keep myself busy. Over the years I have
          developed a passion for music and especially playing guitar. I also
          love playing video games, I'm a big fan of From Software games like
          Dark Souls, Bloodborne and Elden Ring. More recently, I discovered
          skiing and became addicted to it, this has become my gateway when I
          need to take a break from my usual routine.
        </div>
      </div>
      <div className="more-button">
        <a href="#experience" className="link-as-button">
          <ScrollWheelIcon />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
