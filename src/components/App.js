import './App.css';
import BooksForm from './BooksForm';
import BooksList from './BooksList';
import CategoryFilter from './CategoryFilter';

const App = () => (
  <>
    <BooksForm />
    <CategoryFilter />
    <BooksList />
  </>
);

export default App;
