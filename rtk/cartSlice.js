import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const restaurentSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      state.items = [...state.items, actions.payload];
    },
    removeFromCart: (state, action) => {
      if (state.items.length === 0) return;

      const indexToRemove = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      if (indexToRemove === -1) return;
      state.items.splice(indexToRemove, 1);
    },

    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = restaurentSlice.actions;

export default restaurentSlice.reducer;
