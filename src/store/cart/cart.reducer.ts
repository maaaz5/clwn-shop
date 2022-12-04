import { AnyAction } from "redux";
import { CartItem } from "./cart.types";
import { setIsCartOpen, setCartItems } from "./cart.action";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: Array<CartItem>;
  readonly cartTotal: number;
  readonly itemsCount: number;
};

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  itemsCount: 0,
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
