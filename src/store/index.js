import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import { currencyReducer } from './currency';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    currency: currencyReducer,
  },
});
