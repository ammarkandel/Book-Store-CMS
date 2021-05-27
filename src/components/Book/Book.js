import PropTypes from 'prop-types';
import classes from './Book.module.css';

const Book = (props) => {
  const {
    id, category, title, removeBook,
  } = props;

  return (
    <>
      <tr>
        <td className={classes.book_card}>
          <div>
            <span>{category}</span>
            <h1>{title}</h1>
            <ul className={classes.actions_list}>
              <li>
                <button type="button">Comments</button>
              </li>
              <li>
                <button type="button" onClick={() => removeBook(id)}>Remove</button>
              </li>
              <li>
                <button type="button">Edit</button>
              </li>
            </ul>
          </div>
          <div className={classes.completed}>
            <div>0%</div>
            <span>Completed</span>
          </div>
          <div className={classes.progress}>
            <p>CURRENT CHAPTER</p>
            <p>Introduction</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
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
