import classes from './Navbar.module.css';

const Navbar = () => (
  <nav className={classes.navbar}>
    <h1>Bookstore CMS</h1>
    <ul className={classes.nav_links}>
      <li>BOOKS</li>
      <li>CATEGORIES</li>
    </ul>
  </nav>
);

export default Navbar;
