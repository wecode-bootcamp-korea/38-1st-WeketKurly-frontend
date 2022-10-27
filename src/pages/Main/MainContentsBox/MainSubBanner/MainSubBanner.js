import React, { useEffect, useState } from 'react';
import API from '../../../../config';
import './MainSubBanner.scss';

const MainSubBanner = () => {
  const [banner, setBanner] = useState('');

  useEffect(() => {
    fetch(API.mainSubBanner, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(res => res.json())
      .then(data => {
        setBanner(data.message[0].image_url);
      });
  }, []);

  return <img src={banner} className="mainSubBanner" alt="서브배너" />;
};

export default MainSubBanner;
