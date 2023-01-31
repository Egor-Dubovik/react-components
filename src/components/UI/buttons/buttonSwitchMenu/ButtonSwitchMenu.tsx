import React, { Component } from 'react';
import style from './ButtonSwitchMenu.module.css';

class ButtonSwitchMenu extends Component {
  render() {
    return (
      <>
        <button type="button" className={style.ButtonSwitchMenu}>
          <span></span>
        </button>
      </>
    );
  }
}
export default ButtonSwitchMenu;
