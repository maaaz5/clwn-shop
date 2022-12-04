import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemContainer,
  BodyContainer,
} from "./directory-item.styles";
import { Category } from "../directory/directory.component";

type DirectoryItemProps = {
  category: Category;
};

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const navigate = useNavigate();
  const { imageUrl, title, route } = category;

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <BodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
