import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { routes } from '../../constants';
import Create from '../../assets/added.svg?react';

import { BalanceMonth } from './balance-month';
import { getCurrency } from '../../store/currency';

export const DetailedBalance = ({ filledMonth }) => {
  const { usd, eur } = useSelector(getCurrency);
  const isEmptyData = filledMonth.length === 0;

  return (
    <div className="w-full p-4 overflow-x-auto rounded-md shadow-lg scroll bg-zinc-300">
      <div className=" min-w-[800px]">
        <h3 className="mb-5 text-2xl text-left lg:text-center font-kode text-zinc-700">
          Balance by month
        </h3>

        <Link
          to={routes.dashboard.create}
          className="flex self-end gap-3 p-2 mb-5 text-black transition-all duration-300 border rounded-md lg:ml-auto lg:mx-0 hover:border-green-800 max-w-max hover:text-green-800 border-zinc-900"
        >
          <span className="text-xl">Create</span>
          <Create width={32} height={32} />
        </Link>

        {isEmptyData && (
          <h2 className="pb-10 text-3xl text-center font-kode text-zinc-700">
            There's no record of your finances.
          </h2>
        )}

        {!isEmptyData && (
          <table className="w-full text-center text-zinc-800 font">
            <thead className="uppercase ">
              <tr className="flex w-full border-t border-zinc-900">
                <th className="w-full max-w-[80px] first:border-l border-r border-zinc-900">
                  №
                </th>
                <th className="w-full border-r first:border-l border-zinc-900">
                  Month
                </th>
                <th className="w-full border-r first:border-l border-zinc-900">
                  Revenues
                </th>
                <th className="w-full border-r first:border-l border-zinc-900">
                  Expenses
                </th>
                <th className="w-full border-r first:border-l border-zinc-900">
                  UAH balance
                </th>
                <th className="w-full border-r first:border-l border-zinc-900">
                  USD balance
                </th>
                <th className="w-full border-r first:border-l border-zinc-900">
                  EUR balance
                </th>
                <th className="w-full max-w-[80px] first:border-l border-r border-zinc-900">
                  Edit
                </th>
                <th className="w-full max-w-[80px] first:border-l border-r border-zinc-900">
                  Delete
                </th>
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
