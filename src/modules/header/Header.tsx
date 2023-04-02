import React, { Component } from 'react';
import Navbar from '../../components/UI/navbar/Navbar';
import classes from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={classes.Header}>
        <div className={classes.Header__container}>
          <div className={classes.Logo}>RS SChool</div>
          <div className={classes.Menu}>
            <Navbar />
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
