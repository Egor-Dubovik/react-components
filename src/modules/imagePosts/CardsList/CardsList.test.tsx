import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CardsList from './CardsList';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../../app/store/store';

describe('CardsList', () => {
  it('renders loading state', async () => {
    render(
      <Provider store={store}>
        <CardsList />
      </Provider>
    );

    expect(screen.getByText('Load ng')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('No results')).not.toBeInTheDocument();
    });
  });
});
