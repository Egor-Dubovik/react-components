import CardsList from 'components/UI/CardsList/CardsList';
import Header from 'components/UI/header/Header';
import Layout from 'components/UI/layout/Layout';
import AboutPage from 'pages/AboutPage';
import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

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
