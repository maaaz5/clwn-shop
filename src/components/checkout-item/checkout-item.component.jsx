import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeQuanityItem,
  deleteFromCart,
} from "../../store/cart/cart.action";

import "./checkout-item.styles.scss";
import { cartItemsSelector } from "../../store/cart/cart.selector";

const CheckoutItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  const { name, imageUrl, quantity, price } = product;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
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
    </div>
  );
};

export default CheckoutItem;
