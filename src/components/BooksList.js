// import classes from './BooksList.module.css';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const filter = useSelector((state) => state.book.filter);
  let booksData;

  if (filter === true) {
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
