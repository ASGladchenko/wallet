import clsx from 'clsx';

export const Button = ({
  text,
  onClick,
  disabled,
  className,
  type = 'submit',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'bg-zinc-400 text-white border border-zinc-400 transition-all duration-300 p-2 w-full',
        {
          'hover:bg-zinc-300 hover:text-zinc-800 hover:border-zinc-800':
            !disabled,
        },
        className,
      )}
    >
      {text}
    </button>
  );
};
