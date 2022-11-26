import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  categoriesMapSelector,
  setCategoriesIsLoading,
} from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoryMap = useSelector(categoriesMapSelector);
  const isLoading = useSelector(setCategoriesIsLoading);

  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [categoryMap, category]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
