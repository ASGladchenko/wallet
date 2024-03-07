import { createBrowserRouter } from 'react-router-dom';

import { routes } from '../constants';
import {
  EditPage,
  HomePage,
  Dashboard,
  ErrorPage,
  LoginPage,
  CreatePage,
  LayoutDashboard,
} from '../pages';
import { ProtectedRoute, UnProtectedRoute } from '../components';

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: (
      <UnProtectedRoute>
        <HomePage />
      </UnProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: routes.login,
    element: (
      <UnProtectedRoute>
        <LoginPage />
      </UnProtectedRoute>
    ),
  },
  {
    path: routes.dashboard.index,
    element: (
      <ProtectedRoute>
        <LayoutDashboard />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: routes.dashboard.instruction, element: <h1>Instruction</h1> },
      { path: routes.dashboard.create, element: <CreatePage /> },
      { path: routes.dashboard.edit, element: <EditPage /> },
    ],
  },
]);
