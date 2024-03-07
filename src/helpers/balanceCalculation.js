export const balanceCalculation = ({
  rateUSD,
  rateEUR,
  revenues,
  expenses,
}) => ({
  balanceUAH: revenues - expenses,
  balanceUSD: rateUSD ? revenues - expenses / rateUSD : 0,
  balanceEUR: rateEUR ? revenues - expenses / rateEUR : 0,
});
