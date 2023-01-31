import Header from 'components/UI/header/Header';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'router/router';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
