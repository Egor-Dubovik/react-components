import React, { FC, useEffect, useState } from 'react';
import UserList from '../../modules/UserList/UserList';
import Form, { UserForm } from '../../modules/Form/Form';
import classes from './FormPage.module.css';
import { storage } from '../../utils/localStorage';

interface IState {
  users: UserForm[];
}

const FormPage: FC = () => {
  const [state, setState] = useState<IState>({ users: [] as UserForm[] });

  const setUserList = (users: UserForm[]): void => {
    setState({ users });
  };

  useEffect(() => {
    const users = JSON.parse(storage.get('users')) as UserForm[];
    setState({ users });
  }, []);

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
        <Form setUsers={setUserList} />
      </div>
      <UserList users={state.users} />
    </div>
  );
};

export default FormPage;
