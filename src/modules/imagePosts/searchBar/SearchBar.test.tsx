import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import { store } from '../../../app/store/store';

describe('SearchBar component', () => {
  test('renders search input', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
  });

  test('updates search query on input change', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'Test Query' } });
    expect(searchInput.value).toBe('Test Query');
  });

  test('displays reset button when search input has text', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'Test Query' } });
    const resetButton = screen.getByTestId('reset-button');
    expect(resetButton).toBeInTheDocument();
  });

  test('resets search query on reset button click', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'Test Query' } });
    const resetButton = screen.getByTestId('reset-button');
    fireEvent.click(resetButton);
    expect(searchInput.value).toBe('');
  });
});
