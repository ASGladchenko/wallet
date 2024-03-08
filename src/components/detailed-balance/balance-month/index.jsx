import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Modal } from '../../modal';
import Edit from '../../../assets/edit.svg?react';
import Delete from '../../../assets/delete.svg?react';
import { balanceCalculation } from '../../../helpers';
import { deleteMonth } from '../../../store/filled-months';

import { getStyles } from './style';
import { Button } from '../../button';

export const BalanceMonth = ({
  eur,
  usd,
  month,
  number,
  expenses,
  revenues,
}) => {
  const childRef = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);
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
    setIsOpenModal(false);
  };

  return (
    <>
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
            className={deleteBtn}
            onClick={() => setIsOpenModal(true)}
          />
        </td>
      </tr>

      <Modal
        childRef={childRef}
        isOpen={isOpenModal}
        setClose={() => setIsOpenModal(false)}
      >
        <div
          ref={childRef}
          className="absolute flex flex-col gap-5 p-6 text-2xl text-center -translate-x-1/2 -translate-y-1/2 border rounded-md cursor-pointer top-1/2 left-1/2 bg-zinc-500 border-zinc-900 font-kode text-rose-800"
        >
          <h3>Do you really want to delete the data for {month}?</h3>
          <div className="flex items-center justify-between gap-5">
            <Button
              text="Confirm"
              className="!bg-rose-500"
              onClick={onDelete}
            />

            <Button
              text="Cancel"
              className="!bg-green-500"
              onClick={() => setIsOpenModal(false)}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
