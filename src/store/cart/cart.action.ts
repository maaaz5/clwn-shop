import { CART_ACTION_TYPES } from "./cart.types";
//utils
import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
//types
import { CategoryItem } from "../categories/categories.types";
import { CartItem } from "./cart.types";

//helper function
const addCartItem = (
  cartItems: Array<CartItem>,
  productToAdd: CategoryItem
): Array<CartItem> => {
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

const removeItemQuantity = (
  cartItems: Array<CartItem>,
  productToAdd: CartItem
): Array<CartItem> => {
  const newItems = cartItems.map((item) =>
    item.id === productToAdd.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );

  return newItems.filter((item) => item.quantity !== 0);
};

//types
export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.IS_CART_OPEN,
  boolean
>;
export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  Array<CartItem>
>;

//actions
export const setIsCartOpen = withMatcher(
  (bool: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.IS_CART_OPEN, bool)
);
export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

//sub actions
export const deleteFromCart = (
  cartItems: Array<CartItem>,
  productToDelete: CartItem
) => {
  const newCartItems = cartItems.filter(
    (item) => item.id !== productToDelete.id
  );
  return setCartItems(newCartItems);
};

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeQuanityItem = (
  cartItems: CartItem[],
  productToAdd: CartItem
) => {
  const newCartItems = removeItemQuantity(cartItems, productToAdd);
  return setCartItems(newCartItems);
};
