import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  money: 0,
  numberProduct: 0,
};

export const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setMoney: (state, action) => {
      state.money = Number(action.payload);
    },

    setNumber: (state, action) => {
      state.numberProduct = action.payload;
    },
  },
});

export const { setMoney, setNumber } = controlsSlice.actions;

export const money = (state) => state.controls.money;
export const number = (state) => state.controls.numberProduct;

export default controlsSlice.reducer;
