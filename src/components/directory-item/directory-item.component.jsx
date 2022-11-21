import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  DirectoryItemContainer,
  BodyContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category: { imageUrl, title, route } }) => {
  const navigate = useNavigate();

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
