export const balanceCalculation = ({
  rateUSD,
  rateEUR,
  revenues,
  expenses,
}) => {
  const balance = revenues - expenses;
  const usd = balance / rateUSD;
  const eur = balance / rateEUR;

  return {
    balanceUAH: balance,
    balanceUSD: rateUSD ? usd : 0,
    balanceEUR: rateEUR ? eur : 0,
  };
};
