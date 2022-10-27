import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.scss';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://10.58.52.148:3000/categories')
      // fetch('/data/CATEGORY.json')
      .then(res => res.json())
      .then(result => {
        setCategories(result.data);
      });
  }, []);

  const findSubCategory = id => {
    const subCategory = categories.find(
      category => +category.mainCategoriesId === +id
    );
    if (!subCategory) return [];
    else return subCategory.subCategories;
  };

  return (
    <div className="categoryContainer">
      <div className="mainCategoryFrame">
        {categories &&
          categories.map(category => {
            return (
              <li
                key={category.mainCategoriesId}
                id={category.mainCategoriesId}
                className="mainCategoriesName"
                onMouseEnter={() => {
                  setCategoryId(category.mainCategoriesId);
                }}
                onClick={() => navigate(`/list/${category.mainCategoriesId}`)}
              >
                {category.mainCategoriesName}
              </li>
            );
          })}
      </div>
      <div className="subcategoryFrame" onMouseLeave={() => setCategoryId(0)}>
        {findSubCategory(categoryId).map(category => {
          return (
            <li
              key={category.subCategoriesId}
              id={category.subCategoriesId}
              className="subCategoriesName"
            >
              {category?.subCategoriesName}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
