import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import React, { Suspense } from 'react';

const Login = React.lazy(() => import('@pages/Login'));
const Signup = React.lazy(() => import('@pages/Signup'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Navigate to="/login" />,
			},
			{
				path: 'login',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Login />
					</Suspense>
				),
			},
			{
				path: 'signup',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Signup />
					</Suspense>
				),
			},
		],
	},
]);

export default router;
