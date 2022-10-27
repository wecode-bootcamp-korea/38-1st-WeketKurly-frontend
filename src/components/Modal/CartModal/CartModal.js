import React, { useState } from 'react';
import API from '../../../config';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './CartModal.scss';

const CartModal = props => {
  const { close, contents, setOpenToast } = props;

  const token = localStorage.getItem('token');

  const [quantity, setQuantity] = useState(1);

  const increaseCount = () => {
    setQuantity(quantity => quantity + 1);
  };
  const decreaseCount = () => {
    setQuantity(quantity => quantity - 1);
  };

  const closeHandler = e => {
    e.stopPropagation();
    close();
  };

  const postItemInfo = (productId, quantity) => {
    if (!token) {
      return alert('회원전용 서비스입니다!');
    }

    fetch(`${API.postCarts}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        productId: productId,
        quantity: quantity,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json(), close(), setOpenToast(true);
        }
        throw new Error('에러 발생, check status code');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="modalBackground" onClick={closeHandler}>
      <div
        className="cartModalBox"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="cartModalTopBox">
          <p className="cartContentsItem">{contents?.productName}</p>
          <div className="cartCountBox">
            <p className="cartItemPrice">
              {(contents?.price).toLocaleString() + '원'}
            </p>
            <div className="cartCount">
              {quantity <= 1 ? (
                <AiOutlineMinus
                  className="cartMinusIcon"
                  style={{ color: 'lightGray' }}
                />
              ) : (
                <AiOutlineMinus
                  className="cartMinusIcon"
                  onClick={decreaseCount}
                />
              )}
              <p className="cartCounts">{quantity}</p>
              <AiOutlinePlus className="cartPlusIcon" onClick={increaseCount} />
            </div>
          </div>
        </div>
        <div className="cartModalMiddleBox">
          <p className="cartSumText">합계</p>
          <p className="cartSumVar">
            {(quantity * contents?.price).toLocaleString() + '원'}
          </p>
        </div>
        {token ? (
          <p className="cartPointBox">
            <span className="cartPointTag">적립</span>구매시 0원 적립
          </p>
        ) : (
          <p className="cartPointBox">
            <span className="cartPointTag">적립</span>로그인 후, 회원할인가와
            적립혜택 제공
          </p>
        )}
        <div className="cartModalBottomBox">
          <button className="cartModalLeftBtn" onClick={closeHandler}>
            취소
          </button>
          <button
            className="cartModalRightBtn"
            onClick={() => {
              postItemInfo(contents?.productId, quantity);
            }}
          >
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
