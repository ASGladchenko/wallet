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
    balanceUAH: balance.toFixed(2),
    balanceUSD: rateUSD ? usd.toFixed(2) : 0,
    balanceEUR: rateEUR ? eur.toFixed(2) : 0,
  };
};
