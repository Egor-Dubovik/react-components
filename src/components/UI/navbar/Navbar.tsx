import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="menu__navbar navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
    </nav>
  );
};

export default Navbar;
