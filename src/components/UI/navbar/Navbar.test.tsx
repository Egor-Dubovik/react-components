import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { ROUTES } from '../../../common/constants/app';

describe('Navbar component', () => {
  test('renders navbar links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    const formLink = screen.getByText('Form');
    const aboutLink = screen.getByText('About Us');
    expect(homeLink).toBeInTheDocument();
    expect(formLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  test('active link has active class', () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.form]}>
        <Navbar />
      </MemoryRouter>
    );
    const activeLink = screen.getByText('Form');
    expect(activeLink).toHaveClass('ActiveLink');
  });
});
