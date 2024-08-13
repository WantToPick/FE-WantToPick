import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '../constants/routes';

import Layout from '../layout/layout';
import HomePage from '../pages/home/page';
import SignUpPage from '../pages/auth/signUp/page';
import VocalTrainingPage from '../pages/trainingRoom/vocalTraining/page';
import DanceTrainingPage from '../pages/trainingRoom/danceTraining/page';
import RecruitPage from '../pages/recruit/page';
import FreeBoardPage from '../pages/community/freeBoard/page';
import TeamRecruitPage from '../pages/community/teamRecruit/page';
export default function Router() {
  const elements = [
    {
      path: '/',
      element: <Layout />,
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
          path: routes.signUp,
          element: <SignUpPage />,
        },
        {
          path: routes.vocalTraining,
          element: <VocalTrainingPage />,
        },
        {
          path: routes.danceTraining,
          element: <DanceTrainingPage />,
        },
        {
          path: routes.recruit,
          element: <RecruitPage />,
        },
        {
          path: routes.freeBoard,
          element: <FreeBoardPage />,
        },
        {
          path: routes.teamRecruit,
          element: <TeamRecruitPage />,
        },
      ],
    },
  ];

  return useRoutes(elements);
}
