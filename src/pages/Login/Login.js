import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({ userId: '', password: '' });

  //값을 받아서 인풋창에 세팅하는 함수입니다
  const onInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //제출 시 새로고침을 막고 첫 번째로 값의 유무에 대한 validation을 진행하는 부분입니다
  const isValid = values.userId && values.password;

  const onSubmit = e => {
    e.preventDefault();
    if (!isValid) {
      alert('아이디 또는 비밀번호를 입력해주세요, 모달창이 띄워질 영역입니다');
    } else {
      fetch('http://10.58.52.89:3000/users/signin', {
        //로그인 API기입, 동일한 와이파이 접속 확인
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(values),
      })
        .then(response => {
          if (response.ok === true) {
            return response.json();
          }
          throw new Error('에러 발생, check status code');
        })
        .catch(error => alert(error))
        .then(data => {
          if (data.message === 'LOGIN_SUCCESS') {
            localStorage.setItem('token', data.token); //'token'변수명에 대한 key값 통일 확인
            console.log(localStorage.getItem('token'));
            navigate('/Main');
          } else alert('로그인 실패, 모달창이 띄워질 예정입니다.');
        });
    }
  };

  return (
    <div className="login">
      <div className="titleContainer">
        <div className="title">로그인</div>
      </div>
      <div className="formContainer">
        <form onSubmit={onSubmit}>
          <div className="input-container">
            <Input
              value={values.userId}
              className="loginInput"
              type="id"
              name="userId"
              placeholder="아이디를 입력해주세요"
              onChange={onInputChange}
            />
            <Input
              value={values.password}
              className="loginInput"
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={onInputChange}
            />
          </div>
          <div className="find">
            <Link to="/">아이디 찾기</Link>
            <span></span>
            <Link to="/">비밀번호 찾기</Link>
          </div>
          <div className="buttonContainer">
            <button className="loginButton" onClick={onSubmit}>
              로그인
            </button>
            <Link to="/Signin">
              <button className="signinButton">회원가입</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

const Input = ({ className, onChange, name, value, type, placeholder }) => {
  return (
    <input
      className={className}
      onChange={onChange}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
    ></input>
  );
};
