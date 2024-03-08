import { useRef, useState } from 'react';
import clsx from 'clsx';

import { useOutsideClick } from '@/hooks';

import { getStyles } from './style';

export const Select = ({
  value,
  label,
  error,
  options,
  disabled,
  onChange,
  className,
}) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const isDisabled = disabled || !options?.length;
  const isOpen = !isDisabled && isActive;

  const { wrapper, labelStyle, input, ul } = getStyles({
    error: error,
    isActive: isActive,
    isDisabled: isDisabled,
  });

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
      {label && <span className={labelStyle}>{label}</span>}

      <div ref={ref} onClick={onClick} className={wrapper}>
        <input
          readOnly
          type="text"
          value={value}
          className={input}
          placeholder="choose month"
        />

        {isOpen && (
          <ul className={ul}>
            {options?.map((option, idx) => (
              <li
                key={`select-${idx}-${option.name}`}
                className="px-1 hover:bg-zinc-500"
                onClick={(e) => onSelect(e, option)}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && <p className="text-rose-500">{error}</p>}
    </div>
  );
};
