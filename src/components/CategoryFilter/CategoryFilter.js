import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { category } from '../../containers/BooksForm/BooksForm';
import classes from './CategoryFilter.module.css';

const CategoryFilter = (props) => {
  const { changeHandler } = props;
  const filterVal = useSelector((state) => state.book.filterVal);

  return (
    <select
      className={classes.select_category}
      onChange={(event) => changeHandler(event.target.value)}
    >
      <option value={filterVal}>{filterVal}</option>
      {category.map((item) => <option key={Math.random()} value={item}>{item}</option>)}
    </select>
  );
};

CategoryFilter.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
