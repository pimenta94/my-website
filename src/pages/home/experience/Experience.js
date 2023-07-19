import React from 'react';
import cv from './cv.json';

// Components
import ExperiencePanel from './experience-panel/ExperiencePanel';
import WorkIcon from '../../../components/icons/WorkIcon';
import EducationIcon from '../../../components/icons/EducationIcon';
import VolunteerIcon from '../../../components/icons/VolunteerIcon';

import './Experience.css';

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="experience-section">
        <h2>WORK EXPERIENCE</h2>
        <WorkIcon />
      </div>
      {cv.workExperience.map((item) => (
        <ExperiencePanel key={item.subTitle} data={item} />
      ))}
      <div className="experience-section">
        <h2>EDUCATION</h2>
        <EducationIcon />
      </div>
      {cv.education.map((item) => (
        <ExperiencePanel key={item.subTitle} data={item} />
      ))}
      <div className="experience-section">
        <h2>VOLUNTEERING</h2>
        <VolunteerIcon />
      </div>
      {cv.volunteering.map((item) => (
        <ExperiencePanel key={item.subTitle} data={item} />
      ))}
    </div>
  );
};

export default Experience;
