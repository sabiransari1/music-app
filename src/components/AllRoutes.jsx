import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Admin } from '../pages/Admin';
import { Edit } from '../pages/Edit';
import { Login } from '../pages/Login';
import { PageNotFound } from '../pages/PageNotFound';
import { PrivateRoutes } from './PrivateRoutes';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route
        path={'/admin'}
        element={
          <PrivateRoutes>
            <Admin />
          </PrivateRoutes>
        }
      />
      <Route
        path={'/edit/:id'}
        element={
          <PrivateRoutes>
            <Edit />
          </PrivateRoutes>
        }
      />
      <Route path={'/login'} element={<Login />} />
      <Route path={'*'} element={<PageNotFound />} />
    </Routes>
  );
};
