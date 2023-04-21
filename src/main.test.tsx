import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './app/App';

describe('Index', () => {
  it('renders logo RS SChool', () => {
    render(<App />);
    expect(screen.getByText('RS SChool')).toBeInTheDocument();
  });
});
