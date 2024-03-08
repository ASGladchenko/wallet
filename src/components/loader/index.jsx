import { getStyles } from './style';

export const Loader = ({}) => {
  const {outer ,inner} =getStyles()

  return (
    <p className={outer}>
      <span className={inner}></span>
    </p>
  );
};
