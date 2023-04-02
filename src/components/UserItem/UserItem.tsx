import React, { FC } from 'react';
import { UserForm } from '../../modules/Form/Form';
import classes from './UserItem.module.css';

interface IUserItem {
  user: UserForm;
}

const UserItem: FC<IUserItem> = ({ user }) => {
  return (
    <li className={classes.UserItem}>
      <h3>Full name: {user.name}</h3>
      <p>Имя файла: {user.avatar}</p>
      <p>Country: {user.country}</p>
      <p>Birthday: {user.birthday + ''}</p>
      <p>Gender: {user.gender}</p>
      <p>Agree with the processing of data: {user.agreement + ''}</p>
    </li>
  );
};

export default UserItem;
