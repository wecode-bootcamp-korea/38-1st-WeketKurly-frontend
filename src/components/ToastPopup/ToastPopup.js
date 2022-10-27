import React, { useEffect, useState } from 'react';
import './ToastPopup.scss';

const ToastPopup = ({ imgUrl, name, openToast, setOpenToast }) => {
  const [animation, setAnimation] = useState(false);

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
    <div className={`toastPopup ${animation ? 'toastUnmount' : ''}`}>
      <img className="toastImg" src={imgUrl} />
      <div className="toastTextBox">
        <p className="toastName">{name}</p>
        <p className="toastMsg">장바구니에 상품이 담겼습니다</p>
      </div>
    </div>
  );
};

export default ToastPopup;
