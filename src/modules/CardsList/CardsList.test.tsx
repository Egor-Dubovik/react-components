import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardsList from 'modules/CardsList/CardsList';
import cardJson from '../../data/products.json';
import { ICardsListProps, ICardsListState } from 'types/cardsList';

describe('card list', () => {
  it('test render card list and search elemtnts', () => {
    const { container } = render(<CardsList products={cardJson.laptops} searchQuery={'ACER'} />);
    expect(screen.getAllByText(/ACER/i)).toBeTruthy();
    expect(container).toBeInTheDocument();
  });

  it('test getDerivedStateFromProps of cardList', () => {
    const props = { products: [], searchQuery: '' };
    const state = { search: '' };
    const result = CardsList.getDerivedStateFromProps(
      props as ICardsListProps,
      state as ICardsListState
    );
    expect(result).toEqual({ search: '', productArray: [] });
  });
});
