import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ToastPopup.scss';

const ToastPopup = ({ imgUrl, name, openToast, setOpenToast }) => {
  const [animation, setAnimation] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (openToast) {
      setTimeout(() => {
        setAnimation(true);
      }, 1500);
      setTimeout(() => {
        setOpenToast(false);
        setAnimation(true);
      }, 2200);
    }
  }, []);

  return (
    <div className="toastWrapper">
      <div
        className={`toastPopup ${animation ? 'toastUnmount' : ''}`}
        onClick={() => {
          navigate(`/cart`);
        }}
      >
        <img className="toastImg" src={imgUrl} />
        <div className="toastTextBox">
          <p className="toastName">{name}</p>
          <p className="toastMsg">장바구니에 상품이 담겼습니다</p>
        </div>
      </div>
    </div>
  );
};

export default ToastPopup;
