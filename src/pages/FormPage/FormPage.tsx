import React, { Component } from 'react';
import Form from '../../modules/Form/Form';

import classes from './FormPage.module.css';

interface IState {
  count: number;
}

class FormPage extends Component<Record<string, never>, IState> {
  state = { count: 0 };

  render() {
    return (
      <div className={classes.PageForm}>
        <div className={classes.BoxImage}>
          <img
            className={classes.Image}
            src="https://source.unsplash.com/random"
            alt="random image"
          />
        </div>
        <Form />
      </div>
    );
  }
}
export default FormPage;
