// import classes from './BooksList.module.css';
import { useSelector } from 'react-redux';
import Book from './Book';
import { count } from './CategoryFilter';

const BooksList = () => {
  let booksData;
  if (count > 0) {
    booksData = useSelector((state) => state.book.filterBooks);
  } else {
    booksData = useSelector((state) => state.book.books);
  }
  return (
    <table>
      <tbody>
        <tr>
          <Book bookInfo={booksData} />
        </tr>
      </tbody>
    </table>
  );
};

export default BooksList;
