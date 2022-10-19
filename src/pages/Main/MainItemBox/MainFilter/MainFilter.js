import React, { useState } from 'react';
import './MainFilter.scss';
import Item from '../../../../components/Item/Item';

const MainFilter = () => {
  const [selected, setSelected] = useState('');
  const [recommendList, setRecommendList] = useState([]);

  const filterItemList = endPoint => {
    console.log(endPoint);

    fetch(`/data/${endPoint}.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setRecommendList(data);
      });

    console.log(recommendList);
  };

  return (
    <div>
      <p className="mdsRecommend">MD의 추천</p>
      <ul className="foodCategoryBox">
        {FILTER_MOCK.map(cur => (
          <li key={cur.id}>
            {selected === cur.item ? (
              <button
                onClick={() => {
                  setSelected(cur.item);
                }}
                className="foodSelected"
              >
                {cur.item}
              </button>
            ) : (
              <button
                onClick={() => {
                  setSelected(cur.item);
                  filterItemList(cur.endPoint);
                }}
                className="foodCategory"
              >
                {cur.item}
              </button>
            )}
          </li>
        ))}
      </ul>
      <div className="recommendList">
        {recommendList?.list?.map((cur, idx) => (
          <Item />
        ))}
      </div>
    </div>
  );
};

const FILTER_MOCK = [
  { id: 1, item: '채소', endPoint: 'a' },
  { id: 2, item: '과일·견과·쌀', endPoint: 'b' },
  { id: 3, item: '수산·해산·건어물', endPoint: 'a' },
  { id: 4, item: '정육·계란', endPoint: 'b' },
  { id: 5, item: '국·반찬·메인요리', endPoint: 'a' },
  { id: 6, item: '샐러드·간편식', endPoint: 'b' },
  { id: 7, item: '면·양념·오일', endPoint: 'a' },
  { id: 8, item: '생수·음료·우유·커피', endPoint: 'a' },
  { id: 9, item: '간식·과자·떡', endPoint: 'b' },
  { id: 10, item: '베이커리·치즈·델리', endPoint: 'b' },
];

export default MainFilter;
