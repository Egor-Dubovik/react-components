import React, { FC } from 'react';
import UserItem from '../../components/UserItem/UserItem';
import { UserForm } from '../Form/Form';
import classes from './UserList.module.css';

interface IUserListProps {
  users: UserForm[];
}

const UserList: FC<IUserListProps> = ({ users }) => {
  return (
    <ul className={classes.UerList}>
      {users?.map((user) => (
        <UserItem key={user.name} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
