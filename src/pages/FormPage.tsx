import React, { Component } from 'react';
import Form from '../modules/Form/Form';

interface IState {
  count: number;
}

class FormPage extends Component<Record<string, never>, IState> {
  state = { count: 0 };

  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}
export default FormPage;
