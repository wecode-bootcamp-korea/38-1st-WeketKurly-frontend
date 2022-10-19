import React from 'react';
import './Item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const item = props => {
  const { type, imgUrl, item, price } = props;

  if (type === '할인특가') {
    return (
      <div className="disItemContainer">
        <img
          className="disItemImg"
          src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1650258085245l0.jpg"
          alt="상품 이미지"
        />
        <div className="disItemIconBox">
          <FontAwesomeIcon className="disItemIcon" icon={faCartShopping} />
        </div>
        <div className="disItemSpecialBox">
          <p className="disItemSpecialText">일일특가</p>
        </div>
        <p className="disItemDescription">
          [더오담] 포켓 쏙 현미 누룽지 (국내산)
        </p>
        <p className="disItemPrice">7,980원</p>
      </div>
    );
  } else {
    return (
      <div className="itemContainer">
        <img
          className="itemImg"
          src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1650258085245l0.jpg"
          alt="상품 이미지"
        />
        <div className="itemIconBox">
          <FontAwesomeIcon className="itemIcon" icon={faCartShopping} />
        </div>
        <p className="itemDescription">[더오담] 포켓 쏙 현미 누룽지 (국내산)</p>
        <p className="itemPrice">7,980원</p>
      </div>
    );
  }
};

export default item;
