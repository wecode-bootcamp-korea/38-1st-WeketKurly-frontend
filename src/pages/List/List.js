import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Item from '../../components/Item/Item';
import CartModal from '../../components/Modal/CartModal/CartModal';
import Modal from '../../components/Modal/Modal';
import Filters from './Filters/Filters';
import Sort from './Sort/Sort';
import API from '../../config';
import './List.scss';

const List = () => {
  const [sortTypes, setSortTypes] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  let { maincategoriesId } = useParams();
  const navigate = useNavigate();

  const handleOpenModal = item => {
    setModalItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const fetchProductList = api =>
    fetch(api, { method: 'GET' })
      .then(res => res.json())
      .then(result => {
        setProducts(result);
      });

  const clickSubcategory = e => {
    fetchProductList(`${API.listSubCategory}/${e.target.subcategoriesId}`);
  };

  const clickSortType = sortTypesId => {
    fetchProductList(`${API.listMainCategory}/1?sorttype=${sortTypesId}`);
  };

  useEffect(() => {
    fetch('/data/SORTED_DATA.json')
      .then(response => response.json())
      .then(result => {
        setSortTypes(result);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.listMainCategory}/${maincategoriesId}`)
      .then(response => response.json())
      .then(result => {
        setSubCategories(result[1]);
        setProducts(result[0]);
      });
  }, []);

  return (
    <div className="listPageContainer">
      <div className="listWrapper">
        <h3 className="listTitle">
          '/maincategoriesId에 해당하는 listTitle이 들어가는 자리입니다'
        </h3>
        <div className="contentContainer">
          <Filters
            data={subCategories}
            clickSubcategory={clickSubcategory}
            maincategoriesId={maincategoriesId}
          />
          <Sort
            sortTypes={sortTypes}
            clickSortType={clickSortType}
            productslength={products?.length}
          />
          <div className="listGrid">
            {products.map(product => {
              return (
                <div
                  onClick={() =>
                    navigate(`/products/detail/${product?.productId}`)
                  }
                >
                  <Item
                    key={product.productId}
                    className="listGridCell"
                    contents={product}
                    type="default"
                    onOpenModal={handleOpenModal}
                  />
                </div>
              );
            })}
            {openModal && (
              <Modal
                contents={modalItem}
                type="cart"
                close={handleCloseModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
