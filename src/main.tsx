import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import { Global } from '@emotion/react';
import GlobalStyle from '@styles/GlobalStyle';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Global styles={GlobalStyle} />
		<RouterProvider router={router} />
	</StrictMode>,
);
