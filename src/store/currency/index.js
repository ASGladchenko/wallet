import { createSlice } from '@reduxjs/toolkit';

const currencyInitialState = {
  usd: undefined,
  eur: undefined,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState: currencyInitialState,
  reducers: {
    setCurrency: (state, { payload }) => {
      state.eur = payload.eur;
      state.usd = payload.usd;
    },
  },
});

const {
  reducer: currencyReducer,
  actions: { setCurrency },
} = currencySlice;

const getCurrency = (state) => state.currency;

export { setCurrency, currencyReducer, getCurrency };
