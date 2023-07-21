import React from 'react';
import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Carousel.css';

const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    arrows: false,
    centerPadding: '30px',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'carousel-container',
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
