import React, { Component } from 'react';
import classes from './CustomRadio.module.css';

interface IProps {
  label: {
    main: string;
    variant1: string;
    variant2: string;
  };
  forwardedRef: React.Ref<HTMLInputElement>;
}

class CustomRadio extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <label className={classes.Label}>{this.props.label.main}:</label>
        <label className={classes.Label} htmlFor={this.props.label.variant1}>
          <input
            className={classes.Radio}
            id={this.props.label.variant1}
            value={this.props.label.variant1}
            name="name"
            type="radio"
            ref={this.props.forwardedRef}
            required
          />
          {this.props.label.variant1}
        </label>
        <label htmlFor={this.props.label.variant2}>
          <input
            className={classes.Radio}
            id={this.props.label.variant2}
            value={this.props.label.variant2}
            type="radio"
            name="name"
            ref={this.props.forwardedRef}
            required
          />
          {this.props.label.variant2}
        </label>
      </div>
    );
  }
}

export default CustomRadio;
