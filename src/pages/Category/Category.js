import React from 'react';
import { useEffect, useState } from 'react';
import './Category.scss';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    fetch('/data/CATEGORY.json')
      .then(res => res.json())
      .then(result => {
        setCategories(result);
      });
  }, []);

  const findSubCategory = id => {
    const subCategory = categories.find(
      category => +category.mainCategoriesId === +id
    );

    if (!subCategory) return [];
    else return subCategory.subCategory;
  };

  return (
    <div className="categoryContainer">
      <div className="mainCategoryFrame">
        {categories.map(category => {
          return (
            <li
              key={category.id}
              id={category.mainCategoriesId}
              className="mainCategoriesName"
              onMouseEnter={() => {
                setCategoryId(category.mainCategoriesId);
              }}
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
