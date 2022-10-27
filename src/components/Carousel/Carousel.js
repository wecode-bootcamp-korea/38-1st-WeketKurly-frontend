import React from 'react';
import BannerCarousel from './BannerCarousel/BannerCarousel';
import ItemCarousel from './ItemCarousel/ItemCarousel';
import './Carousel.scss';

const Carousel = ({ type, contents, title, onOpenModal }) => {
  const carousel = {
    banner: <BannerCarousel />,
    item: (
      <ItemCarousel
        contents={contents}
        title={title}
        onOpenModal={onOpenModal}
      />
    ),
  };
  return <>{carousel[type]}</>;
};

export default Carousel;
