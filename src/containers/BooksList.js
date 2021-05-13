/* eslint-disable */
// import classes from './BooksList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { bookSliceActions } from '../store/storeSlices/book-slice';

const BooksList = () => {
  const filter = useSelector((state) => state.book.filter);
  let booksData;

  if (filter === true) {
    booksData = useSelector((state) => state.book.filterBooks);
  } else {
    booksData = useSelector((state) => state.book.books);
  }

  const dispatch = useDispatch();
  const removeBookHandler = (id) => {
    dispatch(bookSliceActions.removeBook(id));
  };

  return (
    <>
      <table>
        <tbody>
          {booksData.map((item) => (
            <Book key={item.id} title={item.title} id={item.id} category={item.category} removeBook={removeBookHandler} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
