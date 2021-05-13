import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    id, category, title, removeBook,
  } = props;

  return (
    <>
      <tr>
        <td>
          {category}
          {title}
          <button type="button" onClick={() => removeBook(id)}>Remove</button>
        </td>
      </tr>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
