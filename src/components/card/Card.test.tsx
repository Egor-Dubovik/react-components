import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

const photo = {
  alt_description: 'a vase filled with pink flowers next to a laptop',
  blur_hash: 'L8F}TM$+.9X-[9xa9FTe:PD44:Eg',
  color: '#8c400c',
  created_at: '2023-04-04T18:55:10Z',
  description: 'Cozy cabin interior (IG: @clay.banks)',
  height: 2800,
  id: '82O37brTLzE',
  liked_by_user: false,
  likes: 0,
  links: {
    self: 'https://api.unsplash.com/photos/82O37brTLzE',
    html: 'https://unsplash.com/photos/82O37brTLzE',
    download:
      'https://unsplash.com/photos/82O37brTLzE/download?i…wxfHNlYXJjaHwxfHxob21lfGVufDB8fDJ8fDE2ODA2ODMxMzM',
    download_location:
      'https://api.unsplash.com/photos/82O37brTLzE/downlo…wxfHNlYXJjaHwxfHxob21lfGVufDB8fDJ8fDE2ODA2ODMxMzM',
  },
  promoted_at: null,
  tags: [{}, {}, {}],
  topic_submissions: {},
  updated_at: '2023-04-05T04:39:51Z',
  urls: {
    raw: 'https://images.unsplash.com/photo-1680634326749-40…Hxob21lfGVufDB8fDJ8fDE2ODA2ODMxMzM&ixlib=rb-4.0.3',
    full: 'https://images.unsplash.com/photo-1680634326749-40…1lfGVufDB8fDJ8fDE2ODA2ODMxMzM&ixlib=rb-4.0.3&q=85',
    regular:
      'https://images.unsplash.com/photo-1680634326749-40…DB8fDJ8fDE2ODA2ODMxMzM&ixlib=rb-4.0.3&q=80&w=1080',
    small:
      'https://images.unsplash.com/photo-1680634326749-40…fDB8fDJ8fDE2ODA2ODMxMzM&ixlib=rb-4.0.3&q=80&w=400',
    thumb:
      'https://images.unsplash.com/photo-1680634326749-40…fDB8fDJ8fDE2ODA2ODMxMzM&ixlib=rb-4.0.3&q=80&w=200',
  },
  user: {
    id: 'rUXhgOTUmb0',
    updated_at: '2023-04-05T04:39:51Z',
    username: 'claybanks',
    name: 'Clay Banks',
    first_name: 'Clay',
  },
  width: 4200,
};

describe('card list', () => {
  it('test render card list and search elemtnts', () => {
    const { container } = render(<Card photo={photo} />);
    expect(screen.getAllByText(/claybanks/i)).toBeTruthy();
    expect(container).toBeInTheDocument();
  });
});
