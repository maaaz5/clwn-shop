import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "./../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const clickHandle = () => navigate("/checkout");

  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem product={item} key={item.id} />)
        ) : (
          <EmptyMessage>You cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>

      <Button onClick={clickHandle}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};
export default CartDropdown;
