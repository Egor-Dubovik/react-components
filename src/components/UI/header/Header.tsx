import React, { Component } from 'react';
import { ISearchProps } from 'types/search';
import Navbar from '../navbar/Navbar';
import SearchBar from '../searchBar/SearchBar';
import classes from './Header.module.css';

class Header extends Component<ISearchProps> {
  constructor(props: ISearchProps) {
    super(props);
  }

  render() {
    return (
      <>
        <header className={classes.Header}>
          <div className={classes.Header__container}>
            <div className={classes.Logo}>RS SChool</div>
            <div className={classes.Menu}>
              <Navbar />
            </div>
            <SearchBar setSearch={this.props.setSearch} />
          </div>
        </header>
      </>
    );
  }
}
export default Header;
