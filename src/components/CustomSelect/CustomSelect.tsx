import React from 'react';
import { useController, Control } from 'react-hook-form';
import { UserForm } from '../../modules/Form/Form';
import classes from './CustomSelect.module.css';

export interface ChildProps {
  name: 'name' | 'birthday' | 'country' | 'agreement' | 'gender' | 'avatar';
  options: { value: string; name: string; id: number }[];
  control: Control<UserForm>;
}

const CustomSelect = ({ name, options, control }: ChildProps) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, rules: { required: 'Coose a country' } });

  return (
    <div className={classes.Box}>
      <label className={classes.Label} htmlFor={name}>
        {name}:
      </label>
      <select
        className={classes.Input}
        id={name}
        name={name}
        onChange={onChange}
        value={value as string}
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
};

export default CustomSelect;
