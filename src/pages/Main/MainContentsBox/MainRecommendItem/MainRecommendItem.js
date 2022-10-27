import React, { useState, useEffect } from 'react';
import Carousel from '../../../../components/Carousel/Carousel';
import Modal from '../../../../components/Modal/Modal';
import ToastPopup from '../../../../components/ToastPopup/ToastPopup';
import API from '../../../../config';
import './MainRecommendItem.scss';

const MainRecommendItem = () => {
  const [itemList, setItemList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [openToast, setOpenToast] = useState(false);

  useEffect(() => {
    fetch(`${API.mainItem}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(res => res.json())
      .then(data => {
        setItemList(data);
      });
  }, []);

  const handleOpenModal = item => {
    setModalItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="mainRecommendItem">
      <Carousel
        type="item"
        title="이 상품은 어때요?"
        contents={itemList}
        onOpenModal={handleOpenModal}
      />
      {openModal && (
        <Modal
          contents={modalItem}
          type="cart"
          close={handleCloseModal}
          openToast={openToast}
          setOpenToast={setOpenToast}
        />
      )}
      {openToast && (
        <ToastPopup
          openToast={openToast}
          setOpenToast={setOpenToast}
          imgUrl={modalItem.thumbnailImageUrl}
          name={modalItem.productName}
        />
      )}
    </div>
  );
};

export default MainRecommendItem;
