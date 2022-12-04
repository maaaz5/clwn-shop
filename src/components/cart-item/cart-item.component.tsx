import { FC } from "react";
import "./cart-item.styles.tsx";
import { CartItem as CartItemType } from "../../store/cart/cart.types";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

type CartItemProps = {
  product: CartItemType;
};
const CartItem: FC<CartItemProps> = ({ product }) => {
  const { name, price, quantity, imageUrl } = product;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
