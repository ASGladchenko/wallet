import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { routes } from '@/constants';
import Create from '@/assets/added.svg?react';
import { getCurrency } from '@/store/currency';

import { getStyles } from './style';
import { BalanceMonth } from './balance-month';

export const DetailedBalance = ({ filledMonth }) => {
  const { usd, eur } = useSelector(getCurrency);
  const isEmptyData = filledMonth.length === 0;

  const { th, wrapper, title, linkCreate, emptyTitle } = getStyles();

  return (
    <div className={wrapper}>
      <div className=" min-w-[800px]">
        <h3 className={title}>Balance by month</h3>

        <Link to={routes.dashboard.create} className={linkCreate}>
          <span className="text-xl">Create</span>
          <Create width={32} height={32} />
        </Link>

        {isEmptyData && (
          <h2 className={emptyTitle}>There's no record of your finances.</h2>
        )}

        {!isEmptyData && (
          <table className="w-full text-center text-zinc-800 font">
            <thead className="uppercase">
              <tr className="flex w-full border-t border-zinc-900">
                <th className={`${th} max-w-[80px]`}>№</th>
                <th className={th}>Month</th>
                <th className={th}>Revenues</th>
                <th className={th}>Expenses</th>
                <th className={th}>UAH balance</th>
                <th className={th}>USD balance</th>
                <th className={th}>EUR balance</th>
                <th className={`${th} max-w-[80px]`}>Edit</th>
                <th className={`${th} max-w-[80px]`}>Delete</th>
              </tr>
            </thead>

            <tbody className="text-zinc-600">
              {filledMonth?.map((month, idx) => (
                <BalanceMonth
                  {...month}
                  usd={usd?.rate}
                  eur={eur?.rate}
                  number={idx + 1}
                  key={`balance-${idx}-${month.name}`}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
