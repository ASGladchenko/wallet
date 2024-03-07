import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import { currencyReducer } from './currency';
import { filledMonthReducer } from './filled-months';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    currency: currencyReducer,
    filledMonth: filledMonthReducer,
  },
});
