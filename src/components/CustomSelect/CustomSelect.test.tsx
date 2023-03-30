import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CustomSelect from './CustomSelect';
import { useForm } from 'react-hook-form';

const options = {
  value: 'belarus',
  name: 'Belarus',
  id: 1,
};

// describe('testing CustomRadio', () => {
//   const { register } = useForm();
//   register('country', { required: true });
//   const inputRef = register('country');

//   it('check render of CustomRadio', () => {
//     const { container } = render(
//       <CustomSelect forwardedRef={inputRef} label={'select label'} options={[options]} />
//     );
//     expect(container).toBeInTheDocument();
//   });
// });
