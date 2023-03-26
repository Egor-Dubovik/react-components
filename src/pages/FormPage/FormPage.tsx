import React, { Component } from 'react';
import UserList from '../../modules/UserList/UserList';
import Form, { UserForm } from '../../modules/Form/Form';
import classes from './FormPage.module.css';
import { storage } from '../../utils/localStorage';

interface IState {
  users: UserForm[];
}

class FormPage extends Component<Record<string, never>, IState> {
  state = { users: [] as UserForm[] };

  setUserList(users: UserForm[]): void {
    this.setState({ users });
  }

  componentDidMount = (): void => {
    const users = JSON.parse(storage.get('users')) as UserForm[];
    this.setState({ users });
  };

  render() {
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
          <Form setUsers={this.setUserList.bind(this)} />
        </div>
        <UserList users={this.state.users} />
      </div>
    );
  }
}
export default FormPage;
