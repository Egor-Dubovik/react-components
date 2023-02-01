import React, { Component } from 'react';
import ButtonSwitchMenu from '../buttons/buttonSwitchMenu/ButtonSwitchMenu';
import Navbar from '../navbar/Navbar';
import SearchBar from '../searchBar/SearchBar';

interface IState {
  count: number;
}

interface ISearch {
  query: string; //"(query: string) => void"
}

interface IProps {
  setSearch: (searchState: ISearch) => void;
}

class Header extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <>
        <header className="header">
          <div className="header__container">
            <div className="header__logo logo">logo</div>
            <div className="header__menu menu">
              <Navbar />
              <SearchBar setSearch={this.props.setSearch} />
              <ButtonSwitchMenu />
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
