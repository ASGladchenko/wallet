import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Edit from '@/assets/edit.svg?react';
import { Button, Modal } from '@/components';
import Delete from '@/assets/delete.svg?react';
import { balanceCalculation } from '@/helpers';
import { deleteMonth } from '@/store/filled-months';

import { getStyles } from './style';

export const BalanceMonth = ({
  eur,
  usd,
  month,
  number,
  expenses,
  revenues,
}) => {
  const childRef = useRef();
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { balanceEUR, balanceUAH, balanceUSD } = balanceCalculation({
    rateUSD: usd,
    rateEUR: eur,
    expenses: expenses,
    revenues: revenues,
  });

  const {
    row,
    main,
    link,
    maxW,
    balance,
    deleteBtn,
    btnWrapper,
    editDelete,
    msgContainer,
  } = getStyles(balanceUAH);

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
        <div ref={childRef} className={msgContainer}>
          <h3>Do you really want to delete the data for {month}?</h3>
          <div className={btnWrapper}>
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
