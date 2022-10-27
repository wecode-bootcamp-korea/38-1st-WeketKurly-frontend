import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import DetailNav from './DetailNav/DetailNav';
import ProductDetail from './ProductDetail/ProductDetail';
import Review from './Review/Review';
import Article from './Article/Article';
import API from '../../../src/config';
import './Detail.scss';

const Detail = () => {
  const [itemInfo, setItemInfo] = useState({
    product_id: '',
    contactant: '',
    packing_types: '',
    packing_type_id: '',
    weight: '',
    origin: '',
    allerge: '',
    expiration_date: '',
    price: '',
    review: [],
  });

  const { product_id } = useParams();

  const { allerge, contactant, expiration_date, name, origin, ...others } =
    itemInfo;

  const scrollToReview = () => {
    window.scroll({
      bottom: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    fetch(`${API.detailItem}/${product_id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setItemInfo(result.productData[0]);
      });
  }, []);

  return (
    <>
      <div className="detailPage">
        <div className="detailPageContainer">
          <Article itemInfo={itemInfo} />
          <DetailNav onClick={scrollToReview} />
          <ProductDetail itemInfo={itemInfo} />
          <Review reviewData={itemInfo.review} product_id={others.product_id} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
