import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurents: null,
};

const restaurentSlice = createSlice({
  name: "restaurents",
  initialState,
  reducers: {
    setRestaurents: (state, action) => {
      state.restaurents = action.payload;
    },
  },
});

export const { setRestaurents } = restaurentSlice.actions;

export default restaurentSlice.reducer;
