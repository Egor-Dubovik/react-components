import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import FormPage from './FormPage';

describe('testing FormPage', () => {
  it('check render of CustomRadio', () => {
    const { container } = render(<FormPage />);
    expect(container).toBeInTheDocument();
  });
});
