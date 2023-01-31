import React, { Component } from 'react';
import ButtonSwitchMenu from '../buttons/buttonSwitchMenu/ButtonSwitchMenu';
import Navbar from '../navbar/Navbar';

interface IState {
  count: number;
}

class Header extends Component {
  state = { count: 0 };

  render() {
    return (
      <>
        <header className="header">
          <div className="header__container">
            <div className="header__logo logo">logo</div>
            <div className="header__menu menu">
              <Navbar />
              <ButtonSwitchMenu />
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
