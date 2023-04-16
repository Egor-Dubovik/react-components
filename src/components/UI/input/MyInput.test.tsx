import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyInput from './MyInput';

describe('MyInput', () => {
  it('should render an input element with the given type and placeholder', () => {
    render(<MyInput onChange={() => {}} type="text" placeholder="Search" />);
    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should update its value when changed', () => {
    const handleChange = jest.fn();
    render(<MyInput onChange={handleChange} type="text" placeholder="some name" />);
    const inputName = screen.getByPlaceholderText('some name') as HTMLInputElement;
    userEvent.type(inputName, 'Jhon');
    expect(handleChange).toHaveBeenCalledTimes(4);
  });
});
