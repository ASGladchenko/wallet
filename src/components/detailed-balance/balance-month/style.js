import clsx from 'clsx';

export const getStyles = (balance) => ({
  main: 'w-full border-r first:border-l border-zinc-900 first:border-l border-r border-zinc-900',
  editDelete:
    'w-full max-w-[80px] flex items-center justify-center first:border-l border-r border-zinc-900',
  link: 'text-black transition-all duration-300 cursor-pointer hover:text-green-800',
  deleteBtn:
    'text-black transition-all duration-300 cursor-pointer hover:text-rose-500',
  row: 'flex w-full h-[32px] first:border-t border-b border-zinc-900',
  maxW: 'max-w-[80px]',
  balance: clsx({
    'text-rose-600': balance < 0,
    'text-green-900': balance > 0,
  }),
});
