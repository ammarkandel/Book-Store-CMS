import './App.css';
import BooksForm from './BooksForm';
import BooksList from './BooksList';
import CategoryFilter from './CategoryFilter';

const App = () => (
  <>
    <CategoryFilter />
    <BooksForm />
    <BooksList />
  </>
);

export default App;
