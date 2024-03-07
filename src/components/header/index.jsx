import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

import { Container, Logo } from '../';
import Exit from '../../assets/exit.svg?react';
import About from '../../assets/about.svg?react';

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

        <Link to={routes.dashboard.instruction}>
          <About
            width={48}
            height={48}
            className="text-blue-800 transition-all duration-300 cursor-pointer hover:text-blue-500"
          />
        </Link>

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
