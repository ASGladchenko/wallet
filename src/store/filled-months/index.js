import { createSlice } from '@reduxjs/toolkit';

import { sortMonth } from '../../helpers/sortMonth';

const filledMonthInitialState = {
  filled: [],
};

const filledMonthSlice = createSlice({
  name: 'filledMonth',
  initialState: filledMonthInitialState,
  reducers: {
    addedNewMonth: (state, { payload }) => {
      state.filled = [...state.filled, payload].sort(sortMonth);
    },
    editMonth: (state, { payload }) => {
      const findIdx = state.filled.findIndex(
        ({ month }) => month.toLowerCase() === payload.month.toLowerCase(),
      );
      state.filled[findIdx] = payload;
    },
    deleteMonth: (state, { payload }) => {
      state.filled = state.filled.filter(
        ({ month }) => month.toLowerCase() !== payload.toLowerCase(),
      );
    },
  },
});

const {
  reducer: filledMonthReducer,
  actions: { addedNewMonth, editMonth, deleteMonth },
} = filledMonthSlice;

const getFilledMonth = (state) => state.filledMonth.filled;

export {
  editMonth,
  deleteMonth,
  addedNewMonth,
  getFilledMonth,
  filledMonthReducer,
};

// {
//   month: 'January',
//   expenses: '18000',
//   revenues: '24000',
// },
// {
//   month: 'December',
//   expenses: '51000',
//   revenues: '38000',
// },
