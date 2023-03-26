import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import CustomRadio from './CustomRadio';

const label = {
  main: 'test1',
  variant1: 'test1.0',
  variant2: 'test2.0',
};

describe('testing CustomRadio', () => {
  const inputRef = jest.fn();

  it('check render of CustomRadio', () => {
    const { container } = render(<CustomRadio label={label} forwardedRef={inputRef} />);
    expect(container).toBeInTheDocument();
  });
});
