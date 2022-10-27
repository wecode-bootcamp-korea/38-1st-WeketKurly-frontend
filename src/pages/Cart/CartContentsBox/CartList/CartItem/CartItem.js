import React, { useState, useRef } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import API from '../../../../../config';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import './CartItem.scss';

const CartItem = ({ list, cartData, setCartData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [quantity, setQuantity] = useState(parseInt(list?.quantity));

  const timerRef = useRef(0);

  const token = localStorage.getItem('token');

  const increaseCount = () => {
    setQuantity(quantity => quantity + 1);
  };

  const decreaseCount = () => {
    setQuantity(quantity => quantity - 1);
  };

  const setTotalPrice = e => {
    const { id } = e.target.dataset;

    const foundIdx = cartData.findIndex(data => data.cartId === list.cartId);

    if (foundIdx === -1) {
      return;
    }

    const newItem = { ...cartData[foundIdx] };

    if (id === 'minus') {
      newItem.quantity -= 1;
      decreaseCount();
    } else {
      newItem.quantity += 1;
      increaseCount();
    }

    setCartData(cartData => {
      const updataData = [...cartData];
      updataData[foundIdx] = newItem;
      return updataData;
    });
  };

  const updateItem = quantity => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      fetch(`${API.updateCarts}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
        body: JSON.stringify({
          productId: list.id,
          quantity: quantity,
        }),
      }).catch(error => alert(error));
    }, 500);
  };

  const deleteItem = () => {
    fetch(`${API.deleteCarts}/${list.cartId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(res => {
        res.status === 200
          ? setCartData(cartData.filter(data => data.cartId !== list.cartId))
          : alert('실패');
      })
      .catch(error => alert(error));
  };

  return (
    <div className="cartItem">
      <img
        className="cartItemImg"
        src={list?.thumnail_image_url}
        alt="상품이미지"
      />
      <div className="cartItemName">{list?.name}</div>
      <div className="cartItemCountBox">
        <div className="cartItemCount">
          {quantity <= 1 ? (
            <button className="cartCountIcon" disabled>
              <AiOutlineMinus style={{ color: 'lightGray' }} />
            </button>
          ) : (
            <button
              className="cartCountIcon"
              data-id="minus"
              onClick={e => {
                setTotalPrice(e);
                updateItem(quantity - 1);
              }}
            >
              <AiOutlineMinus data-id="minus" />
            </button>
          )}
          <p className="cartCounts">{quantity}</p>
          <button
            className="cartCountIcon"
            data-id="plus"
            onClick={e => {
              setTotalPrice(e);
              updateItem(quantity + 1);
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <div className="cartItemPrice">
        {(list?.price * quantity).toLocaleString() + `원`}
      </div>
      <TiDeleteOutline
        className="deleteIcon"
        onClick={() => {
          setOpenModal(true);
        }}
      />
      {openModal && (
        <Modal
          type="default"
          contents={contents}
          deleteItem={() => {
            deleteItem();
          }}
          cartId={list.cartId}
          close={() => {
            setOpenModal(false);
          }}
        />
      )}
    </div>
  );
};

const contents = {
  id: 0,
  title: '삭제하시겠습니까?',
  type: 'delete',
};

export default CartItem;
