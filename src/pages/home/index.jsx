import { Link } from 'react-router-dom';

import { routes } from '@/constants';
import { BtnInformation, Logo } from '@/components';

import { getStyles } from './style';

export const HomePage = () => {
  const { link, section } = getStyles();

  return (
    <section className={section}>
      <Logo />

      <BtnInformation />

      <Link className={link} to={routes.login}>
        Sign In
      </Link>
    </section>
  );
};
