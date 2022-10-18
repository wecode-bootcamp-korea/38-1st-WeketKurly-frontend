import React from 'react';
import './Nav.scss';
import NavBottomBox from './NavBottomBox';
import NavMiddleBox from './NavMiddleBox';
import NavTopBox from './NavTopBox';

const Nav = () => {
  return (
    <div>
      <NavTopBox />
      <NavMiddleBox />
      <NavBottomBox />
    </div>
  );
};

export default Nav;
