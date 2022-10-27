import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import './MainBannerCarousel.scss';

const MainBannerCarousel = () => {
  return (
    <div className="mainBannerCarousel">
      <Carousel type="banner" />
    </div>
  );
};

export default MainBannerCarousel;
