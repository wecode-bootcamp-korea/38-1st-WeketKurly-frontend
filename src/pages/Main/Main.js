import React from 'react';
import Nav from '../../components/Nav/Nav';
import './Main.scss';
import MainCarousel from './MainCarousel/MainCarousel';
import MainItemBox from './MainItemBox/MainItemBox';

const Main = () => {
  return (
    <div>
      <Nav />
      <MainCarousel />
      <MainItemBox />
    </div>
  );
};

export default Main;
