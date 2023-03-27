import React, { FC, ButtonHTMLAttributes, AriaAttributes, DetailedHTMLProps } from 'react';
import classes from './ResetButton.module.css';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    AriaAttributes {}

export const ResetButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={classes.ResetButton} {...props}>
      {children}
    </button>
  );
};
