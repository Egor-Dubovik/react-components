import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../common/constants/app';
import classes from './Navbar.module.css';

const Navbar = (): JSX.Element => {
  return (
    <nav className={classes.Navbar}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.ActiveLink : classes.Link)}
        to={ROUTES.main}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.ActiveLink : classes.Link)}
        to={ROUTES.form}
      >
        Form
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.ActiveLink : classes.Link)}
        to={ROUTES.about}
      >
        About Us
      </NavLink>
    </nav>
  );
};

export default Navbar;
