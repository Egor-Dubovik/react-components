import React from 'react';
import App from '../app/App';
import { mount } from '@cypress/react18';
import { Provider } from 'react-redux';
import { store } from '../app/store/store';
import { MemoryRouter } from 'react-router-dom';

describe('<App>', () => {
  it('mounts', () => {
    mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });
});
