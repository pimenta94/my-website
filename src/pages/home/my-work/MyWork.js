import React from 'react';
import { Link } from 'react-router-dom';

import PROJECTS from './projects';

// Components
import Carousel, {
  CarouselSlider,
} from '../../../components/carousel/Carousel';
import ShareArrowIcon from '../../../components/icons/ShareArrowIcon';

import './MyWork.css';

const MyWork = () => {
  return (
    <section className="section-my-work" id="my-work">
      <Carousel>
        {PROJECTS.map((project) => (
          <CarouselSlider key={`project-${project.id}`} classname="work-slide">
            <div className="work-slide-header">
              <div className={`${project.id}-logo`}>{project.icon}</div>
              <Link
                className="project-ref"
                to={{ pathname: project.link }}
                target="_blank"
              >
                <ShareArrowIcon />
              </Link>
            </div>
            <div>{project.description}</div>
          </CarouselSlider>
        ))}
      </Carousel>
    </section>
  );
};

export default MyWork;
