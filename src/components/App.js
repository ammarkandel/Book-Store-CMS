import './App.css';
import BooksForm from './containers/BooksForm';
import BooksList from './containers/BooksList';
import CategoryFilter from './containers/CategoryFilter';

const App = () => (
  <>
    <BooksForm />
    <CategoryFilter />
    <BooksList />
  </>
);

export default App;
