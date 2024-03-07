import clsx from 'clsx';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../constants';

export const Logo = ({ sm }) => {
  const isAuth = Cookies.get('TOKEN');
  const navigate = useNavigate();

  const onClick = () => {
    if (isAuth) {
      navigate(routes.dashboard.index);
    }

    return;
  };
  return (
    <h1
      translate="no"
      onClick={onClick}
      className={clsx(
        'bg-primary drop-shadow-white font-kode font-extrabold text-center select-none text-transparent bg-clip-text',
        {
          'text-[32px] md:text-[68px]': sm,
          'text-[68px] sm:text-[112px] xl:text-[164px] ': !sm,
          'cursor-pointer': isAuth,
        },
      )}
    >
      Wallet
    </h1>
  );
};
