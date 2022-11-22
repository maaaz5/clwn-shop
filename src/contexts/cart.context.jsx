import { createContext, useReducer } from "react";

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

const cartConstantes = {
  IS_CART_OPEN: "IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  itemsCount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case cartConstantes.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case cartConstantes.IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`unhandled type ${type} in cart Reducer`);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeQuanityItem: () => {},
  deleteFromCart: () => {},
  newCartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartTotal, itemsCount }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = (bool) =>
    dispatch({ type: cartConstantes.IS_CART_OPEN, payload: bool });

  const updateCartReducerState = (newCartItems) => {
    const newCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: cartConstantes.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        itemsCount: newCount,
        cartTotal: newTotal,
      },
    });
  };

  //delete item from cart
  const deleteFromCart = (productToDelete) => {
    const newCartItems = cartItems.filter(
      (item) => item.id != productToDelete.id
    );
    updateCartReducerState(newCartItems);
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartReducerState(newCartItems);
  };

  const removeQuanityItem = (productToAdd) => {
    const newCartItems = removeItemQuantity(cartItems, productToAdd);
    updateCartReducerState(newCartItems);
  };

  const val = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    itemsCount,
    removeQuanityItem,
    deleteFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={val}>{children}</CartContext.Provider>;
};
