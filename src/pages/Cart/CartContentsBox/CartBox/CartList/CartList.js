import React, { useState } from 'react';
import './CartList.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import CartItem from './CartItem/CartItem';

const CartList = ({ list }) => {
  const [openlist, setOpenlist] = useState(true);

  const handleClickOpenList = () => {
    setOpenlist(openList => !openList);
  };

  return (
    <div className="cartList">
      <div className="cartListDropTab">
        <div className="cartListIconBox">
          {list.icon}
          <p className="cartListText">{list.type}</p>
        </div>
        {openlist === true ? (
          <IoIosArrowUp className="arrowIcon" onClick={handleClickOpenList} />
        ) : (
          <IoIosArrowDown className="arrowIcon" onClick={handleClickOpenList} />
        )}
      </div>
      {openlist && (
        <div className="cartItemList">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      )}
    </div>
  );
};

export default CartList;
