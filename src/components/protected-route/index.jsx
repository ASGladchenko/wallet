import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

import { routes } from '@/constants';

export const ProtectedRoute = ({ children }) => {
  const isAuth = Cookies.get('TOKEN');

  if (!isAuth) {
    return <Navigate to={routes.login} />;
  }

  return children;
};
