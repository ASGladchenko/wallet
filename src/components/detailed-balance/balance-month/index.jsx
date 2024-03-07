import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Edit from '../../../assets/edit.svg?react';
import Delete from '../../../assets/delete.svg?react';
import { deleteMonth } from '../../../store/filled-months';
import { balanceCalculation } from '../../../helpers';
import { getStyles } from './style';
import clsx from 'clsx';

export const BalanceMonth = ({
  eur,
  usd,
  month,
  number,
  expenses,
  revenues,
}) => {
  const dispatch = useDispatch();
  const { balanceEUR, balanceUAH, balanceUSD } = balanceCalculation({
    rateUSD: usd,
    rateEUR: eur,
    expenses: expenses,
    revenues: revenues,
  });

  const { main, editDelete, link, deleteBtn, row, maxW, balance } =
    getStyles(balanceUAH);

  const onDelete = () => {
    dispatch(deleteMonth(month));
  };

  return (
    <tr className={row}>
      <td className={`${main} ${maxW}`}>{number}</td>
      <td className={main}>{month}</td>
      <td className={main}>{revenues}</td>
      <td className={main}>{expenses}</td>
      <td className={`${main} ${balance}`}>{balanceUAH}</td>
      <td className={`${main} ${balance}`}>{balanceUSD}</td>
      <td className={`${main} ${balance}`}>{balanceEUR}</td>
      <td className={editDelete}>
        <Link to={`edit/${month.toLowerCase()}`} className="flex">
          <Edit width={24} height={32} className={link} />
        </Link>
      </td>
      <td className={editDelete}>
        <Delete
          width={24}
          height={32}
          onClick={onDelete}
          className={deleteBtn}
        />
      </td>
    </tr>
  );
};
