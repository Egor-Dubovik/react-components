import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  test('should update input value when typing', () => {
    const setState = jest.fn();
    const { getByPlaceholderText } = render(<Form setUsers={setState} />);
    const input = getByPlaceholderText('fullname') as HTMLInputElement;
    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});
