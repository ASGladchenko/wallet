import { useMemo, useState } from 'react';

import Eye from '@/assets/eye.svg?react';
import EyeOff from '@/assets/eyeOff.svg?react';

import { getStyles } from './style';

const SwitchPassword = (isPassword) => {
  const [isShow, setIsShow] = useState(!isPassword);

  const { switcherWrapper } = getStyles({});

  const currentType = useMemo(() => (isShow ? 'text' : 'password'), [isShow]);

  const Component = (
    <div className={switcherWrapper} onClick={() => setIsShow(!isShow)}>
      {isShow ? (
        <Eye width={20} height={20} />
      ) : (
        <EyeOff width={20} height={20} />
      )}
    </div>
  );

  return {
    currentType,
    switcher: Component,
  };
};

export { SwitchPassword };
