import PropTypes from 'prop-types';
import RemoveButton from './containers/RemoveButton';

const Book = (props) => {
  const { id, category, title } = props;

  return (
    <>
      <div>
        {category}
        {title}
        <RemoveButton id={id} />
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
