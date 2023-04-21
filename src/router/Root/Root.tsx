import React from 'react';
import Header from '../../modules/header/Header';
import routes from '../rotes';
import classes from './Root.module.css';

const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className="main__container">{routes}</div>
      </main>
      <footer className="footer">
        <div className="footer__container">footer</div>
      </footer>
    </>
  );
};

export default Root;
