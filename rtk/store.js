import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import restaurentReducer from "./restaurentSlice";

const store = configureStore({
  reducer: {
    restaurents: restaurentReducer,
    cart: cartReducer,
  },
});

export default store;
