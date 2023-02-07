import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

import userEvent from '@testing-library/user-event';

describe('testing App', () => {
  it('check render App', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('check App routing', async () => {
    render(<App />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/About Us/i));
    expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
  });
});
