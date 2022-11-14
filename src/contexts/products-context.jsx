import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const PorductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <PorductsContext.Provider value={value}>
      {children}
    </PorductsContext.Provider>
  );
};
