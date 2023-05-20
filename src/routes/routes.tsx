import { Navigate } from 'react-router-dom';

import { APP_SETTINGS } from '@constants';
import { BaseLayout } from '@layouts';
import { ErrorPage, Favorites, Vacancies, Vacancy } from '@pages';

const { PAGES } = APP_SETTINGS;

const routes = [
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Navigate to={PAGES.VACANCIES.ROUTE} />,
      },
      {
        path: PAGES.VACANCIES.ROUTE,
        element: <Vacancies />,
      },

      {
        path: PAGES.VACANCY.ROUTE,
        element: <Vacancy />,
      },
      {
        path: PAGES.FAVORITES.ROUTE,
        element: <Favorites />,
      },
    ],
  },
];

export default routes;
