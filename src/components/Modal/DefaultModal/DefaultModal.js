import React from 'react';
import './DefaultModal.scss';

const DefaultModal = ({ close, contents, deleteItem, deleteCartAll }) => {
  const closeHandler = e => {
    e.stopPropagation();
    close();
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
                contents?.isAll === 'all' ? deleteCartAll() : deleteItem();
                close();
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
