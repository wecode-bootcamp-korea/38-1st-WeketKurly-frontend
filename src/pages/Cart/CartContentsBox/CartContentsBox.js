import React, { useState, useEffect } from 'react';
import CartList from './CartList/CartList';
import OrderBox from './OrderBox/OrderBox';
import API from '../../../config';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { BsSun, BsSnow } from 'react-icons/bs';
import './CartContentsBox.scss';

const CartContentsBox = () => {
  const [cartData, setCartData] = useState([]);

  let newCartData = [...cartData];

  newCartData = CART_INFO_LIST.map(item => ({
    ...item,
    data: cartData.filter(cart => cart.packing_type_id === item.id),
  }));

  const token = localStorage.getItem('token');

  let totalPrice = cartData.reduce(
    (acc, cur) => acc + +cur.price * cur.quantity,
    0
  );

  let totalAndFee = totalPrice - 3000;

  // useEffect(() => {
  //   fetch(API.getCarts, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: token,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       setCartData(result.result.data);
  //     });
  // }, []);

  useEffect(() => {
    fetch('data/DATA.json', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(result => {
        setCartData(result.data);
      });
  }, []);

  return (
    <div className="cartContentsBox">
      <div className="cartBox">
        {newCartData?.map(list => (
          <CartList
            list={list}
            key={list.id}
            cartData={cartData}
            setCartData={setCartData}
          />
        ))}
      </div>
      <OrderBox
        totalPrice={totalPrice}
        totalAndFee={totalAndFee}
        setCartData={setCartData}
      />
    </div>
  );
};

const CART_INFO_LIST = [
  {
    id: 1,
    type: '냉동식품',
    icon: <BsSnow className="frozenIcon" />,
    data: [],
  },
  {
    id: 2,
    type: '냉장식품',
    icon: <MdOutlineWaterDrop className="chilledIcon" />,
    data: [],
  },
  {
    id: 3,
    type: '상온식품',
    icon: <BsSun className="sunIcon" />,
    data: [],
  },
];

export default CartContentsBox;
