import './App.css';
import BooksForm from '../../containers/BooksForm/BooksForm';
import BooksList from '../../containers/BooksList/BooksList';
import Navbar from '../Navbar/Navbar';

const App = () => (
  <>
    <Navbar />
    <BooksList />
    <BooksForm />
  </>
);

export default App;
