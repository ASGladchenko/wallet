import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { routes } from '@/constants';

import { getStyle } from './style';

export const Logo = ({ sm }) => {
  const navigate = useNavigate();

  const isAuth = Cookies.get('TOKEN');

  const { logo } = getStyle(sm);

  const onClick = () => {
    if (isAuth) {
      navigate(routes.dashboard.index);
    }

    navigate(routes.home);
  };

  return (
    <h1 translate="no" onClick={onClick} className={logo}>
      Wallet
    </h1>
  );
};
