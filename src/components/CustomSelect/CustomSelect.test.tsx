// import React from 'react';
// import userEvent from '@testing-library/user-event';
// import { render } from '@testing-library/react';
// import Form from '../../modules/Form/Form';
// import '@testing-library/jest-dom/extend-expect';

// it('Test option selection', () => {
//   const setState = jest.fn();
//   const { getByRole, getByText } = render(<Form setUsers={setState} />);
//   const optionSelection = getByRole('combobox');
//   userEvent.selectOptions(optionSelection, ['usa']);
//   const optionUsa = getByText('USA') as HTMLOptionElement;
//   const optionBelarus = getByText('Belarus') as HTMLOptionElement;
//   expect(optionUsa.selected).toBe(true);
//   expect(optionBelarus.selected).toBe(false);
// });
