import React from 'react';

// Components
import Carousel from '../../../components/carousel/Carousel';

import './MyWork.css';

const MyWork = () => {
  return (
    <section className="section-my-work" id="my-work">
      <Carousel>
        <>
          <div className="basic-slide">
            <h3>1</h3>
          </div>
        </>
        <>
          <div className="basic-slide">
            <h3>2</h3>
          </div>
        </>
        <>
          <div className="basic-slide">
            <h3>3</h3>
          </div>
        </>
      </Carousel>
    </section>
  );
};

export default MyWork;
