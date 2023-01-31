import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import classes from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className="main__container">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="footer__container">footer</div>
      </footer>
    </>
  );
};

export default Layout;
