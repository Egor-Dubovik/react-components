import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <Link className={classes.Link} to="/">
        Home
      </Link>
      <Link className={classes.Link} to="/about">
        About Us
      </Link>
    </nav>
  );
};

export default Navbar;
