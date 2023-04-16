import React, { FC } from 'react';
import { UserData } from '../usersSlice';
import classes from './UserItem.module.css';

interface IUserItem {
  user: UserData;
}

const UserItem: FC<IUserItem> = ({ user }) => {
  return (
    <li data-testid="user-item" className={classes.UserItem}>
      <h3>Full name: {user.name}</h3>
      <div className={classes.AvatarBox}>
        <img className={classes.Avatar} src={user.avatar} alt="avatar" />
      </div>
      <p>Country: {user.country}</p>
      <p>Birthday: {user.birthday + ''}</p>
      <p>Gender: {user.gender}</p>
      <p>Agree with the processing of data: {user.agreement + ''}</p>
    </li>
  );
};

export default UserItem;
