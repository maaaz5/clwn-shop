import { createSelector } from "reselect";

const cartReducer = (state) => state.cart;

export const cartItemsSelector = createSelector(
  [cartReducer],
  (cart) => cart.cartItems
);

export const isCartOpenSelector = createSelector(
  [cartReducer],
  (cart) => cart.isCartOpen
);

export const countSelector = createSelector([cartItemsSelector], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const totalSelector = createSelector([cartItemsSelector], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
