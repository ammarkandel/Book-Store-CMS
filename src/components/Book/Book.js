/* eslint-disable */
import PropTypes from 'prop-types';
import classes from './Book.module.css';

const Book = (props) => {
  const {
    id, category, title, removeBook,
  } = props;

  return (
    <>
      <td className={classes.book_card}>
        <div>
          <p>{category}</p>
          <h2>{title}</h2>
          <ul>
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
        <div>
          <div className={classes.oval}></div>
          <p>
            <span className={classes.percent}>0%</span>
            <p>completed</p>
          </p>
        </div>
        <div className={classes.about_book}>
          <p>CURRENT CHAPTER</p>
          <h4>Introduction</h4>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </td>
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
