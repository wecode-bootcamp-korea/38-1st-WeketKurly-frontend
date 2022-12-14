import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavTopBox = () => {
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('userName');

  const navigate = useNavigate();
  if (token) {
    return (
      <div className="navTopBox">
        <p className="navWelcomeText">웰컴</p>
        <p className="navUserText"> {name} 님</p>
        <p className="navCscenterText">고객센터</p>
      </div>
    );
  } else {
    return (
      <div className="navTopBox">
        <p
          className="navSignupText"
          onClick={() => {
            navigate(`/signup`);
          }}
        >
          회원가입
        </p>
        <p
          className="navLoginText"
          onClick={() => {
            navigate(`/login`);
          }}
        >
          로그인
        </p>
        <p className="navCscenterText">고객센터</p>
      </div>
    );
  }
};

export default NavTopBox;
