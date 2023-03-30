import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CustomSelect, { ChildProps } from './CustomSelect';
import { useForm } from 'react-hook-form';
import { UserForm } from '../../modules/Form/Form';

// describe('testing CustomRadio', () => {
//   const props: ChildProps = {
//     name: 'country',
//     options: [
//       { value: 'us', name: 'United States', id: 1 },
//       { value: 'ca', name: 'Canada', id: 2 },
//     ],
//     control: useForm<UserForm>().control,
//   };

//   it('check render of CustomRadio', () => {
//     render(<CustomSelect {...props} />);
//     const usOption = screen.getByText('United States') as HTMLSelectElement;
//     expect(usOption).toBeInTheDocument();
//     expect(usOption.value).toBe('us');
//   });
// });
