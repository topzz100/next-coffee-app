import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  quantity: 0,
  total: 0
};

export const userSlice = createSlice({
  name: 'cart',
  initialState,
  
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  }
});

export const { addToCart, reset } = userSlice.actions;

export const selectProducts = (state) => state.cart.products;
export const selectQuantity = (state) => state.cart.quantity;
export const selectTotal = (state) => state.cart.total;


export default userSlice.reducer;