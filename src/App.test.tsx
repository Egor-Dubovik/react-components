import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import CardsList from 'components/UI/CardsList/CardsList';
import cardJson from './data/products.json';
import { ICardsListProps, ICardsListState } from './types/cardsList';
import userEvent from '@testing-library/user-event';
import { Link, MemoryRouter } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import { InitialEntry } from '@remix-run/router';

describe('testing App', () => {
  it('check render App', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('check App routing', async () => {
    render(<App />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/About Us/i));
    expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
  });
});
