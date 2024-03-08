import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { routes } from '@/constants';
import Exit from '@/assets/exit.svg?react';

import { BtnInformation, Container, Logo } from '..';

import { getStyles } from './style';

export const Header = () => {
  const navigate = useNavigate();

  const { header, container, exit } = getStyles();

  const onClick = () => {
    Cookies.remove('TOKEN');
    localStorage.removeItem('login');
    navigate(routes.home);
  };

  return (
    <header className={header}>
      <Container className={container}>
        <Logo sm />

        <BtnInformation />

        <Exit width={48} height={48} onClick={onClick} className={exit} />
      </Container>
    </header>
  );
};
