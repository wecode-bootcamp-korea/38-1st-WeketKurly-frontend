import React, { useState } from 'react';
import Modal from '../../../../components/Modal/Modal';
import API from '../../../../config';
import './OrderBox.scss';

const OrderBox = ({ totalPrice, totalAndFee, setCartData }) => {
  const [opneModal, setOpenModal] = useState(false);

  const token = localStorage.getItem('token');

  const deleteCartAll = () => {
    fetch(`${API.deleteCartsAll}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(res => {
        res.status === 200 ? setCartData([]) : alert('실패');
      })
      .catch(error => alert(error));
  };

  return (
    <div className="orderBox">
      <div className="orderPriceBox">
        <div className="orderItemPrice">
          <p className="orderText">상품금액</p>
          <p className="orderText">
            <span className="orderPriceText">
              {totalPrice.toLocaleString()}
            </span>
            원
          </p>
        </div>
        <div className="orderItemDiscount">
          <p className="orderText">상품할인금액</p>
          <p className="orderText">
            <span className="orderPriceText">-3,000</span>원
          </p>
        </div>
        <div className="orderDeliveryFee">
          <p className="orderText">배송비</p>
          <p className="orderText">
            <span className="orderPriceText">무료</span>
          </p>
        </div>
        <div className="orderTotalPrice">
          <p className="orderText">결제예정금액</p>
          <p className="orderText">
            <span className="orderTotalPriceText">
              {totalAndFee < 0 ? 0 : totalAndFee.toLocaleString()}
            </span>
            원
          </p>
        </div>
      </div>
      <button
        className="orderBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        주문하기
      </button>
      {opneModal && (
        <Modal
          type="default"
          contents={contents}
          close={() => {
            setOpenModal(false);
          }}
          deleteCartAll={() => {
            deleteCartAll();
          }}
        />
      )}
    </div>
  );
};

const contents = {
  id: 0,
  title: '선택하신 상품들을 주문하시겠습니까?',
  type: 'delete',
  isAll: 'all',
};

export default OrderBox;
