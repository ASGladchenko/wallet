import { useState } from 'react';

import { getStyles } from './style';
import { SwitchPassword } from './switcher';

export const Input = ({
  error,
  value,
  label,
  disabled,
  onChange,
  className,
  placeholder,
  type = 'text',
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const isTypePassword = type === 'password';
  const { currentType, switcher } = SwitchPassword(isTypePassword);
  const changingType = isTypePassword ? currentType : type;

  const { input, wrapper, labelStyle } = getStyles({
    error: !!error,
    isActive: isActive,
    disabled: disabled,
    isPassword: isTypePassword,
  });

  return (
    <div className={`w-full ${className} group`}>
      {label && <span className={labelStyle}>{label}</span>}

      <label className={wrapper}>
        <input
          value={value}
          className={input}
          autoComplete="off"
          type={changingType}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          onChange={(e) => onChange(e.target.value)}
          {...rest}
        />

        {isTypePassword && switcher}
      </label>
      {error && <p className="text-rose-500">{error}</p>}
    </div>
  );
};
