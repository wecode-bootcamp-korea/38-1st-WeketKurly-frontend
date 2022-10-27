import './Sort.scss';

function Sort({ sortTypes, clickSortType, productslength }) {
  return (
    <div className="sortBox">
      <div className="totalCount">총 {productslength}건</div>
      <ul className="sortTypes">
        {sortTypes.map(({ id, name }) => {
          return (
            <li key={id} className="sortType" onClick={() => clickSortType(id)}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sort;
