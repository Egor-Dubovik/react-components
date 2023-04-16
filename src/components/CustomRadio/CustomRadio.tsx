import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { UserData } from '../../modules/UserList/usersSlice';
import classes from './CustomRadio.module.css';

interface IProps {
  label: {
    main: string;
    variant1: string;
    variant2: string;
  };
  register: UseFormRegister<UserData>;
}

const CustomRadio: FC<IProps> = ({ label, register }) => {
  return (
    <div>
      <label className={classes.Label}>{label.main}:</label>
      <label className={classes.Label} htmlFor={label.variant1}>
        <input
          className={classes.Radio}
          id={label.variant1}
          value={label.variant1}
          type="radio"
          {...register('gender', { required: 'Choose gender' })}
        />
        {label.variant1}
      </label>
      <label htmlFor={label.variant2}>
        <input
          className={classes.Radio}
          id={label.variant2}
          value={label.variant2}
          type="radio"
          {...register('gender')}
        />
        {label.variant2}
      </label>
    </div>
  );
};

export default CustomRadio;
