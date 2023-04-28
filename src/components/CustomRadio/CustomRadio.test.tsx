import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import CustomRadio from './CustomRadio';

const label = {
  main: 'test1',
  variant1: 'test1.0',
  variant2: 'test2.0',
};

describe('testing CustomRadio', () => {
  const inputRef = vi.fn();

  it('check render of CustomRadio', () => {
    const { container } = render(<CustomRadio label={label} register={inputRef} />);
    expect(container).toBeInTheDocument();
  });
});
