import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { cartItemsSelector } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(cartItemsSelector);

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
