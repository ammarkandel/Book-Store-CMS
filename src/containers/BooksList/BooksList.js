import { useSelector, useDispatch } from 'react-redux';
import Book from '../../components/Book/Book';
import { bookSliceActions } from '../../store/storeSlices/bookSlice';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import classes from './BooksList.module.css';

const BooksList = () => {
  const filter = useSelector((state) => state.book.filter);
  let booksData;
  if (filter) {
    booksData = useSelector((state) => state.book.filterBooks);
  } else {
    booksData = useSelector((state) => state.book.books);
  }

  const dispatch = useDispatch();
  const removeBookHandler = (id) => {
    dispatch(bookSliceActions.removeBook(id));
  };

  const categoryChangeHandler = (val) => {
    dispatch(bookSliceActions.changeFilter(val));
  };

  return (
    <>
      <CategoryFilter changeHandler={categoryChangeHandler} />
      <div className={classes.list_container}>
        <table>
          <tbody>
            <tr className={classes.books_list}>
              {booksData.map((item) => (
                <Book
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  category={item.category}
                  removeBook={removeBookHandler}
                />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BooksList;
