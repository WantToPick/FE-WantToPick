// src/router/Router.js
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '../constants/routes';

import Header from '../layout/header';
import HomePage from '../pages/home/page';
import trainingRoomPage from '../pages/trainingRoom/page';
import ProfilePickPage from '../pages/guickCasting/profilePick/page';
import VideoPickPage from '../pages/guickCasting/videoPick/page';
import RecruitPage from '../pages/recruit/page';
import CommunityPage from '../pages/community/page';


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
        {
          path: routes.traingRoom,
          element: <trainingRoomPage />,
        },
        {
          path: routes.recruit,
          element: <RecruitPage />,
        },
        {
          path: routes.profilePick,
          element: <ProfilePickPage />,
        },
        {
          path: routes.videoPick,
          element: <VideoPickPage />,
        },
        {
          path: routes.community,
          element: <CommunityPage />,
        },
      ],
    },
  ];

  return useRoutes(elements);
}
