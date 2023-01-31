import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>footer</footer>
    </>
  );
};

export default Layout;
