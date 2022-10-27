import React from 'react';
import './TableInner.scss';

const TableInner = ({ name, data, korean }) => {
  return (
    <dl className="dList">
      <dt className="dTitle">{korean[name]}</dt>
      <dd className="dDescription">{data?.itemInfo[name]}</dd>
    </dl>
  );
};

export default TableInner;
