import React from 'react';
import { SKILLS_GROUPS } from './skills-utils';

import './Skills.css';

const Skills = () => {
  return (
    <section className="section-skills" id="skills">
      {SKILLS_GROUPS.map((skillGroup) => (
        <div className="skills-table">
          <h2>{skillGroup.name}</h2>
          <ul className="skills-list">
            {skillGroup.list.map((skill) => (
              <li key={skill.name}>
                <div className="skill-name">
                  {skill.component}
                  <span>{skill.name}</span>
                </div>
                <div className="skillbar">
                  <span className={`skill-percentage-${skill.percentage}`} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
