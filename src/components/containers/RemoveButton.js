import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookSliceActions } from '../../store/storeSlices/book-slice';

const RemoveButton = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const removeBookHandler = () => {
    dispatch(bookSliceActions.removeBook(id));
  };

  return (
    <button type="button" onClick={removeBookHandler}>Remove</button>
  );
};

RemoveButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RemoveButton;
