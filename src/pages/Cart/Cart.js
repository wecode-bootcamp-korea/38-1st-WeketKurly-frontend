import React from 'react';
import Nav from '../../components/Nav/Nav';
import CartContentsBox from './CartContentsBox/CartContentsBox';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <Nav />
      <p className="cartTitle">장바구니</p>
      <CartContentsBox />
    </div>
  );
};

export default Cart;
