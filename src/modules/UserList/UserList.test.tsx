import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from './UserList';
import { testUser } from '../../components/UserItem/UserItem.test';

describe('uesr list', () => {
  it('test render user list', () => {
    const { container } = render(<UserList users={[testUser]} />);
    expect(screen.getAllByText(/Full name: tim tim/i)).toBeTruthy();
    expect(container).toBeInTheDocument();
  });
});
