import { useDispatch, useSelector } from 'react-redux';
import { bookSliceActions } from '../store/storeSlices/bookSlice';
import { category } from '../containers/BooksForm';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const filterVal = useSelector((state) => state.book.filterVal);

  const categoryChangeHandler = (event) => {
    dispatch(bookSliceActions.changeFilter(event.target.value));
  };

  return (
    <select onChange={categoryChangeHandler}>
      <option value={filterVal}>{filterVal}</option>
      {category.map((item) => <option key={Math.random()} value={item}>{item}</option>)}
    </select>
  );
};

export default CategoryFilter;
