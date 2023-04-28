import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/hooks/hooks';
import CustomRadio from '../../components/CustomRadio/CustomRadio';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import SubmitButton from '../../components/UI/buttons/SubmitButton/SubmitButton';
import { countryArray } from '../../data/countries';
import { setUser, UserData } from '../UserList/usersSlice';
import classes from './Form.module.css';

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit = (userData: UserData) => {
    const file = userData.avatar[0] as unknown as File;
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      dispatch(setUser({ ...userData, avatar: fileUrl }));
      reset();
    }
  };

  return (
    <form id="user-form" className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
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
        {...register('avatar', { required: 'Choose a file' })}
      />
      {errors.avatar && <p style={{ color: 'red' }}>{errors.avatar.message}</p>}

      <SubmitButton />
    </form>
  );
};

export default Form;
