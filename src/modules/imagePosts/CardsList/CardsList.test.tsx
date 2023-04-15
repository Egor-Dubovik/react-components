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

  //   it('renders error state', async () => {
  //     jest.mock('./cardsListAPI', () => ({
  //       useGetCardListQuery: () => ({
  //         data: undefined,
  //         isLoading: false,
  //         error: { data: { errors: ['Not found'] } },
  //       }),
  //     }));
  //     render(
  //       <Provider store={store}>
  //         <CardsList />
  //       </Provider>
  //     );
  //     expect(await screen.findByText('Error: Not found')).toBeInTheDocument();
  //   });

  it('renders no results state', async () => {
    jest.mock('./cardsListAPI', () => ({
      useGetCardListQuery: () => ({
        data: { results: [] },
        isLoading: false,
        error: undefined,
      }),
    }));
    render(
      <Provider store={store}>
        <CardsList />
      </Provider>
    );
    expect(await screen.findByText('No results')).toBeInTheDocument();
  });

  //   it('renders results', async () => {
  //     const results = [
  //       { id: 1, url: 'https://example.com/photo1.jpg', user: { username: 'Pol' } },
  //       { id: 2, url: 'https://example.com/photo2.jpg', user: { username: 'Pol-2' } },
  //     ];
  //     jest.mock('./cardsListAPI', () => ({
  //       useGetCardListQuery: () => ({
  //         data: { results: results },
  //         isLoading: false,
  //         error: undefined,
  //       }),
  //     }));
  //     const { getByText } = render(
  //       <Provider store={store}>
  //         <CardsList />
  //       </Provider>
  //     );
  // await waitFor(() => {
  //   expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  // });
  // expect(getByText('Author: Pol')).toBeInTheDocument();
  // expect(screen.getByText('Photo 2')).toBeInTheDocument();
  //   });
});
