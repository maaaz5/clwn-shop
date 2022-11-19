import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { addItemToCart, removeQuanityItem, deleteFromCart } =
    useContext(CartContext);

  const { name, imageUrl, quantity, price } = product;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <span className="arrow" onClick={() => removeQuanityItem(product)}>
          &#10094;
        </span>{" "}
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItemToCart(product)}>
          &#10095;
        </span>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteFromCart(product)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
