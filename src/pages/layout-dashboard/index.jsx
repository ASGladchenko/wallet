import { Outlet } from 'react-router-dom';

import { Header } from '../../components';

export const LayoutDashboard = () => {
  return (
    <>
      <Header />
      <section className="pt-[76px] md:pt-[130px]">
        <Outlet />
      </section>
    </>
  );
};
