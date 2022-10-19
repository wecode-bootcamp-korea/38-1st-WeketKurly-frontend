import React from 'react';
import './MainItemBox.scss';
import MainFilter from './MainFilter/MainFilter';
import MainRecommend from './MainRecommend/MainRecommend';
import MainSpecialPrice from './MainSpecialPrice/MainSpecialPrice';

const MainItemBox = () => {
  return (
    <div className="mainItemBoxContainer">
      <MainRecommend />
      <img
        className="mainBanner"
        src="https://product-image.kurly.com/banner/random-band/pc/img/63a51868-7716-428c-a2f4-a232555330a3.jpg"
        alt="배너"
      />
      <MainSpecialPrice />
      <MainFilter />
    </div>
  );
};

export default MainItemBox;
