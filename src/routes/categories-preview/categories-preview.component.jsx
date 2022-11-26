import { useSelector } from "react-redux";

import {
  categoriesMapSelector,
  setCategoriesIsLoading,
} from "../../store/categories/categories.selector";

import Spinner from "../../components/spinner/spinner.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoryMap = useSelector(categoriesMapSelector);
  const isLoading = useSelector(setCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoryMap).map((title) => {
          const products = categoryMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
