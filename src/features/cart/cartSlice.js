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

      item.quantity--;
      if (item.quantity <= 0) cartSlice.caseReducers.deleteItem(state, action);
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

export const getTotalPrice = (state) => {
  return state.cart.cart.reduce((acc, cur) => {
    return acc + cur.unitPrice * cur.quantity;
  }, 0);
};
export const getTotalQuantity = (state) => {
  return state.cart.cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
};

export const getItemsQuantity = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId == id)?.quantity ?? 0;
};
