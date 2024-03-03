// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.food._id !== action.payload);
    },
    incrementCartItem: (state, action) => {
      const itemToUpdate = state.items.find(item => item.food._id === action.payload);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    decrementCartItem: (state, action) => {
      const itemToUpdate = state.items.find(item => item.food._id === action.payload);
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, incrementCartItem, decrementCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
