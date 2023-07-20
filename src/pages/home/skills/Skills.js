import React from 'react';
import { LANGUAGES, FRAMEWORKS, OTHER } from './skills-utils';

import './Skills.css';

const Skills = () => {
  return (
    <section className="section-skills" id="skills">
      <div className="skills-table">
        <h2>Languages</h2>
        <ul className="skills-list">
          {LANGUAGES.map((language) => (
            <li key={language.name}>
              <div className="skill-name">
                {language.component}
                <span>{language.name}</span>
              </div>
              <div className="skillbar">
                <span className={`skill-percentage-${language.percentage}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills-table">
        <h2>Frameworks</h2>
        <ul className="skills-list">
          {FRAMEWORKS.map((framework) => (
            <li key={framework.name}>
              <div className="skill-name">
                {framework.component}
                <span>{framework.name}</span>
              </div>
              <div className="skillbar">
                <span className={`skill-percentage-${framework.percentage}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills-table">
        <h2>Others</h2>
        <ul className="skills-list">
          {OTHER.map((tool) => (
            <li key={tool.name}>
              <div className="skill-name">
                {tool.component}
                <span>{tool.name}</span>
              </div>
              <div className="skillbar">
                <span className={`skill-percentage-${tool.percentage}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
