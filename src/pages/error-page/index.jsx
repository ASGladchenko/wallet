import { Link } from 'react-router-dom';
import { routes } from '../../constants';

export const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-start w-full h-[calc(100vh-80px)] md:h-[calc(100vh-130px)]">
      <h2 className="bg-error text-transparent bg-clip-text text-[80px] sm:text-[140px] md:text-[200px] font-extrabold font-kode">
        404
      </h2>
      <h2 className="bg-error text-transparent bg-clip-text text-[34px] sm:text-[64px] md:text-[80px] lg:text-[100px] font-extrabold font-kode">
        Page not found
      </h2>
      <Link
        to={routes.home}
        className="text-[32px] lg:text-[64px] transition-all duration-300 font-kode text-stone-300 hover:text-accent"
      >
        Go home
      </Link>
    </section>
  );
};
