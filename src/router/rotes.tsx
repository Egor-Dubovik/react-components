import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../common/constants/app';
import AboutPage from '../pages/AboutPage';
import FormPage from '../pages/FormPage/FormPage';
import MainPage from '../pages/mainPage';
import NotFoundPage from '../pages/NotFoundPage';

const routes = (
  <Routes>
    <Route path={ROUTES.main} element={<MainPage />} />
    <Route path={ROUTES.about} element={<AboutPage />} />
    <Route path={ROUTES.form} element={<FormPage />} />
    <Route path={ROUTES.bad} element={<NotFoundPage />} />
    <Route path="*" element={<Navigate to="/404" replace />} />
  </Routes>
);

export default routes;
