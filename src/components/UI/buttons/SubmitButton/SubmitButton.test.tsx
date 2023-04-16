import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SubmitButton from './SubmitButton';

describe('testing CostomButton', () => {
  it('check render button and text in it', () => {
    const { container } = render(<SubmitButton text="submit" />);
    expect(screen.getByText(/submit/i)).toBeTruthy();
    expect(container).toBeInTheDocument();
  });
});
