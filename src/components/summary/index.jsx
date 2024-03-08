import { useMemo } from 'react';

import { balanceCalculation } from '../../helpers';
import { Block } from './block';

export const Summary = ({ usd, eur, filledMonth }) => {
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
    <div className="flex flex-col items-center justify-center gap-4 p-5 rounded-md bg-zinc-300">
      <h1 className="w-full text-xl font-bold text-center font-kode text-zinc-600">
        Your financial savings
      </h1>
      <div className="flex flex-col items-center justify-center w-full gap-5 min-[420px]:flex-row">
        <Block currency="UAH" balance={balanceUAH} />
        <Block currency="USD" balance={balanceUSD} />
        <Block currency="EUR" balance={balanceEUR} />
      </div>
    </div>
  );
};
