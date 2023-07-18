import React from 'react';

// Components
import AboutMe from './about-me/AboutMe';
import Header from './home-navigation/HomeNavigation';
import Experience from './experience/Experience';
import Skills from './skills/Skills';

import './Home.css';

const Home = () => {
  return (
    <main>
      <AboutMe />
      <Header />
      <Experience />
      <Skills />
    </main>
  );
};

export default Home;
