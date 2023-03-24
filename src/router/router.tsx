import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from 'modules/layout/Layout';
import AboutPage from 'pages/AboutPage';
import NotFoundPage from 'pages/NotFoundPage';
import MainPage from '../pages/mainPage';
import FormPage from '../pages/FormPage/FormPage';
import { Routes } from '../common/constants/app';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: Routes.main,
        element: <MainPage />,
      },
      {
        path: Routes.about,
        element: <AboutPage />,
      },
      {
        path: Routes.form,
        element: <FormPage />,
      },
      {
        path: Routes.bad,
        element: <NotFoundPage />,
      },
      {
        path: Routes.any,
        element: <Navigate to="/404" replace />,
      },
    ],
  },
]);

export default router;
