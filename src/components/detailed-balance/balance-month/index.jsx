import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Edit from '../../../assets/edit.svg?react';
import Delete from '../../../assets/delete.svg?react';
import { deleteMonth } from '../../../store/filled-months';

export const BalanceMonth = ({
  eur,
  usd,
  month,
  number,
  expenses,
  revenues,
}) => {
  const dispatch = useDispatch();

  const balanceUAH = revenues - expenses;
  const balanceUSD = usd ? balanceUAH / usd : 0;
  const balanceEUR = eur ? balanceUAH / eur : 0;

  const onDelete = () => {
    dispatch(deleteMonth(month));
  };

  return (
    <tr className="flex w-full h-[32px] first:border-t border-b border-zinc-900">
      <td className="w-full max-w-[80px] first:border-l border-r border-zinc-900">
        {number}
      </td>
      <td className="w-full border-r first:border-l border-zinc-900">
        {month}
      </td>
      <td className="w-full border-r first:border-l border-zinc-900">
        {revenues}
      </td>
      <td className="w-full border-r first:border-l border-zinc-900">
        {expenses}
      </td>
      <td className="w-full border-r first:border-l border-zinc-900">
        {balanceUAH}
      </td>
      <td className="w-full border-r first:border-l border-zinc-900">
        {balanceUSD}
      </td>
      <td className="w-full border-r first:border-l border-zinc-900">
        {balanceEUR}
      </td>
      <th className="w-full max-w-[80px] flex items-center justify-center first:border-l border-r border-zinc-900">
        <Link to={`edit/${month.toLowerCase()}`} className="flex">
          <Edit
            width={24}
            height={32}
            className="text-black transition-all duration-300 cursor-pointer hover:text-green-800"
          />
        </Link>
      </th>
      <th className="w-full max-w-[80px] flex items-center justify-center first:border-l border-r border-zinc-900">
        <Delete
          width={24}
          height={32}
          onClick={onDelete}
          className="text-black transition-all duration-300 cursor-pointer hover:text-rose-500"
        />
      </th>
    </tr>
  );
};
