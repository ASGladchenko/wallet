import { Link } from 'react-router-dom';

import About from '@/assets/about.svg?react';

export const BtnInformation = ({}) => {
  return (
    <Link to="/info" className="flex items-center gap-2 group/info ">
      <span className="hidden text-2xl text-blue-800 transition-all duration-300 sm:block font-kode group-hover/info:text-blue-500">
        Information
      </span>

      <About
        width={48}
        height={48}
        className="text-blue-800 transition-all duration-300 cursor-pointer group-hover/info:text-blue-500"
      />
    </Link>
  );
};
