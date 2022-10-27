import React, { useState } from 'react';
import Carousel from '../../../../components/Carousel/Carousel';
import Modal from '../../../../components/Modal/Modal';
import API from '../../../../config';
import './MainFilterItem.scss';

const MainFilterItem = () => {
  const [selected, setSelected] = useState('');
  const [itemList, setItemList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  const handleOpenModal = item => {
    setModalItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const filterItemList = endPoint => {
    fetch(`${API.filterItem}/${endPoint}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(res => res.json())
      .then(data => {
        setItemList(data);
      });
  };

  return (
    <div className="mainFilterItem">
      <p className="mdsRecommend">MD의 추천</p>
      <ul className="foodCategoryBox">
        {ITEM_CATEGORIES.map(categories => (
          <li key={categories.id}>
            {selected === categories.name ? (
              <button
                onClick={() => {
                  setSelected(categories.name);
                }}
                className="foodSelected"
              >
                {categories.name}
              </button>
            ) : (
              <button
                onClick={() => {
                  setSelected(categories.name);
                  filterItemList(categories.id);
                }}
                className="foodCategory"
              >
                {categories.name}
              </button>
            )}
          </li>
        ))}
      </ul>
      {itemList.length !== 0 && (
        <>
          <Carousel
            type="item"
            contents={itemList}
            onOpenModal={handleOpenModal}
          />
          {openModal && (
            <Modal contents={modalItem} type="cart" close={handleCloseModal} />
          )}
        </>
      )}
    </div>
  );
};

const ITEM_CATEGORIES = [
  { id: 1, name: '채소' },
  { id: 2, name: '과일 · 견과 · 쌀' },
  { id: 3, name: '수산 · 해산 · 건어물' },
  { id: 4, name: '정육 · 계란' },
  { id: 5, name: '국 · 반찬 · 메인요리' },
  { id: 6, name: '샐러드 · 간편식' },
  { id: 7, name: '면 · 양념 · 오일' },
  { id: 8, name: '생수 · 음료 · 우유 · 커피' },
  { id: 9, name: '간식 · 과자 · 떡' },
  { id: 10, name: '베이커리 · 치즈 · 델리' },
];

export default MainFilterItem;
