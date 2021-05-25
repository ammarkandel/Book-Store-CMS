import { useDispatch } from 'react-redux';
import classes from './BooksForm.module.css';
import { bookSliceActions } from '../store/storeSlices/bookSlice';

export const category = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const dispatch = useDispatch();
  const bookInfo = { id: Math.random(), title: '', category: 'Action' };

  const titleChangeHandler = (event) => {
    bookInfo.title = event.target.value;
  };

  const categoryChangeHandler = (event) => {
    bookInfo.category = event.target.value;
  };

  const submitBooksHandler = (event) => {
    event.preventDefault();

    dispatch(bookSliceActions.createBook({
      id: Math.random(),
      title: bookInfo.title,
      category: bookInfo.category,
    }));
  };

  return (
    <section className={classes.form_section}>
      <form className={classes.book_form} onSubmit={submitBooksHandler}>
        <label htmlFor="title">
          Title :
          <input
            type="text"
            onChange={titleChangeHandler}
            className={classes.inputs}
          />
        </label>
        <label htmlFor="category">
          Categroy :
          <select
            className={classes.inputs}
            onChange={categoryChangeHandler}
          >
            {category.map((item) => (
              item !== 'All'
              && (
              <option key={Math.random()} value={item}>
                {item}
              </option>
              )
            ))}
          </select>
        </label>
        <button type="submit" className={classes.submit_btn}>Submit</button>
      </form>
    </section>
  );
};

export default BooksForm;
