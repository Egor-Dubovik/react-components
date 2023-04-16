import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import FormPage from './FormPage';
import { Provider } from 'react-redux';
import { store } from '../../app/store/store';

describe('testing FormPage', () => {
  it('check render of FormPage', () => {
    const { container } = render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});
