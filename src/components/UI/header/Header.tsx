import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';

interface IState {
  count: number;
}

class Header extends Component {
  state = { count: 0 };

  render() {
    return (
      <>
        <header>
          <Navbar />
        </header>
      </>
    );
  }
}
export default Header;
