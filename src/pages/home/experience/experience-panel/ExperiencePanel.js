import React, { useState } from 'react';

import ChevronDownIcon from '../../../../components/icons/ChevronDownIcon';
import ChevronUpIcon from '../../../../components/icons/ChevronUpIcon';

import './ExperiencePanel.css';

const ExperiencePanel = ({ data }) => {
  const [isOpen, setPanelOpen] = useState(false);
  const { title, subTitle, duration, imgPath, description } = data;

  const handleClick = () => {
    setPanelOpen(!isOpen);
  };

  return (
    <div className="panel">
      <div className="experience-info">
        <div className="experience-img">
          <img alt={subTitle} src={imgPath} />
        </div>
        <div className="experience-header">
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
          <h4>{duration}</h4>
        </div>
        {description && (
          <div className="accordion-button" onClick={handleClick}>
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        )}
      </div>
      {description && (
        <div className={`accordion-content ${isOpen ? 'show-more' : ''}`}>
          <div className="experience-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed imperdiet arcu. Vestibulum vel elit eget arcu feugiat ornare.
            Curabitur quis blandit orci, sed laoreet sem. Pellentesque sit amet
            nibh turpis. Mauris nec felis nibh. Vivamus mauris arcu, blandit
            eget tempor ultricies, ullamcorper a orci. Etiam turpis nisi,
            fermentum vitae orci non, hendrerit blandit massa. Sed porta urna eu
            mattis malesuada. Etiam feugiat iaculis blandit. Proin varius sit
            amet ante ut luctus. Suspendisse hendrerit luctus vehicula. Nunc
            rutrum augue eget pretium ultrices. Etiam vitae odio tellus. Fusce
            facilisis metus ut velit posuere, ac consequat justo condimentum.
            Praesent elementum posuere nunc quis auctor. Sed dapibus elit a mi
            faucibus vulputate.
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperiencePanel;
