import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 0,
      number: 'A11',
      title: 'Lay’s',
      price: 100,
      category: 'Chips',
      quantity: 1,
    },
    {
      id: 1,
      number: 'B13',
      title: 'Coca-Cola',
      price: 50,
      category: 'Drink',
      quantity: 4,
    },
    {
      id: 2,
      number: 'B15',
      title: 'Light',
      price: 30,
      category: 'Rusks',
      quantity: 3,
    },
    {
      id: 3,
      number: 'C9',
      title: 'Chaka',
      price: 60,
      category: 'Peanut',
      quantity: 5,
    },
    {
      id: 4,
      number: 'D21',
      title: 'Water',
      price: 320,
      category: 'Drink',
      quantity: 6,
    },
    {
      id: 5,
      number: 'E11',
      title: 'Fanta',
      price: 422,
      category: 'Cold drink',
      quantity: 2,
    },
    {
      id: 6,
      number: 'E12',
      title: 'Nutella',
      price: 125,
      category: 'Chocolate paste',
      quantity: 3,
    },
  ],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    payProduct: (state, action) => {
      const i = state.list.find((item) => item.number === action.payload).id;
      state.list[i].quantity -= 1;
    },
  },
});

export const { payProduct } = productsSlice.actions;

export const products = (state) => state.products.list;

export default productsSlice.reducer;
