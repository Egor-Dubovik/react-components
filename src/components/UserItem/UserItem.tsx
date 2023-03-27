import React, { Component } from 'react';
import classes from './UserItem.module.css';

interface IUserItem {
  user: {
    name: string;
    birthday: Date;
    country: string;
    agreement: boolean;
    gender: 'male' | 'female';
    avatar: File | null;
  };
}

class UserItem extends Component<IUserItem> {
  constructor(props: IUserItem) {
    super(props);
  }

  render() {
    return (
      <>
        <li className={classes.UserItem}>
          <h3>Full name: {this.props.user.name}</h3>
          <p>Имя файла: {this.props.user.avatar?.name}</p>
          <p>Country: {this.props.user.country}</p>
          <p>Birthday: {this.props.user.birthday + ''}</p>
          <p>Gender: {this.props.user.gender}</p>
          <p>Agree with the processing of data: {this.props.user.agreement + ''}</p>
        </li>
      </>
    );
  }
}

export default UserItem;
