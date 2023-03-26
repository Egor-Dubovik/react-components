import React, { RefObject } from 'react';
import CustomRadio from '../../components/CustomRadio/CustomRadio';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import SubmitButton from '../../components/UI/buttons/SubmitButton/SubmitButton';
import { countryArray } from '../../data/countries';
import { checkUserForm } from '../../helpers/checkUserForm';
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

class Form extends React.Component {
  private formRef = React.createRef<HTMLFormElement>();
  private nameRef = React.createRef<HTMLInputElement>();
  private birthdayRef = React.createRef<HTMLInputElement>();
  private countryRef = React.createRef<HTMLSelectElement>();
  private agreementRef = React.createRef<HTMLInputElement>();
  private genderRef = React.createRef<HTMLInputElement>();
  private avatarRef = React.createRef<HTMLInputElement>();

  handleFormErrors = (data: UserForm): boolean => {
    const errorArray = checkUserForm(data);
    if (errorArray.length !== 0) {
      const errNessage = errorArray.reduce((acc, err, index) => {
        return acc + `${index + 1}. ${err}\n`;
      }, '');
      alert(`To submit the form correct the following errors:\n${errNessage}`);
      return true;
    }
    return false;
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: UserForm = {
      name: this.nameRef.current!.value,
      birthday: new Date(this.birthdayRef.current!.value),
      country: this.countryRef.current!.value,
      agreement: this.agreementRef.current!.checked,
      gender: this.genderRef.current!.checked ? 'male' : 'female',
      avatar: this.avatarRef.current!.files ? this.avatarRef.current!.files[0] : null,
    };

    const isFormError = this.handleFormErrors(data);
    if (isFormError) return;

    const prevUsers = JSON.parse(storage.get('users')) as UserForm[];
    this.formRef.current?.reset();
    if (!!prevUsers) {
      const users = JSON.stringify([...prevUsers, data]);
      storage.set('users', users);
      return;
    }
    storage.set('users', JSON.stringify([data]));
  };

  render() {
    return (
      <form className={classes.Form} onSubmit={this.handleSubmit} ref={this.formRef}>
        <input className={classes.Input} type="text" ref={this.nameRef} placeholder="fullname" />
        <div className={classes.Box}>
          <label className={classes.Label} htmlFor="birthday">
            Birthday:
          </label>
          <input className={classes.Input} type="date" id="birthday" ref={this.birthdayRef} />
        </div>
        <CustomSelect label="Country" options={countryArray} forwardedRef={this.countryRef} />
        <CustomRadio
          label={{ main: 'Gender', variant1: 'mail', variant2: 'femail' }}
          forwardedRef={this.genderRef}
        />
        <div className={classes.Agreement}>
          <input
            className={classes.Checkbox}
            type="checkbox"
            id="agreement"
            ref={this.agreementRef}
          />
          <label className={classes.AgreementLabel} htmlFor="agreement">
            I consent to my personal data
          </label>
        </div>
        <input
          className={classes.FileInput}
          type="file"
          accept=".png,.jpg,.jpeg,.svg"
          ref={this.avatarRef}
        />
        <SubmitButton />
      </form>
    );
  }
}

export default Form;
