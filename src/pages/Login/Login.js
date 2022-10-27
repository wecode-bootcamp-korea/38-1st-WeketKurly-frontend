import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import API from '../../config';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const [modalInfo, setModalInfo] = useState({
    isModalOpen: false,
    infoIndex: 0,
  });

  const { isModalOpen, infoIndex } = modalInfo;

  const [userInfo, setUserInfo] = useState({ userId: '', password: '' });

  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleModal = (valid, index) => {
    setModalInfo({ isModalOpen: valid, infoIndex: index });
  };

  const isValid = userInfo.userId && userInfo.password;

  const submitUserInfo = e => {
    e.preventDefault();
    
    if (!isValid) {
      alert('아이디 또는 비밀번호를 입력해주세요, 모달창이 띄워질 영역입니다');
    } else {
      fetch(`${API.signIn}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(userInfo),
      })
      .catch(error => handleModal(true, 2))
      .then(data => {
        if (data.message === 'LOGIN_SUCCESS') {
          localStorage.setItem('token', data.token);
          navigate('/Main');
        } else handleModal(true, 1);
      });
  };

  return (
    <div className="login">
      <div className="titleContainer">
        <div className="title">로그인</div>
      </div>
      <div className="formContainer">
        <form onSubmit={submitUserInfo}>
          <div className="input-container">
            <Input
              value={userInfo.userId}
              className="input"
              type="id"
              name="userId"
              placeholder="아이디를 입력해주세요"
              onChange={getUserInfo}
            />
            <Input
              value={userInfo.password}
              className="input"
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={getUserInfo}
            />
          </div>
          <div className="find">
            <div className="findButton">아이디 찾기</div>
            <span />
            <div className="findButton">비밀번호 찾기</div>
          </div>
          <div className="buttonContainer">
            <button className="loginButton" onClick={submitUserInfo}>
              로그인
            </button>
            {isModalOpen && (
              <Modal
                type="default"
                contents={contents[infoIndex]}
                close={() =>
                  setModalInfo(prev => ({ ...prev, isModalOpen: false }))
                }
              />
            )}
            <Link to="/signup">
              <button className="signupButton">회원가입 </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

const contents = [
  {
    id: 0,
    title: '아이디 또는 비밀번호를 입력해 주세요.',
  },
  {
    id: 1,
    title: '아이디, 비밀번호를 확인해주세요.',
  },
  {
    id: 2,
    title: '서버 연결을 다시 확인해주세요',
  },
];
