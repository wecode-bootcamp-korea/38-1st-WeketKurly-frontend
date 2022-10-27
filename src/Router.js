import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/reset.scss';
import './styles/common.scss';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Mypage from './pages/Mypage/Mypage';
import Cart from './pages/Cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
