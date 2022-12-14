import React from 'react';
import MainBannerCarousel from './MainBannerCarousel/MainBannerCarousel';
import MainContentsBox from './MainContentsBox/MainContentsBox';
import Nav from '../../components/Nav/Nav';
import './Main.scss';
import Footer from '../../components/Footer/Footer';

const Main = () => {
  return (
    <div className="main">
      <MainBannerCarousel />
      <MainContentsBox />
    </div>
  );
};

export default Main;
