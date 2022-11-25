import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemQuantity = (cartItems, productToAdd) => {
  const newItems = cartItems.map((item) =>
    item.id === productToAdd.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );

  return newItems.filter((item) => item.quantity != 0);
};

export const setIsCartOpen = (bool) => ({
  type: CART_ACTION_TYPES.IS_CART_OPEN,
  payload: bool,
});

export const deleteFromCart = (cartItems, productToDelete) => {
  const newCartItems = cartItems.filter(
    (item) => item.id != productToDelete.id
  );
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const removeQuanityItem = (cartItems, productToAdd) => {
  const newCartItems = removeItemQuantity(cartItems, productToAdd);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
