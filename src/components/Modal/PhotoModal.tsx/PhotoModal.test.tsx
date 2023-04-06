import React from 'react';
import { render, screen } from '@testing-library/react';
import PhotoModal from './PhotoModal';
import { IPhotosResult } from '../../../types/cardsList';
import '@testing-library/jest-dom';

describe('PhotoModal', () => {
  const photo: IPhotosResult = {
    id: '123',
    urls: { small: 'https://example.com/image.jpg' },
    user: { username: 'JohnDoe', id: '651', first_name: 'John' },
    alt_description: 'Example Image',
    color: '#000000',
    created_at: '2021-08-23T12:00:00Z',
    likes: 42,
    liked_by_user: false,
  };

  it('renders the modal when isOpen is true', () => {
    const closeModal = jest.fn();
    render(<PhotoModal isOpen={true} onClose={closeModal} photo={photo} />);
    const modalElement = screen.getByTestId('photo-modal');
    expect(modalElement).toBeInTheDocument();
  });

  it('does not render the modal when isOpen is false', () => {
    const closeModal = jest.fn();
    let mockIsOpen = true;
    const { rerender } = render(
      <PhotoModal isOpen={mockIsOpen} onClose={closeModal} photo={photo} />
    );
    const modalElement = screen.getByTestId('photo-modal');
    expect(modalElement).toBeInTheDocument();

    closeModal();
    mockIsOpen = false;
    rerender(<PhotoModal isOpen={mockIsOpen} onClose={closeModal} photo={photo} />);
    expect(modalElement).not.toBeInTheDocument();
  });

  it('calls onClose when the close button or overlay are clicked', () => {
    const onCloseMock = jest.fn();
    render(<PhotoModal isOpen={true} onClose={onCloseMock} photo={photo} />);
    const closeButton = screen.getByRole('button', { name: 'Close' });
    const overlay = screen.getByTestId('overlay');
    closeButton.click();
    expect(onCloseMock).toHaveBeenCalledTimes(1);
    overlay.click();
    expect(onCloseMock).toHaveBeenCalledTimes(2);
  });
});
