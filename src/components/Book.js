import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookSliceActions } from '../store/storeSlices/book-slice';

const Book = (props) => {
  const { bookInfo } = props;
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(bookSliceActions.removeBook(bookInfo[0].id));
  };

  return (
    <>
      {bookInfo.map((item) => (
        <td key={item.id}>
          Title:
          {item.title}
          || Categroy:
          {item.category}
          <button type="button" onClick={removeBookHandler}>remove book</button>
        </td>
      ))}
    </>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.instanceOf(Array).isRequired,
};

export default Book;
