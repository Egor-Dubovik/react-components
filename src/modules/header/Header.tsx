import React, { Component, useEffect, useState } from 'react';
import { ISearchProps } from 'types/search';
import Navbar from '../../components/UI/navbar/Navbar';
import SearchBar from '../../components/searchBar/SearchBar';
import classes from './Header.module.css';
import { useLocation } from 'react-router-dom';

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
