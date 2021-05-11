import { useDispatch } from 'react-redux';
import classes from './BooksForm.module.css';
import { bookSliceActions } from '../store/storeSlices/book-slice';

export const categroy = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const dispatch = useDispatch();

  const submitBooksHandler = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const category = event.target.category.value;

    dispatch(bookSliceActions.createBook({ id: Math.random(), title, category }));
  };

  return (
    <section className={classes.form_section}>
      <form className={classes.book_form} onSubmit={submitBooksHandler}>
        <label htmlFor="title">
          Title :
          <input type="text" name="title" className={classes.inputs} />
        </label>
        <label htmlFor="category">
          Categroy :
          <select className={classes.inputs} name="category">
            {categroy.map((item) => (
              <option key={Math.random()} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className={classes.submit_btn}>Submit</button>
      </form>
    </section>
  );
};

export default BooksForm;
