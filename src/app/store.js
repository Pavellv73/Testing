import { configureStore } from '@reduxjs/toolkit';
import ControlsReducer from '../features/controls/controlsSlice';
import ProductReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    controls: ControlsReducer,
  },
});
