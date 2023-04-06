import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import MainPage from '../../pages/mainPage';
import { storage } from 'utils/localStorage';

describe('tests for serch', () => {
  it('check render of SearchInput', () => {
    const { getByPlaceholderText } = render(<MainPage />);
    const SearchInput = getByPlaceholderText('Search...');
    expect(SearchInput).toBeInTheDocument();
  });
});

describe('test serch and localstorage', () => {
  it('methods: set and get', () => {
    const { unmount, getByPlaceholderText } = render(<MainPage />);
    const SearchInput = getByPlaceholderText('Search...');
    fireEvent.input(SearchInput, {
      target: { value: 'macbook' },
    });
    unmount();
    expect(storage.get('Search')).toEqual('macbook');
  });
});
