import clsx from 'clsx';

export const getStyle = (sm) => ({
  logo: clsx(
    'bg-primary drop-shadow-white font-kode font-extrabold text-center select-none text-transparent bg-clip-text cursor-pointer',
    {
      'text-[32px] md:text-[68px]': sm,
      'text-[68px] sm:text-[112px] xl:text-[164px] ': !sm,
    },
  ),
});
