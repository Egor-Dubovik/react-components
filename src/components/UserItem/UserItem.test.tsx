import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserItem from './UserItem';
import FormPage from '../../pages/FormPage/FormPage';

const user = {
  name: 'tim',
  birthday: new Date(),
  country: 'belarus',
  agreement: true,
  gender: 'male' as const,
  avatar: null,
};

describe('testing UserItem', () => {
  it('check render of UserItem', () => {
    const { container } = render(<UserItem user={user} />);
    expect(screen.getByText(/Full name: tim/i)).toBeTruthy();
    expect(container).toBeInTheDocument();
  });
});
