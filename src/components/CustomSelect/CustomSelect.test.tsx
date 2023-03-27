import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CustomSelect from './CustomSelect';

const options = {
  value: 'belarus',
  name: 'Belarus',
  id: 1,
};

describe('testing CustomRadio', () => {
  const inputRef = jest.fn();

  it('check render of CustomRadio', () => {
    const { container } = render(
      <CustomSelect forwardedRef={inputRef} label={'select label'} options={[options]} />
    );
    expect(container).toBeInTheDocument();
  });
});
