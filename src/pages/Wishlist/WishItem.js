import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';

const WishItem = () => {
  return (
    <div className="wishlistEachContainer">
      <Link to="" className="wishItemImage" />
      <div className="wishItemContainer">
        <div className="wishItemInfo">
          <span className="wishItemInfoName">
            [제주랑] 한라봉감귤주스 320ml
          </span>
          <div className="wishItemInfoCost">3,000원</div>
        </div>
        <div className="wishlistButtons">
          <button className="wishlistDeleteButton">삭제</button>
          <button className="wishlistCartButton">
            <BsCart2 className="wishlistCartIcon" />
            담기
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishItem;
