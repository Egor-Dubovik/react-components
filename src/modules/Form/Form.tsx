import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import CustomRadio from '../../components/CustomRadio/CustomRadio';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import SubmitButton from '../../components/UI/buttons/SubmitButton/SubmitButton';
import { countryArray } from '../../data/countries';
import { storage } from '../../utils/localStorage';
import classes from './Form.module.css';

export interface UserForm {
  name: string;
  birthday: Date;
  country: string;
  agreement: boolean;
  gender: 'male' | 'female';
  avatar: File | null;
}

export interface IFormProps {
  setUsers: (users: UserForm[]) => void;
}

const Form: FC<IFormProps> = ({ setUsers }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UserForm>();

  const onSubmit = (data: UserForm) => {
    console.log(data);
    const prevUsers = JSON.parse(storage.get('users')) as UserForm[];
    const users = prevUsers ? [...prevUsers, data] : [data];
    storage.set('users', JSON.stringify(users));
    setUsers(users);
    reset();
  };

  return (
    <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="fullname"
        className={classes.Input}
        {...register('name', { required: 'Name is required' })}
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

      <div className={classes.Box}>
        <label className={classes.Label} htmlFor="birthday">
          Birthday:
        </label>
        <input
          className={classes.Input}
          type="date"
          id="birthday"
          {...register('birthday', { required: 'Birthday is required' })}
        />
        {errors.birthday && <p style={{ color: 'red' }}>{errors.birthday.message}</p>}
      </div>

      <CustomSelect name="country" options={countryArray} control={control} />

      <CustomRadio
        label={{ main: 'Gender', variant1: 'male', variant2: 'female' }}
        register={register}
      />
      {errors.gender && <p style={{ color: 'red' }}>{errors.gender.message}</p>}

      <div className={classes.Agreement}>
        <input
          className={classes.Checkbox}
          type="checkbox"
          id="agreement"
          {...register('agreement', { required: 'You should agree' })}
        />
        <label className={classes.AgreementLabel} htmlFor="agreement" data-testid="input-checkbox">
          I consent to my personal data
        </label>
        {errors.agreement && <p style={{ color: 'red' }}>{errors.agreement.message}</p>}
      </div>

      <input
        className={classes.FileInput}
        data-testid="file"
        type="file"
        accept=".png,.jpg,.jpeg,.svg"
        {...register('avatar', { required: 'Choose an file' })}
      />
      {errors.avatar && <p style={{ color: 'red' }}>{errors.avatar.message}</p>}

      <SubmitButton />
    </form>
  );
};

export default Form;
