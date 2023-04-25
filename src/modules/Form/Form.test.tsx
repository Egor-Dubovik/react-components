import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import FormPage from '../../pages/FormPage/FormPage';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from '../../app/store/store';

describe('Form', () => {
  it('should update input value when typing', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const input = getByPlaceholderText('fullname') as HTMLInputElement;
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('Date of birth is chosen', async () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const inputDate = getByLabelText(/Birthday:/i) as HTMLInputElement;
    // userEvent.type(inputDate, '1990-01-01');
    fireEvent.change(inputDate, { target: { value: '2021-10-01' } });
    expect(inputDate).toHaveValue('2021-10-01');
  });

  // it('Test option selection', () => {
  //   const { getByRole, getByText } = render(
  //     <Provider store={store}>
  //       <Form />
  //     </Provider>
  //   );
  //   const optionSelection = getByRole('combobox');
  //   userEvent.selectOptions(optionSelection, ['usa']);
  //   const optionUsa = getByText('USA') as HTMLOptionElement;
  //   const optionBelarus = getByText('Belarus') as HTMLOptionElement;
  //   expect(optionUsa.selected).toBe(true);
  //   expect(optionBelarus.selected).toBe(false);
  // });

  it('Test if Mail radio button is chosen', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const radio = getByRole('radio', { name: 'male' }) as HTMLInputElement;
    fireEvent.click(radio);
    expect(radio).toBeChecked();
  });

  it('Test Is agree', async () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('uploads a file', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const file = new File(['test file contents'], 'test.png', {
      type: 'image/png',
    });

    const input = getByTestId(/file/i) as HTMLInputElement;
    fireEvent.change(input, { target: { files: [file] } });

    expect(input).toHaveAttribute('type', 'file');
    expect(input).toHaveAttribute('accept', '.png,.jpg,.jpeg,.svg');
    expect(input.files?.[0]).toStrictEqual(file);
  });

  it('check input file error', async () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const submitButton = getByRole('button', { name: /submit/i });
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(getByText('Choose an file')).toBeInTheDocument();
  });
});
