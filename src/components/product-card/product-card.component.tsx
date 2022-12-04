import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { cartItemsSelector } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/categories.types";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { Footer, ProductCartContainer } from "./product-card.styles";

type ProductCartProps = {
  product: CategoryItem;
};
const ProductCard = ({ product }: ProductCartProps) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />

      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>

      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={() => dispatch(addItemToCart(cartItems, product))}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
