import React from 'react';
import jobs from './jobs.json';

// Components
import ExperiencePanel from './experience-panel/ExperiencePanel';

import './Experience.css';

const Experience = () => {
  console.log(jobs);
  return (
    <div className="experience" id="experience">
      <ExperiencePanel title="Job Title" role="Role" />
      <ExperiencePanel />
      <ExperiencePanel />
    </div>
  );
};

export default Experience;
