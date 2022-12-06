import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeQuanityItem,
  deleteFromCart,
} from "../../store/cart/cart.action";
import { CartItem } from "../../store/cart/cart.types";
import { cartItemsSelector } from "../../store/cart/cart.selector";

import { CheckoutItemContainer, ImageContainer } from "./checkout-item.styles";

type CheckoutItemProps = {
  product: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  const { name, imageUrl, quantity, price } = product;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className="name">{name}</span>

      <span className="quantity">
        <span
          className="arrow"
          onClick={() => dispatch(removeQuanityItem(cartItems, product))}
        >
          &#10094;
        </span>{" "}
        <span className="value">{quantity}</span>
        <span
          className="arrow"
          onClick={() => dispatch(addItemToCart(cartItems, product))}
        >
          &#10095;
        </span>
      </span>

      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(deleteFromCart(cartItems, product))}
      >
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
