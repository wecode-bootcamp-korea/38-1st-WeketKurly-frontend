import React from 'react';
import './DefaultModal.scss';

const DefaultModal = props => {
  const { close, contents, data } = props;

  const token = localStorage.getItem('token');

  const closeHandler = e => {
    e.stopPropagation();
    close();
  };

  const deleteItem = cartId => {
    fetch(`http://10.58.52.133:3000/carts/${cartId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생, check status code');
      })
      .catch(error => alert(error));
  };

  return (
    <div className="modalBackground" onClick={closeHandler}>
      <div
        className="modalBox"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="modalContentsBox">
          <p className="modalContentsText">{contents?.title}</p>
        </div>
        {contents?.type === 'delete' ? (
          <div className="modalConfirmBox">
            <button className="modalDeleteBtn" onClick={closeHandler}>
              취소
            </button>
            <button
              className="modalConfirmBtn"
              onClick={() => {
                deleteItem(data?.cartId);
              }}
            >
              확인
            </button>
          </div>
        ) : (
          <div className="modalConfirmBox" onClick={closeHandler}>
            <button className="modalConfirmBtn">확인</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultModal;
