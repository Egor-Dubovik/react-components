import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from 'modules/layout/Layout';
import AboutPage from 'pages/AboutPage';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
    ],
  },
]);

export default router;
