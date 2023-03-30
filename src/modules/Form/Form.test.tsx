import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import FormPage from '../../pages/FormPage/FormPage';

const file = new File(['test'], 'test.png', { type: 'image/png' });
beforeEach(() => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
});

describe('Form', () => {
  it('should update input value when typing', () => {
    const setState = jest.fn();
    const { getByPlaceholderText } = render(<Form setUsers={setState} />);
    const input = getByPlaceholderText('fullname') as HTMLInputElement;
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('Date of birth is chosen', async () => {
    const setState = jest.fn();
    const { getByLabelText } = render(<Form setUsers={setState} />);
    const inputDate = getByLabelText(/Birthday:/i) as HTMLInputElement;
    // userEvent.type(inputDate, '1990-01-01');
    fireEvent.change(inputDate, { target: { value: '2021-10-01' } });
    expect(inputDate).toHaveValue('2021-10-01');
  });

  it('Test option selection', () => {
    const setState = jest.fn();
    const { getByRole, getByText } = render(<Form setUsers={setState} />);
    const optionSelection = getByRole('combobox');
    userEvent.selectOptions(optionSelection, ['usa']);
    const optionUsa = getByText('USA') as HTMLOptionElement;
    const optionBelarus = getByText('Belarus') as HTMLOptionElement;
    expect(optionUsa.selected).toBe(true);
    expect(optionBelarus.selected).toBe(false);
  });

  it('Test if Mail radio button is chosen', () => {
    const setState = jest.fn();
    const { getByRole } = render(<Form setUsers={setState} />);
    const radio = getByRole('radio', { name: 'male' }) as HTMLInputElement;
    fireEvent.click(radio);
    expect(radio).toBeChecked();
  });

  it('Test Is agree', async () => {
    const setState = jest.fn();
    const { getByRole } = render(<Form setUsers={setState} />);
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  // it('sheck render alert and for checkers', () => {
  //   const { getByText, getByRole, getByPlaceholderText, getByLabelText } = render(<FormPage />);

  //   const input = getByPlaceholderText('fullname') as HTMLInputElement;
  //   const inputDate = getByLabelText(/Birthday:/i) as HTMLInputElement;
  //   const optionSelection = getByRole('combobox');
  //   const radio = getByRole('radio', { name: 'male' }) as HTMLInputElement;
  //   const checkbox = getByRole('checkbox') as HTMLInputElement;
  //   const inputFile = screen.getByTestId(/file/i) as HTMLInputElement;

  //   userEvent.upload(inputFile, file);
  //   fireEvent.click(checkbox);
  //   fireEvent.click(radio);
  //   userEvent.selectOptions(optionSelection, ['usa']);
  //   fireEvent.change(inputDate, { target: { value: '2021-10-01' } });
  //   fireEvent.change(input, { target: { value: 'nametest' } });

  //   const submitButton = getByRole('button', { name: /submit/i });
  //   fireEvent.click(submitButton);

  //   const a = getByText('nametest');
  //   expect(a).toBeInTheDocument();
  // });
});
