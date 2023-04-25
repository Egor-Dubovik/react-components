import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../modules/footer/Footer';
import Header from '../modules/header/Header';

const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
