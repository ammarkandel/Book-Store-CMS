import { useDispatch } from 'react-redux';
import { categroy } from './BooksForm';
import { bookSliceActions } from '../../store/storeSlices/book-slice';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const filterValHandler = (event) => {
    dispatch(bookSliceActions.changeFilter(event.target.value));
  };

  return (
    <select onChange={filterValHandler}>
      <option value="All">All</option>
      {categroy.map((item) => (
        <option key={Math.random()} value={item}>{item}</option>
      ))}
    </select>
  );
};

export default CategoryFilter;
