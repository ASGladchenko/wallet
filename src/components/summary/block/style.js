import clsx from 'clsx';

export const getStyles = (balance) => ({
  wrapper: clsx(
    'flex flex-col items-center justify-center p-3 px-6 border rounded-md border-zinc-700',
    {
      'border-rose-900 text-rose-900 bg-rose-300': balance < 0,
      'border-green-900 text-green-900 bg-green-300': balance > 0,
    },
  ),
});
