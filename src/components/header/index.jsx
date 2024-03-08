import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { BtnInformation, Container, Logo } from '../';
import Exit from '../../assets/exit.svg?react';

import { routes } from '../../constants';

export const Header = () => {
  const navigate = useNavigate();

  const onClick = () => {
    Cookies.remove('TOKEN');
    localStorage.removeItem('login');
    navigate(routes.home);
  };

  return (
    <header className="fixed w-full py-3 border-b bg-zinc-800 border-zinc-600 drop-shadow-xl">
      <Container className="px-4 min-[1600px]:max-w-[1460px]  min-[1600px]:mx-auto flex items-center justify-between ">
        <Logo sm />

        <BtnInformation />

        <Exit
          width={48}
          height={48}
          onClick={onClick}
          className="transition-all duration-300 cursor-pointer drop-shadow-white-1/2 text-zinc-500 hover:text-rose-900"
        />
      </Container>
    </header>
  );
};
