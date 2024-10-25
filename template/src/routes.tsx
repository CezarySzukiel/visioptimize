import React from 'react';
import { RouteObject } from 'react-router-dom';
import Home from './components/Home';

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
];

export default routes;