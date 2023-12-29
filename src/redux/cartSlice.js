import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  cartTotal: 0,
};
if (localStorage.getItem("cart") === null) {
  localStorage.setItem("cart", JSON.stringify([]));
} else if (localStorage.getItem("cart") !== null) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.forEach((item) => {
    initialState.cart.push(item);
  });
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (
        state.cart.find(
          (item) =>
            item.id === action.payload.id && item.size === action.payload.size
        )
      ) {
        const cartItem = state.cart.find(
          (item) => item.id === action.payload.id
        );
        cartItem.quantity = Number(cartItem.quantity) + 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        const cartItem = { ...action.payload, quantity: 1 };
        state.cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    changeQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        } else {
          return item;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    sumCartTotal: (state) => {
      state.cartTotal = state.cart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      console.log(state.cartTotal);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) =>
          !(item.id === action.payload.id && item.size === action.payload.size)
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});
export const { addToCart, changeQuantity, removeFromCart, sumCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
