import React from 'react';
import Nav from '../../components/Nav/Nav';
import './Main.scss';
import MainCarousel from './MainCarousel/MainCarousel';
import MainItemList from './MainItemList/MainItemList';

const Main = () => {
  return (
    <div>
      <Nav />
      <MainCarousel />
      <MainItemList />
    </div>
  );
};

export default Main;
