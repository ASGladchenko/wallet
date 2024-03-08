import { getStyles } from './style';

export const Block = ({ balance, currency }) => {
  const { wrapper } = getStyles(balance);

  return (
    <div className={wrapper}>
      <span>{currency}</span>

      <span>{balance}</span>
    </div>
  );
};
