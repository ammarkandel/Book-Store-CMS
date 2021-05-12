// import classes from './BooksList.module.css';
import { useSelector } from 'react-redux';
import Book from '../Book';

const BooksList = () => {
  const filter = useSelector((state) => state.book.filter);
  let booksData;

  if (filter === true) {
    booksData = useSelector((state) => state.book.filterBooks);
  } else {
    booksData = useSelector((state) => state.book.books);
  }

  return (
    <>
      <table>
        {booksData.map((item) => (
          <Book key={item.id} title={item.title} id={item.id} category={item.category} />
        ))}
      </table>
    </>
  );
};

export default BooksList;
