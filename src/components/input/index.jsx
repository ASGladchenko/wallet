import { useState } from 'react';

import { getStyles } from './style';
import { SwitchPassword } from './switcher';

export const Input = ({
  error,
  value,
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

  const { input, label } = getStyles({
    isActive: isActive,
    disabled: disabled,
    error: !!error,
    isPassword: isTypePassword,
  });

  return (
    <div className={`w-full ${className}`}>
      <label className={label}>
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
