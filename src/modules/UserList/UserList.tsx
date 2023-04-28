import React from 'react';
import { useAppSelector } from '../../app/hooks/hooks';
import UserItem from './UserItem/UserItem';
import classes from './UserList.module.css';
import { selectUsers } from './usersSlice';

const UserList: React.FC = () => {
  const users = useAppSelector(selectUsers);

  return (
    <ul className={classes.UerList}>
      {users?.map((user) => (
        <UserItem key={user.name} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
