import React, { Component } from 'react';

interface IState {
  count: number;
}

class ClassComponent extends Component<{}, IState> {
  state = { count: 0 };

  render() {
    return <></>;
  }
}
export default ClassComponent;
