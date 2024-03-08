import { useMemo } from 'react';

import { balanceCalculation } from '@/helpers';

import { Block } from './block';
import { getStyles } from './style';

export const Summary = ({ usd, eur, filledMonth }) => {
  const { wrapper, title, blockContainer } = getStyles();

  const { totalExpenses, totalRevenues } = useMemo(() => {
    return filledMonth?.reduce(
      (acc, entry) => {
        acc.totalExpenses += Number(entry.expenses);
        acc.totalRevenues += Number(entry.revenues);
        return acc;
      },
      { totalExpenses: 0, totalRevenues: 0 },
    );
  }, [filledMonth]);

  const { balanceEUR, balanceUSD, balanceUAH } = balanceCalculation({
    rateUSD: usd,
    rateEUR: eur,
    expenses: totalExpenses,
    revenues: totalRevenues,
  });

  return (
    <div className={wrapper}>
      <h1 className={title}>Your financial savings</h1>

      <div className={blockContainer}>
        <Block currency="UAH" balance={balanceUAH} />
        <Block currency="USD" balance={balanceUSD} />
        <Block currency="EUR" balance={balanceEUR} />
      </div>
    </div>
  );
};
