import { useSelector } from "react-redux";

import { categoriesMapSelector } from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoryMap = useSelector(categoriesMapSelector);

  return (
    <>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
