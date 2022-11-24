import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { categoriesMapSelector } from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoryMap = useSelector(categoriesMapSelector);

  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [categoryMap, category]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((prod) => <ProductCard key={prod.id} product={prod} />)}
      </div>
    </>
  );
};

export default Category;
