import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart, removeQuanityItem, deleteFromCart } =
    useContext(CartContext);

  return (
    <div>
      {cartItems.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <button onClick={() => addItemToCart(item)}>+</button>
          <p>{item.quantity}</p>
          <button onClick={() => removeQuanityItem(item)}>-</button>
          <div>
            <button onClick={() => deleteFromCart(item)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
