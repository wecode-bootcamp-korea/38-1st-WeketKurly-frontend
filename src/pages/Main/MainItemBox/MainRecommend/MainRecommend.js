import React from 'react';
import './MainRecommend.scss';
import Item from '../../../../components/Item/Item';
const MainRecommend = () => {
  return (
    <div className="mainRecommendContainer">
      <p className="recommendText">이 상품은 어때요?</p>
      <div className="recommendList">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default MainRecommend;
