import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserItem from './UserItem';

export const testUser = {
  name: 'tim tim',
  birthday: new Date(),
  country: 'belarus',
  agreement: true,
  gender: 'male' as const,
  avatar: null,
};

describe('testing UserItem', () => {
  it('check render of UserItem', () => {
    const { container } = render(<UserItem user={testUser} />);
    expect(screen.getByText(/Full name: tim tim/i)).toBeTruthy();
    expect(container).toBeInTheDocument();
  });
});
