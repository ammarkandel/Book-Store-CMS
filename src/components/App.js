import './App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Navbar from './Navbar';

const App = () => (
  <>
    <Navbar />
    <BooksList />
    <BooksForm />
  </>
);

export default App;
