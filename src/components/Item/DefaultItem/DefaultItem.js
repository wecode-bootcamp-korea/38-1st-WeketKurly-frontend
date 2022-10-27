import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import './DefaultItem.scss';

const DefaultItem = ({ contents, onOpenModal }) => {
  return (
    <div className="itemContainer">
      <img
        className="itemImg"
        src={contents?.thumbnailImageUrl}
        alt="상품 이미지"
      />
      <div
        className="itemIconBox"
        onClick={() => {
          onOpenModal(contents);
        }}
      >
        <BsCart2 className="reactIcon" />
      </div>
      <p className="itemDescription">{contents?.productName}</p>
      <p className="itemPrice">{(contents?.price).toLocaleString() + `원`}</p>
    </div>
  );
};

export default DefaultItem;
