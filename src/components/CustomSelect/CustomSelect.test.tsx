import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import Form from '../../modules/Form/Form';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../app/store/store';

it('Test option selection', () => {
  const { getByRole, getByText } = render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  const optionSelection = getByRole('combobox');
  userEvent.selectOptions(optionSelection, ['usa']);
  const optionUsa = getByText('USA') as HTMLOptionElement;
  const optionBelarus = getByText('Belarus') as HTMLOptionElement;
  expect(optionUsa.selected).toBe(true);
  expect(optionBelarus.selected).toBe(false);
});
