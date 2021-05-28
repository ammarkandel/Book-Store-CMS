import './App.css';
import BooksForm from '../../containers/BooksForm/BooksForm';
import BooksList from '../../containers/BooksList/BooksList';
import Layout from '../Layout/Layout';

const App = () => (
  <Layout>
    <BooksList />
    <BooksForm />
  </Layout>
);

export default App;
