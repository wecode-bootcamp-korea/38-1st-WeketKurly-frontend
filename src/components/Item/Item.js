import React from 'react';
import DefaultItem from './DefaultItem/DefaultItem';
import DiscountItem from './DiscountItem/DiscountItem';
import './Item.scss';

const Item = props => {
  const { type, contents, onOpenModal } = props;

  const item = {
    discount: <DiscountItem contents={contents} />,
    default: <DefaultItem contents={contents} onOpenModal={onOpenModal} />,
  };

  return <>{item[type]}</>;
};

export default Item;
