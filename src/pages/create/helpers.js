export const filterMonth = (filledMonths, allMonths) => {
  const filledMonthNames = filledMonths.map((item) => item.month);
  return allMonths.filter((month) => !filledMonthNames.includes(month.name));
};
