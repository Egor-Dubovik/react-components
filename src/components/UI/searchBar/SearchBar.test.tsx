import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';
import MyInput from '../input/MyInput';
import MainPage from '../../../pages/MainPage';
import { storage } from 'utils/localStorage';

describe('tests for serch', () => {
  it('check render of SearchInput', () => {
    const { getByPlaceholderText } = render(<MainPage />);
    const SearchInput = getByPlaceholderText('Search...');
    expect(SearchInput).toBeInTheDocument();
  });

  it('check search elemtnts', async () => {
    const { getByPlaceholderText } = render(<MainPage />);
    const SearchInput = getByPlaceholderText('Search...');
    userEvent.type(SearchInput, 'acer swift 3x');
    expect(await screen.findByText(/swift 3x/i)).toBeInTheDocument();
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
