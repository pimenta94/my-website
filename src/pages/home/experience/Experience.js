import React from 'react';
import cv from './cv.json';

// Components
import ExperienceAccordion from './experience-accordion/ExperienceAccordion';
import WorkIcon from '../../../components/icons/WorkIcon';
import EducationIcon from '../../../components/icons/EducationIcon';
import VolunteerIcon from '../../../components/icons/VolunteerIcon';

import './Experience.css';

const Experience = () => {
  return (
    <section className="section-experience" id="experience">
      <div className="experience-group">
        <WorkIcon />
      </div>
      {cv.workExperience.map((item) => (
        <ExperienceAccordion key={item.subTitle} data={item} />
      ))}
      <div className="experience-group">
        <EducationIcon />
      </div>
      {cv.education.map((item) => (
        <ExperienceAccordion key={item.subTitle} data={item} />
      ))}
      <div className="experience-group">
        <VolunteerIcon />
      </div>
      {cv.volunteering.map((item) => (
        <ExperienceAccordion key={item.subTitle} data={item} />
      ))}
    </section>
  );
};

export default Experience;
