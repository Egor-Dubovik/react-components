import React from 'react';
import { act, render, screen } from '@testing-library/react';
import Image from './Image';
import '@testing-library/jest-dom';

describe('Image', () => {
  test('renders with the correct src and alt attributes', () => {
    render(<Image src="test.jpg" alt="Test Image" />);
    const imageElement = screen.getByAltText('Test Image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'test.jpg');
  });

  test('displays loader while image is loading', () => {
    render(<Image src="test.jpg" alt="Test Image" />);
    const loaderElement = screen.getByTestId('simple-loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('should remove the loader when the image has loaded', async () => {
    render(<Image src="test.jpg" />);

    const loader = screen.getByTestId('simple-loader');
    const image = screen.getByRole('img');

    expect(loader).toBeInTheDocument();
    await act(async () => {
      image.dispatchEvent(new Event('load'));
    });
    expect(loader).not.toBeInTheDocument();
  });
});
