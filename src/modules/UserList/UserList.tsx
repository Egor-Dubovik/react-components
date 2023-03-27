import React, { Component } from 'react';
import UserItem from '../../components/UserItem/UserItem';
import { UserForm } from '../Form/Form';
import classes from './UserList.module.css';

interface IUserListProps {
  users: UserForm[];
}

class UserList extends Component<IUserListProps> {
  constructor(props: IUserListProps) {
    super(props);
  }

  render() {
    return (
      <ul className={classes.UerList}>
        {this.props.users?.map((user) => (
          <UserItem key={user.name} user={user} />
        ))}
      </ul>
    );
  }
}

export default UserList;
