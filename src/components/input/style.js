import clsx from 'clsx';

export const getStyles = ({ isPassword, isActive, disabled, error }) => ({
  label: clsx(
    'flex flex-col relative w-full p-1 border border-1 transition-all duration-300',
    {
      'pr-7': isPassword,
      'border-zinc-400': !isActive && !error,
      'select-none bg-zinc-400 ': disabled,
      'hover:border-zinc-900': !disabled && !error,
      'border-zinc-900': isActive && !disabled && !error,
      'border-rose-500': error,
    },
  ),

  input: clsx(
    'w-full outline-none focus-visible:outline-none transition-all duration-300 bg-transparent placeholder-zinc-800',
    {
      'bg-zinc-400 cursor-not-allowed': disabled,
    },
  ),
});
