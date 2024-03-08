import clsx from 'clsx';

export const getStyles = ({ error, isActive, disabled, isPassword }) => ({
  labelStyle: 'text-sm text-zinc-600 group:hover:text-rose-500',
  wrapper: clsx(
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
  switcherWrapper:
    'absolute right-1.5 flex cursor-pointer top-1/2 translate-y-[-50%] text-admin-lighten-border dark:text-admin-btnWhite hover:text-admin-primary dark:hover:text-admin-primary',
});
