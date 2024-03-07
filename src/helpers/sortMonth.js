import { monthOrder } from '../constants';

export const sortMonth = (a, b) => {
  const monthA = monthOrder.indexOf(a.month);
  const monthB = monthOrder.indexOf(b.month);

  return monthA - monthB;
};
