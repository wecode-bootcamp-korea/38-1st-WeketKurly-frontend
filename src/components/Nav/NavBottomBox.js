import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBottomBox = () => {
  return (
    <div className="navBottomBox">
      <div className="navCategoryBox">
        <FontAwesomeIcon className="navIcon" icon={faBars} />
        <p className="navCategoryText">카테고리</p>
      </div>
      <div className="navSelectBox">
        <p className="navSelectText">신상품</p>
        <p className="navSelectText">베스트</p>
        <p className="navSelectText">알뜰쇼핑</p>
        <p className="navSelectText">특가/혜택</p>
      </div>
      <p className="navDeliveryGuide">
        <span>샛별 · 낮 </span>
        배송안내
      </p>
    </div>
  );
};

export default NavBottomBox;
