import { Link } from 'react-router-dom';

import { routes } from '../../constants';
import { Logo } from '../../components';

export const HomePage = () => {
  return (
    <section className="flex flex-col gap-[140px] w-full h-screen items-center">
      <Logo />

      <Link
        className="max-w-max text-zinc-500 font-bold text-2xl p-5 border border-zinc-500 hover:text-zinc-800 hover:border-zinc-800 hover:bg-zinc-500 transition-all duration-300"
        to={routes.login}
      >
        Sign In
      </Link>
    </section>
  );
};
