import clsx from 'clsx';

export const getStyles = ({ error, isActive, isDisabled }) => ({
  wrapper: clsx(
    'flex flex-col relative w-full p-1 border border-1 transition-all duration-300',
    {
      'border-zinc-400': !error,
      'border-rose-500': !!error,
      'border-zinc-900': isActive && !isDisabled,
      'hover:border-zinc-900': !isDisabled && !error,
      'select-none bg-zinc-400 cursor-not-allowed': isDisabled,
    },
  ),
  labelStyle: 'text-sm text-zinc-600 group:hover:text-rose-500',
  input: clsx(
    'transition-all duration-300 bg-transparent outline-none focus-visible:outline-none placeholder-zinc-800',
    {
      'cursor-not-allowed': isDisabled,
    },
  ),
  ul: 'absolute -left-[1px] w-[calc(100%+2px)] overflow-y-auto border top-full bg-zinc-300 border-zinc-900 max-h-[80px] scroll',
});
