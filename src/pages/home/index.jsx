import { Link } from 'react-router-dom';

import { BtnInformation, Logo } from '../../components';
import { routes } from '../../constants';

export const HomePage = () => {
  return (
    <section className="-translate-y-[10%] flex flex-col gap-[60px] w-full h-screen items-center justify-center">
      <Logo />

      <BtnInformation />

      <Link
        className="p-5 text-2xl font-bold transition-all duration-300 border max-w-max text-zinc-500 border-zinc-500 hover:text-zinc-800 hover:border-zinc-800 hover:bg-zinc-500"
        to={routes.login}
      >
        Sign In
      </Link>
    </section>
  );
};
