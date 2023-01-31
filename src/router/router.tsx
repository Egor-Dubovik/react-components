import Header from 'components/UI/header/Header';
import Layout from 'components/UI/layout/Layout';
import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <div>Hello</div>,
      },
      {
        path: '/about',
        element: <div>about</div>,
      },
      {
        path: '*',
        element: <div>not found page</div>,
      },
    ],
  },
]);

export default router;
