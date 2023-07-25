import React, { useState } from 'react';

import ChevronDownIcon from '../../../../components/icons/ChevronDownIcon';
import ChevronUpIcon from '../../../../components/icons/ChevronUpIcon';

import './ExperienceAccordion.css';

const ExperienceAccordion = ({ data }) => {
  const [isOpen, setPanelOpen] = useState(false);
  const { title, subTitle, duration, imgPath, description } = data;

  const handleClick = () => {
    if (!description) {
      return;
    }

    setPanelOpen(!isOpen);
  };

  return (
    <div className="experience-accordion" onClick={handleClick}>
      <div className="experience-info">
        <div className="experience-img">
          <div>
            <img alt={subTitle} src={imgPath} />
          </div>
        </div>
        <div className="experience-header">
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
          <h4>{duration}</h4>
        </div>
        {description && (
          <div className="accordion-button">
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        )}
      </div>
      {description && (
        <div className={`accordion-content ${isOpen ? 'show-more' : ''}`}>
          <ul className="experience-description">
            {description.map((descriptionItem, index) => (
              <li
                key={`${subTitle}-description-item-${index}`}
                className="description-item"
              >
                {descriptionItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceAccordion;
