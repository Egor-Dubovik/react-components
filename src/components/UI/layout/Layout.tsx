import React, { Component, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ISearch } from 'types/search';
import Header from '../header/Header';
import classes from './Layout.module.css';

export const SearchContext = React.createContext({ query: '' });

class Layout extends Component {
  state = { query: '' };

  setSearchState(searchState: ISearch): void {
    this.setState(searchState);
  }

  render() {
    return (
      <>
        <SearchContext.Provider value={this.state}>
          <Header setSearch={this.setSearchState.bind(this)} />
          <main className={classes.main}>
            <div className="main__container">
              <Outlet />
            </div>
          </main>
          <footer className="footer">
            <div className="footer__container">footer</div>
          </footer>
        </SearchContext.Provider>
      </>
    );
  }
}
export default Layout;
