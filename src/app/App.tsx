import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from './store/store';
import './App.css';
import Root from '../router/Root/Root';

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Root />
        </div>
      </HashRouter>
    </Provider>
  );
};

export default App;
