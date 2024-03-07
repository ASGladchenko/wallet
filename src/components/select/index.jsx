import { useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClick } from '../../hooks';

export const Select = ({
  value,
  disabled,
  options,
  onChange,
  error,
  className,
}) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const isDisabled = disabled || !options?.length;
  const isOpen = !isDisabled && isActive;

  const onClick = () => {
    if (isDisabled) return;
    setIsActive(true);
  };

  const onSelect = (e, option) => {
    e.stopPropagation();
    if (onChange) {
      onChange(option);
    }
    setIsActive(false);
  };

  useOutsideClick(ref, () => setIsActive(false));

  return (
    <div className={clsx('w-full', className)}>
      <div
        ref={ref}
        onClick={onClick}
        className={clsx(
          'flex flex-col relative w-full p-1 border border-1 transition-all duration-300',
          {
            'border-zinc-400': !error,
            'border-zinc-900': isActive && !isDisabled,
            'select-none bg-zinc-400 cursor-not-allowed': isDisabled,
            'hover:border-zinc-900': !isDisabled && !error,
            'border-rose-500': !!error,
          },
        )}
      >
        <input
          readOnly
          type="text"
          value={value}
          placeholder="choose month"
          className={clsx(
            'transition-all duration-300 bg-transparent outline-none focus-visible:outline-none placeholder-zinc-800',
            {
              'cursor-not-allowed': isDisabled,
            },
          )}
        />

        {isOpen && (
          <ul className="absolute -left-[1px] w-[calc(100%+2px)] overflow-y-auto border top-full bg-zinc-300 border-zinc-900 max-h-[80px] scroll">
            {options?.map((option, idx) => {
              return (
                <li
                  key={`select-${idx}-${option.name}`}
                  className="px-1 hover:bg-zinc-500"
                  onClick={(e) => onSelect(e, option)}
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {error && <p className="text-rose-500">{error}</p>}
    </div>
  );
};
