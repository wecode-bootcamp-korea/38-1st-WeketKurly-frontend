import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import API from '../../../../config';
import './DetailCart.scss';

const DetailCart = ({ contents, priceToString }) => {
  const token = localStorage.getItem('token');

  const [count, setCount] = useState(1);
  const product_id = useParams();

  const increaseCount = () => {
    setCount(count => count + 1);
  };
  const decreaseCount = () => {
    setCount(count => count - 1);
  };

  const postItemInfo = () => {
    if (!token) {
      alert('회원전용 서비스입니다!');
    }
    fetch(`${API.postCarts}`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        productId: product_id.product_id,
        quantity: count,
      }),
    });
  };

  return (
    <div className="cartModalBox">
      <div className="cartModalTopBox">
        <div className="cartCountBox">
          <div className="cartContentsBox">
            <p className="cartContentsItem">{contents?.product_name}</p>
            <p className="cartItemPrice">
              {priceToString(contents?.price) + '원'}
            </p>
          </div>
          <div className="cartCount">
            {count <= 1 ? (
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
            <p className="cartCounts">{count}</p>
            <AiOutlinePlus className="cartPlusIcon" onClick={increaseCount} />
          </div>
        </div>
      </div>
      <div className="cartModalMiddleBox">
        <p className="cartSumText">합계</p>
        <p className="cartSumVar">
          {priceToString(count * contents?.price) + '원'}
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
        <button
          className="cartButton"
          onClick={() => {
            postItemInfo(contents);
          }}
        >
          장바구니 담기
        </button>
      </div>
    </div>
  );
};

export default DetailCart;
