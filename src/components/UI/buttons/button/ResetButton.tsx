import React, { FC, ReactNode } from 'react';
import classes from './ResetButton.module.css';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    React.AriaAttributes {}

export const ResetButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={classes.ResetButton} {...props}>
      {children}
    </button>
  );
};
