import React, { FormEvent } from 'react';
import classes from './MyInput.module.css';

interface IInputProps {
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
  value?: string;
}

function MyInput({ onChange, type, placeholder, value = '' }: IInputProps) {
  return (
    <input
      className={classes.SearchInput}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default MyInput;
