import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  login: localStorage.getItem('login') || 'unknown',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuthLogin: (state, { payload }) => {
      state.login = payload;
    },
  },
});

const {
  reducer: authReducer,
  actions: { setAuthLogin },
} = authSlice;

const getAuthLogin = (state) => state.auth.login;

export { setAuthLogin, authReducer, getAuthLogin };
