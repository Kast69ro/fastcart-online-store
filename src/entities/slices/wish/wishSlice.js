import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: JSON.parse(localStorage.getItem('wishlist')) || [],
  },
  reducers: {
   
    addItem(state, action) {
      state.items.push(action.payload);
      localStorage.setItem('wishlist', JSON.stringify(state.items));
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('wishlist', JSON.stringify(state.items));
    },
    clearWishlist(state) {
      state.items = [];
      localStorage.removeItem('wishlist');
    },
  },
});

export const { setWishlist, addItem, removeItem, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
