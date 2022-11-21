import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoryMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});
  const value = { categoryMap };

  useEffect(() => {
    const getCategoryMap = async () => {
      const categories = await getCategoriesAndDocuments();
      setCategoryMap(categories);
    };

    getCategoryMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
