import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookInfo } = props;

  return (
    <>
      {bookInfo.map((item) => (
        <td key={Math.random()}>
          Title:
          {item.title}
          || Categroy:
          {item.category}
        </td>
      ))}
    </>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.instanceOf(Array).isRequired,
};

export default Book;
