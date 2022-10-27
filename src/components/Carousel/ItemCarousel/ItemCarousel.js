import React, { useEffect, useState, useRef } from 'react';
import Item from '../../Item/Item';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from 'react-icons/md';
import './ItemCarousel.scss';

const ItemCarousel = ({ contents, title, onOpenModal }) => {
  const [slide, setSlide] = useState(0);

  const slideRef = useRef(null);

  const page = Math.ceil(contents?.item?.length / 4);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.4s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slide * 50.3}%)`;
  }, [slide]);

  const showNextSlide = () => {
    setSlide(slide => slide + 1);
  };
  const showPrevSlide = () => {
    setSlide(slide => slide - 1);
  };

  return (
    <div className="itemCarousel">
      <p className="itemTitle">{title}</p>
      <div className="itemCarouselBox">
        <div className="itemList" ref={slideRef}>
          {contents?.item?.map(list => (
            <Item
              contents={list}
              key={list.productId}
              type="default"
              onOpenModal={onOpenModal}
            />
          ))}
        </div>
      </div>
      {slide !== 0 && (
        <div className="slideMinusBtn" onClick={showPrevSlide}>
          <MdOutlineArrowBackIos className="slideMinusIcon" />
        </div>
      )}
      {slide + 1 !== page && (
        <div className="slidePlusBtn" onClick={showNextSlide}>
          <MdOutlineArrowForwardIos className="slidePlusIcon" />
        </div>
      )}
    </div>
  );
};

export default ItemCarousel;
