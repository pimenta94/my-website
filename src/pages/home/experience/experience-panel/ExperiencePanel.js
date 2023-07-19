import React, { useState } from 'react';

import './ExperiencePanel.css';

const ExperiencePanel = ({ title, role, description, stack }) => {
  const [isOpen, setPanelOpen] = useState(false);

  const handleClick = () => {
    setPanelOpen(!isOpen);
  };

  return (
    <div className="panel" onClick={handleClick}>
      <h2>{title}</h2>
      <h3>{role}</h3>
      <div className={`accordion-content ${isOpen ? 'show-more' : ''}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
        imperdiet arcu. Vestibulum vel elit eget arcu feugiat ornare. Curabitur
        quis blandit orci, sed laoreet sem. Pellentesque sit amet nibh turpis.
        Mauris nec felis nibh. Vivamus mauris arcu, blandit eget tempor
        ultricies, ullamcorper a orci. Etiam turpis nisi, fermentum vitae orci
        non, hendrerit blandit massa. Sed porta urna eu mattis malesuada. Etiam
        feugiat iaculis blandit. Proin varius sit amet ante ut luctus.
        Suspendisse hendrerit luctus vehicula. Nunc rutrum augue eget pretium
        ultrices. Etiam vitae odio tellus. Fusce facilisis metus ut velit
        posuere, ac consequat justo condimentum. Praesent elementum posuere nunc
        quis auctor. Sed dapibus elit a mi faucibus vulputate.
      </div>
    </div>
  );
};

export default ExperiencePanel;
