import React, { useState, useEffect } from 'react';
import Carousel from '../../../../components/Carousel/Carousel';
import Modal from '../../../../components/Modal/Modal';
import API from '../../../../config';
import './MainRecommendItem.scss';

const MainRecommendItem = () => {
  const [itemList, setItemList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

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
        <Modal contents={modalItem} type="cart" close={handleCloseModal} />
      )}
    </div>
  );
};

export default MainRecommendItem;
