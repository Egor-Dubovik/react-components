import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from 'components/UI/navbar/Navbar';

test('renders learn react link', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
