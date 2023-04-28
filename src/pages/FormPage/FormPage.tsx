import React from 'react';
import UserList from '../../modules/UserList/UserList';
import Form from '../../modules/Form/Form';
import classes from './FormPage.module.css';

const FormPage = (): JSX.Element => {
  return (
    <div className={classes.PageForm}>
      <div className={classes.FormBox}>
        <div className={classes.BoxImage}>
          <img
            className={classes.Image}
            src="https://source.unsplash.com/random"
            alt="random image"
          />
        </div>
        <Form />
      </div>
      <UserList />
    </div>
  );
};

export default FormPage;
