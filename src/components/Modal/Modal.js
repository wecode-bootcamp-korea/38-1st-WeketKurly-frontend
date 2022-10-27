import React from 'react';
import CartModal from './CartModal/CartModal';
import DefaultModal from './DefaultModal/DefaultModal';
import './Modal.scss';
const Modal = ({
  type,
  contents,
  close,
  setOpenToast,
  deleteItem,
  deleteCartAll,
}) => {
  const modal = {
    cart: (
      <CartModal
        close={close}
        contents={contents}
        setOpenToast={setOpenToast}
      />
    ),
    default: (
      <DefaultModal
        close={close}
        contents={contents}
        deleteItem={deleteItem}
        deleteCartAll={deleteCartAll}
      />
    ),
  };

  return <>{modal[type]}</>;
};

export default Modal;
