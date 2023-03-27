import React, { Component } from 'react';
import classes from './SubmitButton.module.css';

interface ISubmitButtonProps {
  text?: string;
}

class SubmitButton extends Component<ISubmitButtonProps, Record<string, never>> {
  constructor(props: ISubmitButtonProps) {
    super(props);
  }

  render() {
    return (
      <button className={classes.Button} type="submit" name="submit">
        {this.props.text ? this.props.text : 'Submit'}
      </button>
    );
  }
}

export default SubmitButton;
