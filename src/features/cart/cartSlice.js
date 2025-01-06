import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId != action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId == action.payload);

      item.quantity++;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId == action.payload);

      item.quantity++;
    },
  },
});

export const {
  addItem,
  deleteItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
