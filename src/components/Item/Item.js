import React from 'react';
import './Item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const item = props => {
  const { imgUrl, item, price } = props;
  return (
    <div className="itemContainer">
      {/* src 부분에 이미지 변수로 넣으면 됩니다 */}
      <img
        className="itemImg"
        src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1650258085245l0.jpg"
        alt="상품 이미지"
      />
      <div className="itemIconBox">
        <FontAwesomeIcon className="itemIcon" icon={faCartShopping} />
      </div>
      {/* 텍스트 부분에 description 변수로 넣으면 됩니다 */}
      <p className="itemDescription">[더오담] 포켓 쏙 현미 누룽지 (국내산)</p>
      {/* 텍스트 부분에 price 변수로 넣으면 됩니다 */}
      <p className="itemPrice">7,980원</p>
    </div>
  );
};

export default item;
