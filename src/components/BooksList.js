// import classes from './BooksList.module.css';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const booksData = useSelector((state) => state.book.books);
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
