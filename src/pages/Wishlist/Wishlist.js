import React from 'react';

import './Wishlist.scss';

import WishItem from './WishItem';

const Wishlist = () => {
  return (
    <>
      <div className="wishlistContainer">
        <div className="wishlistTitle">
          <span className="">찜한 상품(0)</span>
        </div>
        <div className="maximumGuideText">
          찜한 상품은 최대 200개까지 저장됩니다.
        </div>
        <div className="wishlistMainContainer">
          <WishItem />
        </div>
      </div>
    </>
  );
};

export default Wishlist;
