import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardsList from 'modules/CardsList/CardsList';
import cardJson from '../../data/products.json';

// describe('card list', () => {
//   it('test render card list and search elemtnts', () => {
//     const { container } = render(<CardsList products={cardJson.laptops} searchQuery={'ACER'} />);
//     expect(screen.getAllByText(/ACER/i)).toBeTruthy();
//     expect(container).toBeInTheDocument();
//   });
// });
