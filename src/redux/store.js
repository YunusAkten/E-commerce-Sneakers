//redux files not written in typescript because it causes errors in the app idk why

import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./appSlice";
import { filterSlice } from "./filterSlice";
import { cartSlice } from "./cartSlice";
export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    filter: filterSlice.reducer,
    cart: cartSlice.reducer,
  },
});
