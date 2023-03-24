import React, { Component, RefObject } from 'react';
import classes from './CustomSelect.module.css';

interface ChildProps {
  forwardedRef: React.Ref<HTMLSelectElement>;
  label: string;
  options: { value: string; name: string; id: number }[];
}

class CustomSelect extends Component<ChildProps> {
  constructor(props: ChildProps) {
    super(props);
  }

  render() {
    return (
      <div className={classes.Box}>
        <label className={classes.Label} htmlFor={this.props.label}>
          {this.props.label}:
        </label>
        <select
          className={classes.Input}
          id={this.props.label}
          ref={this.props.forwardedRef}
          required
        >
          {this.props.options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default CustomSelect;
