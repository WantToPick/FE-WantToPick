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
			],
		},
	];

	return useRoutes(elements);
}