import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeQuanityItem: () => {},
  deleteFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);

  const addCartItem = (cartItems, productToAdd) => {
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

  const removeItemQuantity = (cartItems, productToAdd) => {
    const newItems = cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    return newItems.filter((item) => item.quantity != 0);
  };

  //delete item from cart

  const deleteFromCart = (productToDelete) =>
    setCartItems(cartItems.filter((item) => item.id != productToDelete.id));

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeQuanityItem = (productToAdd) => {
    setCartItems(removeItemQuantity(cartItems, productToAdd));
  };

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setItemsCount(count);
  }, [cartItems]);

  const val = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    itemsCount,
    removeQuanityItem,
    deleteFromCart,
  };

  return <CartContext.Provider value={val}>{children}</CartContext.Provider>;
};
