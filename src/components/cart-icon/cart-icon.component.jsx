import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemsCount } = useContext(CartContext);

  const toggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
