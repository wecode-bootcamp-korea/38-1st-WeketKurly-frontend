import React from 'react';
import './ProductDetail.scss';

const ProductDetail = ({ detail_image_url, name, short_description }) => {
  return (
    <div className="productDetailsContainer">
      <img src={detail_image_url} alt={name} className="itemImageDetail" />
      <div>
        <h3 className="shortDescription">{short_description}</h3>
        <h1 className="nameOnDescription">{name}</h1>
      </div>
    </div>
  );
};

export default ProductDetail;
