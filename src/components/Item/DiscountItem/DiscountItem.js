import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import './DiscountItem.scss';

const DiscountItem = ({ contents }) => {
  const discountPrice =
    contents?.productPrice -
    (contents?.discount / 100) * contents?.productPrice;

  return (
    <div className="disItemContainer">
      <img
        className="disItemImg"
        src={contents?.thumbnailImageUrl}
        alt="상품 이미지"
      />
      <div className="disItemIconBox">
        <BsCart2 className="reactIcon" />
      </div>

      <div className="disItemSpecialBox">
        <p className="disItemSpecialText">일일특가</p>
      </div>
      <p className="disItemDescription">{contents?.shortDescription}</p>
      <p className="disItemName">{contents?.productName}</p>
      <span className="discountRate">{contents?.discount + `%`}</span>
      <span className="disItemDiscountPrice">{discountPrice + `원`}</span>
      <span className="disItemPrice">{contents?.productPrice}</span>
    </div>
  );
};

export default DiscountItem;
