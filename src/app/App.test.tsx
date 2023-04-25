import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

describe('testing App', () => {
  it('check render App', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
