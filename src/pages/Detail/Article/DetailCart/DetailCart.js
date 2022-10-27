import React from 'react';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './DetailCart.scss';

const DetailCart = ({ contents, priceToString }) => {
  const token = localStorage.getItem('token');

  const [count, setCount] = useState(1);

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
  };

  return (
    <div className="cartModalBox">
      <div className="cartModalTopBox">
        <div className="cartCountBox">
          <div className="cartContentsBox">
            <p className="cartContentsItem">{contents?.name}</p>
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
        {/* <button className="cartModalLeftBtn" onClick={closeHandler}> */}

        <button
          className="cartButton"
          onClick={() => {
            postItemInfo();
          }}
        >
          장바구니 담기
        </button>
      </div>
    </div>
  );
};

export default DetailCart;
