import PropTypes from 'prop-types';
import RemoveButton from './containers/RemoveButton';

const Book = (props) => {
  const { id, category, title } = props;

  return (
    <>
      <tr>
        <span>{category}</span>
        <br />
        <span>{title}</span>
        <RemoveButton id={id} />
      </tr>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
