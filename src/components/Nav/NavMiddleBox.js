import React, { useState, useEffect } from 'react';
import API from '../../config';
import { useNavigate } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { VscHeart } from 'react-icons/vsc';
import { BsCart2 } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

const NavMiddleBox = () => {
  const [cartLength, setCartLength] = useState(0);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(API.getCarts, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(result => {
        setCartLength(result.result.data.length);
      });
  }, []);

  return (
    <div className="navMiddleBox">
      <div className="navLogoBox">
        <p
          className="navLogoImg"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Kurly
        </p>
        <p
          className="navMarketText"
          onClick={() => {
            navigate(`/`);
          }}
        >
          마켓컬리
        </p>
        <p className="navBeautyText">뷰티컬리</p>
      </div>
      <div className="navSearchBox">
        <input
          className="navSearchInput"
          type="text"
          placeholder="검색어를 입력해주세요"
        />
        <BiSearch className="navSearchIcon" />
      </div>
      <div className="navIconBox">
        <IoLocationOutline className="navIcon" />
        <VscHeart className="navIcon" />
        <BsCart2
          className="navIcon"
          onClick={() => {
            navigate(`/cart`);
          }}
        />
        {cartLength !== 0 && <div className="navLengthBox">{cartLength}</div>}
      </div>
    </div>
  );
};

export default NavMiddleBox;
