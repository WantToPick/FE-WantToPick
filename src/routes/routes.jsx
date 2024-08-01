// src/router/Router.js
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '../constants/routes';

import Header from '../layout/header';
import HomePage from '../pages/home/page';

export default function Router() {
  const elements = [
    {
      path: '/',
      element: <Header />,
      children: [
        {
          path: routes.home,
          element: <HomePage />,
        },
        {
          path: routes.login,
          element: null, // 팝업을 통해 구현하니까 null
        },
      ],
    },
  ];

  return useRoutes(elements);
}
