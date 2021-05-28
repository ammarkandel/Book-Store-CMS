import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <main>{ children }</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
