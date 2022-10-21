import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import './DiscountItem.scss';

const DiscountItem = ({ contents }) => {
  return (
    <div className="disItemContainer">
      <img className="disItemImg" src={contents?.imgUrl} alt="상품 이미지" />
      <div className="disItemIconBox">
        <BsCart2 className="reactIcon" />
      </div>

      <div className="disItemSpecialBox">
        <p className="disItemSpecialText">일일특가</p>
      </div>

      <p className="disItemDescription">{contents?.item}</p>
      <p className="disItemPrice">{contents?.price}</p>
    </div>
  );
};

export default DiscountItem;
