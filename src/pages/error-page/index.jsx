import { Link } from 'react-router-dom';

import { routes } from '@/constants';

import { getStyle } from './style';

export const ErrorPage = () => {
  const { section, link, subTitle, title } = getStyle();

  return (
    <section className={section}>
      <h2 className={title}>404</h2>

      <h2 className={subTitle}>Page not found</h2>

      <Link to={routes.home} className={link}>
        Go home
      </Link>
    </section>
  );
};
