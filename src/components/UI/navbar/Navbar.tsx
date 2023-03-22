import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <NavLink className={({ isActive }) => (isActive ? classes.ActiveLink : classes.Link)} to="/">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.ActiveLink : classes.Link)}
        to="/about"
      >
        About Us
      </NavLink>
    </nav>
  );
};

export default Navbar;
