import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserList from './UserList';

const users = [
  {
    name: 'John',
    birthday: new Date(),
    country: 'USA',
    agreement: true,
    gender: 'male',
    avatar: 'avatar1.png',
  },
  {
    name: 'Jane',
    birthday: new Date(),
    country: 'Canada',
    agreement: false,
    gender: 'female',
    avatar: 'avatar2.png',
  },
];

const mockStore = configureStore([]);

describe('UserList', () => {
  it('renders a list of users', () => {
    const store = mockStore({
      users: {
        data: users,
      },
    });
    const { getByRole, getAllByTestId } = render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );
    const userListElement = getByRole('list');
    expect(userListElement).toBeInTheDocument();
    expect(userListElement.children.length).toBe(users.length);
    const userItems = getAllByTestId('user-item');
    expect(userItems.length).toBe(users.length);
    userItems.forEach((userItem, index) => {
      expect(userItem).toHaveTextContent(users[index].name);
    });
  });
});
